import { useEffect, useMemo, useState } from "react";

const CONTENT_TABS = [
  { id: "news", label: "News" },
  { id: "blog", label: "Blog" },
];

const EMPTY_CONTENT = {
  news: [],
  blog: [],
};

export default function useAdminContent(initialContent = EMPTY_CONTENT) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 900 : false
  );
  const [activeTab, setActiveTab] = useState("news");
  const [contentStore, setContentStore] = useState(() => ({
    news: Array.isArray(initialContent.news) ? initialContent.news : [],
    blog: Array.isArray(initialContent.blog) ? initialContent.blog : [],
  }));
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeEntries = useMemo(() => {
    return contentStore[activeTab] || [];
  }, [contentStore, activeTab]);

  const stats = useMemo(() => {
    const allEntries = [...(contentStore.news || []), ...(contentStore.blog || [])];

    return {
      total: allEntries.length,
      drafts: allEntries.filter((entry) => entry.status === "Draft").length,
      featured: allEntries.filter((entry) => entry.featured).length,
      newsletter: allEntries.filter((entry) => entry.sendNewsletter).length,
    };
  }, [contentStore]);

  useEffect(() => {
    const found = activeEntries.find((entry) => entry.id === editingId) || null;
    setDraft(found ? { ...found } : null);
  }, [editingId, activeEntries]);

  const handleCreateNew = () => {
    const newEntry = {
      id: `${activeTab}-${Date.now()}`,
      category: activeTab === "news" ? "Platform Updates" : "Platform Education",
      title: "",
      excerpt: "",
      readTime: "4 min read",
      date: "",
      status: "Draft",
      featured: false,
      shareToSocial: true,
      sendNewsletter: false,
    };

    setContentStore((prev) => ({
      ...prev,
      [activeTab]: [newEntry, ...(prev[activeTab] || [])],
    }));
    setEditingId(newEntry.id);
  };

  const handleDeleteEntry = (entryId) => {
    setContentStore((prev) => ({
      ...prev,
      [activeTab]: (prev[activeTab] || []).filter((entry) => entry.id !== entryId),
    }));

    if (editingId === entryId) {
      setEditingId(null);
      setDraft(null);
    }
  };

  const handleSetFeatured = (entryId) => {
    setContentStore((prev) => ({
      ...prev,
      [activeTab]: (prev[activeTab] || []).map((entry) => ({
        ...entry,
        featured: entry.id === entryId,
      })),
    }));

    if (editingId === entryId && draft) {
      setDraft((prev) => (prev ? { ...prev, featured: true } : prev));
    }
  };

  const handleDraftChange = (field, value) => {
    setDraft((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveDraft = () => {
    if (!draft) return;

    setContentStore((prev) => ({
      ...prev,
      [activeTab]: (prev[activeTab] || []).map((entry) =>
        entry.id === draft.id ? { ...draft } : entry
      ),
    }));
  };

  const handlePublish = () => {
    if (!draft) return;

    const publishedDraft = {
      ...draft,
      status: "Published",
    };

    setDraft(publishedDraft);

    setContentStore((prev) => ({
      ...prev,
      [activeTab]: (prev[activeTab] || []).map((entry) =>
        entry.id === publishedDraft.id ? publishedDraft : entry
      ),
    }));
  };

  return {
    contentTabs: CONTENT_TABS,
    isDesktop,
    activeTab,
    setActiveTab,
    contentStore,
    setContentStore,
    stats,
    activeEntries,
    editingId,
    draft,
    setEditingId,
    setDraft,
    handleCreateNew,
    handleDeleteEntry,
    handleSetFeatured,
    handleDraftChange,
    handleSaveDraft,
    handlePublish,
  };
}