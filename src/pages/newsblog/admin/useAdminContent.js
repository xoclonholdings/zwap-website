import { useEffect, useMemo, useState } from "react";

const CONTENT_TABS = [
  { id: "news", label: "News" },
  { id: "blog", label: "Blog" },
];

const EMPTY_CONTENT = {
  news: [],
  blog: [],
};

const ADMIN_GET_POSTS_URL = "/.netlify/functions/get-posts";
const ADMIN_CREATE_POST_URL = "/.netlify/functions/create-post";
const ADMIN_UPDATE_POST_URL = "/.netlify/functions/update-post";
const ADMIN_DELETE_POST_URL = "/.netlify/functions/delete-post";

function mapCategoryToTab(category) {
  return category === "blog" ? "blog" : "news";
}

function mapEntryFromDb(entry) {
  return {
    id: entry._id || entry.id || "",
    category: entry.category || "news",
    title: entry.title || "",
    excerpt: entry.excerpt || "",
    body: entry.body || "",
    readTime: entry.readTime || "4 min read",
    date: entry.date || "",
    status: entry.status === "published" ? "Published" : "Draft",
    featured: Boolean(entry.featured),
    shareToSocial: Boolean(entry.shareToSocial),
    sendNewsletter: Boolean(entry.sendNewsletter),
    slug: entry.slug || "",
    tags: Array.isArray(entry.tags) ? entry.tags : [],
    coverImageUrl: entry.coverImageUrl || "",
    authorName: entry.authorName || "",
    sponsorName: entry.sponsorName || "",
    createdAt: entry.createdAt || "",
    updatedAt: entry.updatedAt || "",
    publishedAt: entry.publishedAt || "",
    deletedAt: entry.deletedAt || null,
  };
}

function mapDraftToCreatePayload(draft, activeTab) {
  return {
    title: draft.title || "",
    slug: draft.slug || "",
    excerpt: draft.excerpt || "",
    body: draft.body || "",
    category: activeTab,
    tags: Array.isArray(draft.tags) ? draft.tags : [],
    coverImageUrl: draft.coverImageUrl || "",
    authorName: draft.authorName || "",
    sponsorName: draft.sponsorName || "",
    date: draft.date || "",
    readTime: draft.readTime || "4 min read",
    status: draft.status === "Published" ? "published" : "draft",
    featured: Boolean(draft.featured),
    shareToSocial: Boolean(draft.shareToSocial),
    sendNewsletter: Boolean(draft.sendNewsletter),
  };
}

function mapDraftToUpdatePayload(draft, activeTab) {
  return {
    id: draft.id,
    title: draft.title || "",
    slug: draft.slug || "",
    excerpt: draft.excerpt || "",
    body: draft.body || "",
    category: activeTab,
    tags: Array.isArray(draft.tags) ? draft.tags : [],
    coverImageUrl: draft.coverImageUrl || "",
    authorName: draft.authorName || "",
    sponsorName: draft.sponsorName || "",
    date: draft.date || "",
    readTime: draft.readTime || "4 min read",
    status: draft.status === "Published" ? "published" : "draft",
    featured: Boolean(draft.featured),
    shareToSocial: Boolean(draft.shareToSocial),
    sendNewsletter: Boolean(draft.sendNewsletter),
  };
}

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
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadPosts() {
      try {
        setIsLoading(true);
        setLoadError("");

        const response = await fetch(ADMIN_GET_POSTS_URL);

        if (!response.ok) {
          throw new Error("Failed to load admin posts.");
        }

        const posts = await response.json();

        if (!isMounted) return;

        const nextStore = { news: [], blog: [] };

        (Array.isArray(posts) ? posts : []).forEach((entry) => {
          const mapped = mapEntryFromDb(entry);
          const tab = mapCategoryToTab(mapped.category);
          nextStore[tab].push(mapped);
        });

        setContentStore(nextStore);
      } catch (error) {
        if (!isMounted) return;
        setLoadError(error.message || "Failed to load admin posts.");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPosts();

    return () => {
      isMounted = false;
    };
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

  const handleCreateNew = async () => {
    const newEntry = {
      id: "",
      category: activeTab,
      title: "",
      excerpt: "",
      body: "",
      readTime: "4 min read",
      date: "",
      status: "Draft",
      featured: false,
      shareToSocial: true,
      sendNewsletter: false,
      slug: "",
      tags: [],
      coverImageUrl: "",
      authorName: "",
      sponsorName: "",
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
      deletedAt: null,
    };

    try {
      const response = await fetch(ADMIN_CREATE_POST_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mapDraftToCreatePayload(newEntry, activeTab)),
      });

      if (!response.ok) {
        throw new Error("Failed to create post.");
      }

      const result = await response.json();

      const savedEntry = {
        ...newEntry,
        id: result.id,
      };

      setContentStore((prev) => ({
        ...prev,
        [activeTab]: [savedEntry, ...(prev[activeTab] || [])],
      }));

      setEditingId(savedEntry.id);
    } catch (error) {
      setLoadError(error.message || "Failed to create post.");
    }
  };

  const handleDeleteEntry = async (entryId) => {
    try {
      const response = await fetch(`${ADMIN_DELETE_POST_URL}?id=${entryId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete post.");
      }

      setContentStore((prev) => ({
        ...prev,
        [activeTab]: (prev[activeTab] || []).filter((entry) => entry.id !== entryId),
      }));

      if (editingId === entryId) {
        setEditingId(null);
        setDraft(null);
      }
    } catch (error) {
      setLoadError(error.message || "Failed to delete post.");
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

  const handleSaveDraft = async () => {
    if (!draft || !draft.id) return;

    try {
      const response = await fetch(ADMIN_UPDATE_POST_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mapDraftToUpdatePayload(draft, activeTab)),
      });

      if (!response.ok) {
        throw new Error("Failed to save post.");
      }

      setContentStore((prev) => ({
        ...prev,
        [activeTab]: (prev[activeTab] || []).map((entry) =>
          entry.id === draft.id ? { ...draft } : entry
        ),
      }));
    } catch (error) {
      setLoadError(error.message || "Failed to save post.");
    }
  };

  const handlePublish = async () => {
    if (!draft || !draft.id) return;

    const publishedDraft = {
      ...draft,
      status: "Published",
    };

    try {
      const response = await fetch(ADMIN_UPDATE_POST_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mapDraftToUpdatePayload(publishedDraft, activeTab)),
      });

      if (!response.ok) {
        throw new Error("Failed to publish post.");
      }

      setDraft(publishedDraft);

      setContentStore((prev) => ({
        ...prev,
        [activeTab]: (prev[activeTab] || []).map((entry) =>
          entry.id === publishedDraft.id ? publishedDraft : entry
        ),
      }));
    } catch (error) {
      setLoadError(error.message || "Failed to publish post.");
    }
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
    isLoading,
    loadError,
    handleCreateNew,
    handleDeleteEntry,
    handleSetFeatured,
    handleDraftChange,
    handleSaveDraft,
    handlePublish,
  };
}