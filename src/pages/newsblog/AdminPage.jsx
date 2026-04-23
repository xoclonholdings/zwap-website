import React, { useEffect, useMemo, useState } from "react";
import GlobalFooterLinks from "../../components/GlobalFooterLinks";

const CONTENT_TABS = [
  { id: "news", label: "News" },
  { id: "blog", label: "Blog" },
];

const INITIAL_CONTENT = {
  news: [
    {
      id: "news-1",
      category: "Platform Updates",
      title: "What is ZWAP!?",
      excerpt:
        "Get a clear introduction to the ZWAP! ecosystem, including movement-based progression, delayed rewards, and structured value.",
      readTime: "4 min read",
      date: "Apr 2026",
      status: "Draft",
      featured: true,
      shareToSocial: true,
      sendNewsletter: true,
    },
    {
      id: "news-2",
      category: "Launch Updates",
      title: "Understanding the Shop Before Swap",
      excerpt:
        "The Shop comes first so users build a relationship with utility before exchange is introduced later in the lifecycle.",
      readTime: "4 min read",
      date: "Apr 2026",
      status: "Draft",
      featured: false,
      shareToSocial: true,
      sendNewsletter: false,
    },
  ],
  blog: [
    {
      id: "blog-1",
      category: "Rewards & Progression",
      title: "Why Delayed Rewards Build Better Habits",
      excerpt:
        "Delayed value creates stronger behavioral loops, healthier progression, and more meaningful retention over time.",
      readTime: "5 min read",
      date: "Apr 2026",
      status: "Draft",
      featured: true,
      shareToSocial: true,
      sendNewsletter: true,
    },
    {
      id: "blog-2",
      category: "Financial Literacy",
      title: "Why Financial Literacy Matters",
      excerpt:
        "ZWAP! is designed to make value, utility, and progression easier to understand for users new to digital finance.",
      readTime: "6 min read",
      date: "Apr 2026",
      status: "Draft",
      featured: false,
      shareToSocial: true,
      sendNewsletter: false,
    },
  ],
};

function SectionEyebrow({ children }) {
  return (
    <div
      style={{
        fontSize: "12px",
        fontWeight: 900,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "rgba(245,247,255,0.48)",
        marginBottom: "10px",
      }}
    >
      {children}
    </div>
  );
}

function GlassPanel({ children, style = {} }) {
  return (
    <section
      style={{
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(14,16,30,0.92) 0%, rgba(8,10,22,0.96) 100%)",
        boxShadow:
          "0 18px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)",
        padding: "20px 18px",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

function SmallMetric({ label, value }) {
  return (
    <div
      style={{
        borderRadius: "18px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.035)",
        padding: "14px 14px",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          fontWeight: 900,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(245,247,255,0.48)",
          marginBottom: "8px",
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: "24px",
          fontWeight: 900,
          lineHeight: 1,
          color: "#F8FAFF",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function HeaderTabButton({ isActive, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: "none",
        cursor: "pointer",
        padding: "11px 18px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 900,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: isActive ? "#05060B" : "rgba(245,247,255,0.78)",
        background: isActive
          ? "linear-gradient(90deg, #66F2FF 0%, #B486FF 100%)"
          : "rgba(255,255,255,0.06)",
        boxShadow: isActive
          ? "0 0 18px rgba(180,134,255,0.22)"
          : "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      {children}
    </button>
  );
}

function AdminInput({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: "100%",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.04)",
        color: "#F8FAFF",
        padding: "14px 14px",
        fontSize: "14px",
        fontWeight: 600,
        outline: "none",
        boxSizing: "border-box",
      }}
    />
  );
}

function AdminTextarea({ value, onChange, placeholder, rows = 4 }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      style={{
        width: "100%",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.04)",
        color: "#F8FAFF",
        padding: "14px 14px",
        fontSize: "14px",
        fontWeight: 600,
        outline: "none",
        boxSizing: "border-box",
        resize: "vertical",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    />
  );
}

function ActionButton({ label, onClick, primary = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: "100%",
        border: primary
          ? "1px solid rgba(103,242,255,0.24)"
          : "1px solid rgba(255,255,255,0.08)",
        background: primary
          ? "linear-gradient(90deg, rgba(103,242,255,0.18) 0%, rgba(180,134,255,0.18) 100%)"
          : "rgba(255,255,255,0.04)",
        color: "#F8FAFF",
        borderRadius: "14px",
        padding: "14px 14px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: 800,
        textAlign: "center",
      }}
    >
      {label}
    </button>
  );
}

function StatusPill({ value }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px 10px",
        borderRadius: "999px",
        background:
          value === "Published"
            ? "rgba(103,242,255,0.12)"
            : "rgba(180,134,255,0.12)",
        border:
          value === "Published"
            ? "1px solid rgba(103,242,255,0.22)"
            : "1px solid rgba(180,134,255,0.22)",
        color: value === "Published" ? "#67F2FF" : "#B486FF",
        fontSize: "11px",
        fontWeight: 900,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      {value}
    </span>
  );
}

function TogglePill({ active, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: active
          ? "1px solid rgba(103,242,255,0.26)"
          : "1px solid rgba(255,255,255,0.10)",
        background: active
          ? "rgba(103,242,255,0.10)"
          : "rgba(255,255,255,0.04)",
        color: active ? "#67F2FF" : "rgba(245,247,255,0.76)",
        borderRadius: "999px",
        padding: "10px 14px",
        cursor: "pointer",
        fontSize: "11px",
        fontWeight: 900,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </button>
  );
}

function EntryRow({
  entry,
  activeContentType,
  onEdit,
  onDelete,
  onSetFeatured,
}) {
  return (
    <div
      style={{
        borderRadius: "18px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
        padding: "16px 14px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 10px",
              borderRadius: "999px",
              background: "rgba(103,242,255,0.10)",
              border: "1px solid rgba(103,242,255,0.18)",
              color: "#67F2FF",
              fontSize: "11px",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {entry.category}
          </span>

          <StatusPill value={entry.status} />

          {entry.featured ? (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 10px",
                borderRadius: "999px",
                background: "rgba(255,183,92,0.10)",
                border: "1px solid rgba(255,183,92,0.18)",
                color: "#FFB75C",
                fontSize: "11px",
                fontWeight: 900,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Featured
            </span>
          ) : null}
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "rgba(235,239,255,0.56)",
            fontWeight: 700,
          }}
        >
          {activeContentType === "news" ? "News Entry" : "Blog Entry"}
        </div>
      </div>

      <div
        style={{
          fontSize: "20px",
          fontWeight: 900,
          lineHeight: 1.15,
          color: "#F8FAFF",
          marginBottom: "8px",
        }}
      >
        {entry.title || "Untitled Entry"}
      </div>

      <div
        style={{
          fontSize: "14px",
          lineHeight: 1.65,
          color: "rgba(235,239,255,0.72)",
          marginBottom: "14px",
        }}
      >
        {entry.excerpt || "No excerpt added yet."}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          fontSize: "12px",
          color: "rgba(235,239,255,0.54)",
          marginBottom: "14px",
        }}
      >
        <span>{entry.readTime}</span>
        <span>{entry.date || "No date"}</span>
        <span>{entry.shareToSocial ? "Social On" : "Social Off"}</span>
        <span>{entry.sendNewsletter ? "Newsletter On" : "Newsletter Off"}</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "10px",
        }}
      >
        <ActionButton label="Edit" onClick={() => onEdit(entry.id)} />
        <ActionButton
          label={entry.featured ? "Featured" : "Set Featured"}
          onClick={() => onSetFeatured(entry.id)}
        />
        <ActionButton label="Delete" onClick={() => onDelete(entry.id)} />
      </div>
    </div>
  );
}

function RestrictedAccess({ onBack }) {
  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: `
          radial-gradient(circle at 72% 22%, rgba(204, 91, 255, 0.10), transparent 16%),
          radial-gradient(circle at 18% 28%, rgba(88, 240, 255, 0.08), transparent 14%),
          radial-gradient(circle at 55% 62%, rgba(255, 176, 86, 0.05), transparent 12%),
          linear-gradient(180deg, #030308 0%, #080913 58%, #04050A 100%)
        `,
        color: "#F5F7FF",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "620px",
          minHeight: "100dvh",
          padding:
            "calc(env(safe-area-inset-top, 0px) + 18px) 16px calc(env(safe-area-inset-bottom, 0px) + 32px)",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
        }}
      >
        <GlassPanel
          style={{
            width: "100%",
            textAlign: "center",
            padding: "28px 22px",
          }}
        >
          <div
            style={{
              width: "74px",
              height: "74px",
              margin: "0 auto 16px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(180,134,255,0.10)",
              border: "1px solid rgba(180,134,255,0.18)",
              boxShadow: "0 0 26px rgba(180,134,255,0.12)",
              fontSize: "30px",
            }}
          >
            🔒
          </div>

          <h1
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(32px, 9vw, 46px)",
              lineHeight: 1.02,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#F8FAFF",
            }}
          >
            Admin Only
          </h1>

          <p
            style={{
              margin: "0 auto 20px",
              maxWidth: "480px",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.74)",
            }}
          >
            This area is restricted to authorized ZWAP! administrators only.
            Please return to the public site or sign in with approved admin
            credentials.
          </p>

          <div
            style={{
              maxWidth: "220px",
              margin: "0 auto",
            }}
          >
            <ActionButton label="Back" onClick={onBack} primary />
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}

export default function AdminPage({
  onBack,
  onPrivacy,
  onTerms,
  onSitemap,
  isAdminAuthenticated = false,
}) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 900 : false
  );
  const [activeTab, setActiveTab] = useState("news");
  const [contentStore, setContentStore] = useState(INITIAL_CONTENT);
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
    const allEntries = [...contentStore.news, ...contentStore.blog];

    return {
      total: allEntries.length,
      drafts: allEntries.filter((entry) => entry.status === "Draft").length,
      featured: allEntries.filter((entry) => entry.featured).length,
      newsletter: allEntries.filter((entry) => entry.sendNewsletter).length,
    };
  }, [contentStore]);

  useEffect(() => {
    const found =
      activeEntries.find((entry) => entry.id === editingId) || null;

    setDraft(found ? { ...found } : null);
  }, [editingId, activeEntries]);

  if (!isAdminAuthenticated) {
    return <RestrictedAccess onBack={onBack} />;
  }

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
      [activeTab]: [newEntry, ...prev[activeTab]],
    }));
    setEditingId(newEntry.id);
  };

  const handleDeleteEntry = (entryId) => {
    setContentStore((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].filter((entry) => entry.id !== entryId),
    }));

    if (editingId === entryId) {
      setEditingId(null);
      setDraft(null);
    }
  };

  const handleSetFeatured = (entryId) => {
    setContentStore((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((entry) => ({
        ...entry,
        featured: entry.id === entryId,
      })),
    }));

    if (editingId === entryId && draft) {
      setDraft({
        ...draft,
        featured: true,
      });
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
      [activeTab]: prev[activeTab].map((entry) =>
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
      [activeTab]: prev[activeTab].map((entry) =>
        entry.id === publishedDraft.id ? publishedDraft : entry
      ),
    }));
  };

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: `
          radial-gradient(circle at 72% 22%, rgba(204, 91, 255, 0.10), transparent 16%),
          radial-gradient(circle at 18% 28%, rgba(88, 240, 255, 0.08), transparent 14%),
          radial-gradient(circle at 55% 62%, rgba(255, 176, 86, 0.05), transparent 12%),
          linear-gradient(180deg, #030308 0%, #080913 58%, #04050A 100%)
        `,
        color: "#F5F7FF",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1240px",
          minHeight: "100dvh",
          padding: isDesktop
            ? "32px 28px 36px"
            : "calc(env(safe-area-inset-top, 0px) + 14px) 16px calc(env(safe-area-inset-bottom, 0px) + 28px)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: isDesktop ? "28px" : "18px",
          }}
        >
          <button
            onClick={onBack}
            style={{
              border: "none",
              background: "transparent",
              color: "rgba(245,247,255,0.76)",
              fontSize: isDesktop ? "17px" : "15px",
              fontWeight: 700,
              cursor: "pointer",
              padding: 0,
            }}
          >
            ← Back
          </button>

          <div
            style={{
              fontSize: isDesktop ? "14px" : "13px",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(245,247,255,0.56)",
            }}
          >
            Admin
          </div>

          <div style={{ width: isDesktop ? "60px" : "48px" }} />
        </div>

        <section
          style={{
            marginBottom: "18px",
          }}
        >
          <GlassPanel
            style={{
              padding: isDesktop ? "24px 24px" : "20px 18px",
            }}
          >
            <SectionEyebrow>Editorial Control Center</SectionEyebrow>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                textAlign: isDesktop ? "left" : "center",
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontSize: isDesktop
                    ? "clamp(42px, 5vw, 60px)"
                    : "clamp(32px, 9vw, 44px)",
                  lineHeight: 1.02,
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  color: "#F8FAFF",
                }}
              >
                ZWAP! Editorial Admin
              </h1>

              <p
                style={{
                  margin: 0,
                  maxWidth: "860px",
                  fontSize: isDesktop ? "18px" : "15px",
                  lineHeight: 1.7,
                  color: "rgba(235,239,255,0.76)",
                }}
              >
                Manage News Blog content, update featured entries, control social
                readiness, prepare newsletter sends, and maintain the editorial
                surface that powers public updates across the ZWAP! site.
              </p>
            </div>
          </GlassPanel>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "repeat(4, minmax(0, 1fr))" : "1fr 1fr",
            gap: "12px",
            marginBottom: "18px",
          }}
        >
          <SmallMetric label="Total Entries" value={stats.total} />
          <SmallMetric label="Drafts" value={stats.drafts} />
          <SmallMetric label="Featured" value={stats.featured} />
          <SmallMetric label="Newsletter Ready" value={stats.newsletter} />
        </section>

        <section
          style={{
            marginBottom: "18px",
          }}
        >
          <GlassPanel>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <div>
                <SectionEyebrow>Content Lane</SectionEyebrow>
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: 900,
                    lineHeight: 1.1,
                    color: "#F8FAFF",
                  }}
                >
                  {activeTab === "news" ? "News Management" : "Blog Management"}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {CONTENT_TABS.map((tab) => (
                  <HeaderTabButton
                    key={tab.id}
                    isActive={activeTab === tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setEditingId(null);
                    }}
                  >
                    {tab.label}
                  </HeaderTabButton>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isDesktop ? "220px 1fr" : "1fr",
                gap: "12px",
              }}
            >
              <ActionButton
                label={activeTab === "news" ? "Create News Post" : "Create Blog Post"}
                onClick={handleCreateNew}
                primary
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isDesktop ? "repeat(3, minmax(0, 1fr))" : "1fr",
                  gap: "10px",
                }}
              >
                <ActionButton label="Prepare Newsletter Send" onClick={() => {}} />
                <ActionButton label="Preview Public Layout" onClick={() => {}} />
                <ActionButton label="Review Share Readiness" onClick={() => {}} />
              </div>
            </div>
          </GlassPanel>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "minmax(0, 0.95fr) minmax(0, 1.35fr)" : "1fr",
            gap: "18px",
            marginBottom: "24px",
          }}
        >
          <GlassPanel>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                marginBottom: "14px",
              }}
            >
              <div>
                <SectionEyebrow>Entry Queue</SectionEyebrow>
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: 900,
                    color: "#F8FAFF",
                  }}
                >
                  {activeTab === "news" ? "News Entries" : "Blog Entries"}
                </div>
              </div>

              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  color: "rgba(235,239,255,0.54)",
                }}
              >
                {activeEntries.length} total
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gap: "12px",
              }}
            >
              {activeEntries.map((entry) => (
                <EntryRow
                  key={entry.id}
                  entry={entry}
                  activeContentType={activeTab}
                  onEdit={setEditingId}
                  onDelete={handleDeleteEntry}
                  onSetFeatured={handleSetFeatured}
                />
              ))}
            </div>
          </GlassPanel>

          <GlassPanel>
            <div
              style={{
                marginBottom: "14px",
              }}
            >
              <SectionEyebrow>Editor</SectionEyebrow>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 900,
                  color: "#F8FAFF",
                  marginBottom: "8px",
                }}
              >
                {draft ? "Editing Entry" : "Select an Entry"}
              </div>

              <div
                style={{
                  fontSize: "14px",
                  lineHeight: 1.65,
                  color: "rgba(235,239,255,0.72)",
                }}
              >
                {draft
                  ? "Update the content, status, and distribution flags for the selected entry."
                  : "Choose a News or Blog entry from the queue, or create a new one to begin editing."}
              </div>
            </div>

            {draft ? (
              <div
                style={{
                  display: "grid",
                  gap: "12px",
                }}
              >
                <AdminInput
                  value={draft.category}
                  onChange={(e) => handleDraftChange("category", e.target.value)}
                  placeholder="Category"
                />

                <AdminInput
                  value={draft.title}
                  onChange={(e) => handleDraftChange("title", e.target.value)}
                  placeholder="Article title"
                />

                <AdminTextarea
                  value={draft.excerpt}
                  onChange={(e) => handleDraftChange("excerpt", e.target.value)}
                  placeholder="Short excerpt"
                  rows={5}
                />

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isDesktop ? "repeat(3, minmax(0, 1fr))" : "1fr",
                    gap: "12px",
                  }}
                >
                  <AdminInput
                    value={draft.readTime}
                    onChange={(e) => handleDraftChange("readTime", e.target.value)}
                    placeholder="Read time"
                  />
                  <AdminInput
                    value={draft.date}
                    onChange={(e) => handleDraftChange("date", e.target.value)}
                    placeholder="Date"
                  />
                  <AdminInput
                    value={draft.status}
                    onChange={(e) => handleDraftChange("status", e.target.value)}
                    placeholder="Status"
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginTop: "4px",
                  }}
                >
                  <TogglePill
                    active={draft.featured}
                    label={draft.featured ? "Featured On" : "Featured Off"}
                    onClick={() => handleDraftChange("featured", !draft.featured)}
                  />

                  <TogglePill
                    active={draft.shareToSocial}
                    label={draft.shareToSocial ? "Social Share On" : "Social Share Off"}
                    onClick={() =>
                      handleDraftChange("shareToSocial", !draft.shareToSocial)
                    }
                  />

                  <TogglePill
                    active={draft.sendNewsletter}
                    label={
                      draft.sendNewsletter
                        ? "Newsletter Send On"
                        : "Newsletter Send Off"
                    }
                    onClick={() =>
                      handleDraftChange("sendNewsletter", !draft.sendNewsletter)
                    }
                  />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isDesktop ? "repeat(3, minmax(0, 1fr))" : "1fr",
                    gap: "10px",
                    marginTop: "8px",
                  }}
                >
                  <ActionButton label="Save Draft" onClick={handleSaveDraft} primary />
                  <ActionButton label="Publish Entry" onClick={handlePublish} />
                  <ActionButton
                    label="Clear Selection"
                    onClick={() => {
                      setEditingId(null);
                      setDraft(null);
                    }}
                  />
                </div>
              </div>
            ) : null}
          </GlassPanel>
        </section>

        <GlassPanel
          style={{
            marginBottom: "24px",
          }}
        >
          <SectionEyebrow>Current Status</SectionEyebrow>

          <div
            style={{
              fontSize: isDesktop ? "16px" : "14px",
              lineHeight: 1.75,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            This admin surface is now structured as a protected editorial
            workspace. News and Blog are separated, entries can be edited from a
            focused queue, featured placement is controlled at the entry level,
            and newsletter or social flags are handled directly inside the
            editor. For real production use, pair this page with actual route
            protection and authenticated admin state in the parent layer.
          </div>
        </GlassPanel>

        <GlobalFooterLinks
          isDesktop={isDesktop}
          onPrivacy={onPrivacy}
          onTerms={onTerms}
          onSitemap={onSitemap}
        />
      </div>
    </div>
  );
}