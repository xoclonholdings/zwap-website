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

function AdminCard({ title, description, accent, children }) {
  return (
    <div
      style={{
        borderRadius: "26px",
        border: `1px solid ${accent.border}`,
        background: `
          radial-gradient(circle at 18% 18%, ${accent.glow}, transparent 22%),
          rgba(255,255,255,0.035)
        `,
        boxShadow: `0 0 28px ${accent.glow}`,
        padding: "22px 20px",
      }}
    >
      <div
        style={{
          fontSize: "22px",
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: "8px",
          color: "#F8FAFF",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "14px",
          lineHeight: 1.65,
          color: "rgba(235,239,255,0.72)",
          marginBottom: "18px",
        }}
      >
        {description}
      </div>

      {children}
    </div>
  );
}

function QuickActionButton({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: "100%",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.04)",
        color: "#F8FAFF",
        borderRadius: "16px",
        padding: "14px 14px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: 700,
        textAlign: "left",
        transition: "all 180ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(180,134,255,0.24)";
        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
      }}
    >
      {label}
    </button>
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

function AdminInput({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: "100%",
        borderRadius: "16px",
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
        borderRadius: "16px",
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

function EntryEditor({
  entry,
  isDesktop,
  activeContentType,
  onUpdate,
  onDelete,
  onSetFeatured,
}) {
  return (
    <article
      style={{
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "radial-gradient(circle at top right, rgba(180,134,255,0.12), transparent 30%), rgba(255,255,255,0.03)",
        padding: "18px",
        boxShadow:
          "0 14px 28px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
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
          <div
            style={{
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(245,247,255,0.48)",
              marginBottom: "6px",
            }}
          >
            {activeContentType === "news" ? "News Entry" : "Blog Entry"}
          </div>

          <div
            style={{
              fontSize: "18px",
              fontWeight: 900,
              color: "#F8FAFF",
              lineHeight: 1.1,
            }}
          >
            {entry.title || "Untitled Entry"}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <QuickActionButton
            label={entry.featured ? "Featured" : "Set Featured"}
            onClick={() => onSetFeatured(entry.id)}
          />
          <QuickActionButton
            label="Delete Entry"
            onClick={() => onDelete(entry.id)}
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        <AdminInput
          value={entry.category}
          onChange={(e) => onUpdate(entry.id, "category", e.target.value)}
          placeholder="Category"
        />

        <AdminInput
          value={entry.title}
          onChange={(e) => onUpdate(entry.id, "title", e.target.value)}
          placeholder="Article title"
        />

        <AdminTextarea
          value={entry.excerpt}
          onChange={(e) => onUpdate(entry.id, "excerpt", e.target.value)}
          placeholder="Short excerpt"
          rows={4}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "repeat(3, minmax(0, 1fr))" : "1fr",
            gap: "12px",
          }}
        >
          <AdminInput
            value={entry.readTime}
            onChange={(e) => onUpdate(entry.id, "readTime", e.target.value)}
            placeholder="Read time"
          />

          <AdminInput
            value={entry.date}
            onChange={(e) => onUpdate(entry.id, "date", e.target.value)}
            placeholder="Date"
          />

          <AdminInput
            value={entry.status}
            onChange={(e) => onUpdate(entry.id, "status", e.target.value)}
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
            active={entry.featured}
            label={entry.featured ? "Featured On" : "Featured Off"}
            onClick={() => onUpdate(entry.id, "featured", !entry.featured)}
          />

          <TogglePill
            active={entry.shareToSocial}
            label={entry.shareToSocial ? "Social Share On" : "Social Share Off"}
            onClick={() =>
              onUpdate(entry.id, "shareToSocial", !entry.shareToSocial)
            }
          />

          <TogglePill
            active={entry.sendNewsletter}
            label={
              entry.sendNewsletter
                ? "Newsletter Send On"
                : "Newsletter Send Off"
            }
            onClick={() =>
              onUpdate(entry.id, "sendNewsletter", !entry.sendNewsletter)
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
          <QuickActionButton label="Save Draft" />
          <QuickActionButton label="Publish Entry" />
          <QuickActionButton label="Preview Share Card" />
        </div>
      </div>
    </article>
  );
}

export default function AdminPage({ onBack, onPrivacy, onTerms, onSitemap }) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 900 : false
  );

  const [activeTab, setActiveTab] = useState("news");
  const [contentStore, setContentStore] = useState(INITIAL_CONTENT);

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

  const accents = {
    purple: {
      border: "rgba(180,134,255,0.20)",
      glow: "rgba(180,134,255,0.10)",
    },
    cyan: {
      border: "rgba(103,242,255,0.20)",
      glow: "rgba(103,242,255,0.10)",
    },
    pink: {
      border: "rgba(255,103,212,0.20)",
      glow: "rgba(255,103,212,0.10)",
    },
    gold: {
      border: "rgba(255,183,92,0.20)",
      glow: "rgba(255,183,92,0.10)",
    },
  };

  const handleAddEntry = () => {
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
  };

  const handleUpdateEntry = (entryId, field, value) => {
    setContentStore((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((entry) =>
        entry.id === entryId ? { ...entry, [field]: value } : entry
      ),
    }));
  };

  const handleDeleteEntry = (entryId) => {
    setContentStore((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].filter((entry) => entry.id !== entryId),
    }));
  };

  const handleSetFeatured = (entryId) => {
    setContentStore((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((entry) => ({
        ...entry,
        featured: entry.id === entryId,
      })),
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
          maxWidth: "1180px",
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
            textAlign: "center",
            marginBottom: isDesktop ? "32px" : "24px",
            maxWidth: "920px",
            marginInline: "auto",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              marginBottom: "18px",
              background: "rgba(180,134,255,0.10)",
              border: "1px solid rgba(180,134,255,0.18)",
              boxShadow: "0 0 26px rgba(180,134,255,0.12)",
              fontSize: "30px",
            }}
          >
            ⚙️
          </div>

          <h1
            style={{
              margin: "0 0 12px",
              fontSize: isDesktop
                ? "clamp(44px, 5vw, 62px)"
                : "clamp(34px, 10vw, 46px)",
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
              margin: "0 auto",
              maxWidth: "760px",
              fontSize: isDesktop ? "19px" : "15px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.78)",
            }}
          >
            Manage news, blog posts, featured placement, newsletter sends,
            social sharing readiness, sponsor announcements, and future content
            publishing across the ZWAP! website.
          </p>
        </section>

        <section
          style={{
            marginBottom: "18px",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(14,16,30,0.92) 0%, rgba(8,10,22,0.96) 100%)",
            boxShadow:
              "0 18px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)",
            padding: isDesktop ? "20px" : "18px 16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            {CONTENT_TABS.map((tab) => (
              <HeaderTabButton
                key={tab.id}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </HeaderTabButton>
            ))}
          </div>

          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.74)",
              textAlign: "center",
              maxWidth: "780px",
              margin: "0 auto",
            }}
          >
            Use this area to create entries that can live on the site, be sent
            through the mailing list, and be shared out to social channels as
            part of the ZWAP! content rhythm.
          </div>
        </section>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "repeat(2, minmax(0, 1fr))" : "1fr",
            gap: "16px",
            marginBottom: "18px",
          }}
        >
          <AdminCard
            title="Editorial Controls"
            description="Create announcements, publish blog posts, manage featured placement, and prepare entries for newsletter and social distribution."
            accent={accents.purple}
          >
            <div
              style={{
                display: "grid",
                gap: "10px",
              }}
            >
              <QuickActionButton
                label={activeTab === "news" ? "Create News Post" : "Create Blog Article"}
                onClick={handleAddEntry}
              />
              <QuickActionButton label="Manage Categories" />
              <QuickActionButton label="Set Featured Entry" />
              <QuickActionButton label="Preview Public Layout" />
            </div>
          </AdminCard>

          <AdminCard
            title="Distribution"
            description="Each entry can feed multiple lanes: website publishing, newsletter sends through MailingListDatabase, and social media sharing."
            accent={accents.cyan}
          >
            <div
              style={{
                display: "grid",
                gap: "10px",
              }}
            >
              <QuickActionButton label="Send Newsletter Update" />
              <QuickActionButton label="Prepare Social Share Copy" />
              <QuickActionButton label="Preview Share Card" />
              <QuickActionButton label="Review Mailing List Segment" />
            </div>
          </AdminCard>

          <AdminCard
            title="Sponsors & Partners"
            description="Manage sponsor stories, partner spotlights, future campaigns, and cross-promotional update opportunities."
            accent={accents.pink}
          >
            <div
              style={{
                display: "grid",
                gap: "10px",
              }}
            >
              <QuickActionButton label="Add Sponsor Story" />
              <QuickActionButton label="Feature Partner Spotlight" />
              <QuickActionButton label="Update Sponsor Rewards" />
              <QuickActionButton label="Create Campaign Announcement" />
            </div>
          </AdminCard>

          <AdminCard
            title="Website Management"
            description="Maintain supporting site communication around the editorial layer, including sitemap visibility and content routing."
            accent={accents.gold}
          >
            <div
              style={{
                display: "grid",
                gap: "10px",
              }}
            >
              <QuickActionButton label="Update Sitemap" />
              <QuickActionButton label="Edit News / Blog Intro Copy" />
              <QuickActionButton label="Manage Navigation Tabs" />
              <QuickActionButton label="Review Shared CTA Blocks" />
            </div>
          </AdminCard>
        </div>

        <section
          style={{
            display: "grid",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          {activeEntries.map((entry) => (
            <EntryEditor
              key={entry.id}
              entry={entry}
              isDesktop={isDesktop}
              activeContentType={activeTab}
              onUpdate={handleUpdateEntry}
              onDelete={handleDeleteEntry}
              onSetFeatured={handleSetFeatured}
            />
          ))}
        </section>

        <div
          style={{
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            padding: isDesktop ? "22px 24px" : "18px 16px",
            marginBottom: "24px",
          }}
        >
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
            Current Status
          </div>

          <div
            style={{
              fontSize: isDesktop ? "16px" : "14px",
              lineHeight: 1.75,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            This admin surface is now structured around the editorial system.
            News and Blog are separated, entries can be flagged for newsletter
            delivery, and each item can be marked as social-share ready for
            future platform posting and distribution workflows.
          </div>
        </div>

        <GlobalFooterLinks
          onPrivacy={onPrivacy}
          onTerms={onTerms}
          onSitemap={onSitemap}
        />
      </div>
    </div>
  );
}