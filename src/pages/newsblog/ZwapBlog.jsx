import React, { useMemo, useState } from "react";
import usePublicPosts from "../../hooks/usePublicPosts";
import { shareArticle } from "./shareArticle";

const BLOG_CATEGORIES = [
  "All",
  "Financial Literacy",
  "Wellness & Movement",
  "Crypto Basics",
  "Rewards & Progression",
  "Platform Education",
];

function toDisplayCategory(category) {
  const value = String(category || "").toLowerCase();

  if (value === "blog") return "Platform Education";
  if (value === "public-explainer") return "Platform Education";
  if (value === "platform-update") return "Rewards & Progression";
  if (value === "launch-announcement") return "Rewards & Progression";
  if (value === "sponsor-announcement") return "Financial Literacy";
  if (value === "financial-literacy") return "Financial Literacy";
  if (value === "wellness-movement") return "Wellness & Movement";
  if (value === "crypto-basics") return "Crypto Basics";
  if (value === "rewards-progression") return "Rewards & Progression";
  if (value === "platform-education") return "Platform Education";

  return category || "Platform Education";
}

function matchesCategory(article, activeCategory) {
  if (activeCategory === "All") return true;
  return toDisplayCategory(article.category) === activeCategory;
}

function CategoryPill({ isActive, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: isActive
          ? "1px solid rgba(103,242,255,0.34)"
          : "1px solid rgba(255,255,255,0.12)",
        cursor: "pointer",
        padding: "10px 15px",
        borderRadius: "999px",
        fontSize: "11px",
        fontWeight: 800,
        letterSpacing: "0.05em",
        color: isActive ? "#081019" : "rgba(245,247,255,0.88)",
        background: isActive
          ? "linear-gradient(90deg, #66F2FF 0%, #B486FF 100%)"
          : "rgba(255,255,255,0.07)",
        whiteSpace: "nowrap",
        boxShadow: isActive ? "0 10px 24px rgba(180,134,255,0.20)" : "none",
      }}
    >
      {children}
    </button>
  );
}

function ActionButton({ children, onClick, primary = false, disabled = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        border: primary
          ? "1px solid rgba(103,242,255,0.32)"
          : "1px solid rgba(255,255,255,0.12)",
        background: primary
          ? "linear-gradient(180deg, rgba(22,27,54,0.96) 0%, rgba(10,13,30,0.98) 100%)"
          : "rgba(255,255,255,0.06)",
        color: disabled ? "rgba(248,250,255,0.42)" : "#F8FAFF",
        borderRadius: "999px",
        padding: primary ? "14px 20px" : "12px 16px",
        fontSize: primary ? "14px" : "13px",
        fontWeight: 800,
        cursor: disabled ? "not-allowed" : "pointer",
        boxShadow: primary
          ? "inset 0 1px 0 rgba(255,255,255,0.10), 0 10px 24px rgba(0,0,0,0.24)"
          : "none",
        opacity: disabled ? 0.65 : 1,
      }}
    >
      {children}
    </button>
  );
}

function FeaturedArticleCard({ article }) {
  if (!article) return null;

  return (
    <article
      style={{
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.12)",
        background:
          "radial-gradient(circle at top right, rgba(102,242,255,0.16), transparent 28%), radial-gradient(circle at left center, rgba(180,134,255,0.16), transparent 30%), linear-gradient(180deg, rgba(20,23,42,0.98) 0%, rgba(10,12,25,0.99) 100%)",
        padding: "22px 18px",
        boxShadow:
          "0 18px 40px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 13px",
          borderRadius: "999px",
          marginBottom: "14px",
          background: "rgba(103,242,255,0.10)",
          border: "1px solid rgba(103,242,255,0.22)",
          color: "#7AF4FF",
          fontSize: "11px",
          fontWeight: 900,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Featured • {toDisplayCategory(article.category)}
      </div>

      <h2
        style={{
          fontSize: "clamp(28px, 7vw, 42px)",
          lineHeight: 1.04,
          fontWeight: 900,
          letterSpacing: "-0.04em",
          margin: "0 0 12px",
          color: "#FCFDFF",
        }}
      >
        {article.title}
      </h2>

      <p
        style={{
          margin: "0 0 16px",
          fontSize: "16px",
          lineHeight: 1.7,
          color: "rgba(245,247,255,0.90)",
          maxWidth: "760px",
        }}
      >
        {article.excerpt}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px 14px",
          alignItems: "center",
          marginBottom: "18px",
          color: "rgba(235,239,255,0.72)",
          fontSize: "12px",
          fontWeight: 800,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        <span>{article.readTime || "4 min read"}</span>
        <span>•</span>
        <span>{article.date || "Published"}</span>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <ActionButton primary disabled>
          Read More
        </ActionButton>
        <ActionButton onClick={() => shareArticle(article, "blog")}>
          Share
        </ActionButton>
      </div>
    </article>
  );
}

function ArticleCard({ article }) {
  return (
    <article
      style={{
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.12)",
        background:
          "radial-gradient(circle at top right, rgba(180,134,255,0.10), transparent 32%), linear-gradient(180deg, rgba(18,21,38,0.97) 0%, rgba(10,12,24,0.99) 100%)",
        padding: "18px",
        boxShadow:
          "0 12px 26px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6px 10px",
          borderRadius: "999px",
          marginBottom: "12px",
          background: "rgba(103,242,255,0.10)",
          border: "1px solid rgba(103,242,255,0.18)",
          color: "#7AF4FF",
          fontSize: "11px",
          fontWeight: 900,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {toDisplayCategory(article.category)}
      </div>

      <h3
        style={{
          fontSize: "24px",
          fontWeight: 900,
          lineHeight: 1.12,
          margin: "0 0 10px",
          color: "#FCFDFF",
        }}
      >
        {article.title}
      </h3>

      <p
        style={{
          margin: "0 0 14px",
          fontSize: "15px",
          lineHeight: 1.72,
          color: "rgba(245,247,255,0.88)",
        }}
      >
        {article.excerpt}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 12px",
          alignItems: "center",
          marginBottom: "16px",
          color: "rgba(235,239,255,0.70)",
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        <span>{article.readTime || "4 min read"}</span>
        {article.date ? (
          <>
            <span>•</span>
            <span>{article.date}</span>
          </>
        ) : null}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <ActionButton disabled>Read More</ActionButton>
        <ActionButton onClick={() => shareArticle(article, "blog")}>
          Share
        </ActionButton>
      </div>
    </article>
  );
}

function EmptyState() {
  return (
    <section
      style={{
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.10)",
        background:
          "linear-gradient(180deg, rgba(16,18,32,0.96) 0%, rgba(9,11,22,0.98) 100%)",
        padding: "24px 18px",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          margin: "0 0 10px",
          fontSize: "22px",
          lineHeight: 1.1,
          fontWeight: 900,
          color: "#F8FAFF",
        }}
      >
        No published blog posts yet
      </h3>

      <p
        style={{
          margin: 0,
          fontSize: "14px",
          lineHeight: 1.7,
          color: "rgba(235,239,255,0.76)",
        }}
      >
        Published blog posts from the website admin will appear here.
      </p>
    </section>
  );
}

export default function ZwapBlog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { blogPosts, featuredPost, isLoading, loadError } = usePublicPosts();

  const filteredArticles = useMemo(() => {
    return blogPosts.filter((article) => matchesCategory(article, activeCategory));
  }, [blogPosts, activeCategory]);

  const visibleFeatured = useMemo(() => {
    const featuredIsBlog =
      featuredPost && String(featuredPost.category || "").toLowerCase() === "blog";

    if (featuredIsBlog && matchesCategory(featuredPost, activeCategory)) {
      return featuredPost;
    }

    return filteredArticles[0] || null;
  }, [featuredPost, filteredArticles, activeCategory]);

  const gridArticles = useMemo(() => {
    if (!visibleFeatured) return filteredArticles;

    return filteredArticles.filter((article) => article.id !== visibleFeatured.id);
  }, [filteredArticles, visibleFeatured]);

  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 900 : false;

  if (isLoading) {
    return (
      <section
        style={{
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.10)",
          background:
            "linear-gradient(180deg, rgba(16,18,32,0.96) 0%, rgba(9,11,22,0.98) 100%)",
          padding: "24px 18px",
          textAlign: "center",
          color: "rgba(245,247,255,0.84)",
          fontSize: "15px",
          fontWeight: 700,
        }}
      >
        Loading blog...
      </section>
    );
  }

  if (loadError) {
    return (
      <section
        style={{
          borderRadius: "24px",
          border: "1px solid rgba(255,120,120,0.20)",
          background:
            "linear-gradient(180deg, rgba(32,16,20,0.96) 0%, rgba(22,10,12,0.98) 100%)",
          padding: "24px 18px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            margin: "0 0 10px",
            fontSize: "22px",
            lineHeight: 1.1,
            fontWeight: 900,
            color: "#F8FAFF",
          }}
        >
          Blog could not load
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: "14px",
            lineHeight: 1.7,
            color: "rgba(245,247,255,0.78)",
          }}
        >
          {loadError}
        </p>
      </section>
    );
  }

  return (
    <div style={{ width: "100%" }}>
      {visibleFeatured ? (
        <section style={{ marginBottom: "20px" }}>
          <FeaturedArticleCard article={visibleFeatured} />
        </section>
      ) : null}

      <section
        style={{
          marginBottom: "18px",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.10)",
          background:
            "linear-gradient(180deg, rgba(16,18,32,0.96) 0%, rgba(9,11,22,0.98) 100%)",
          boxShadow:
            "0 16px 34px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.04)",
          padding: "20px 18px",
        }}
      >
        <h2
          style={{
            margin: "0 0 8px",
            fontSize: "clamp(22px, 6vw, 34px)",
            lineHeight: 1.08,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "#FCFDFF",
            textAlign: "center",
          }}
        >
          ZWAP! Blog
        </h2>

        <p
          style={{
            margin: "0 auto",
            maxWidth: "760px",
            fontSize: "15px",
            lineHeight: 1.72,
            color: "rgba(245,247,255,0.84)",
            textAlign: "center",
          }}
        >
          Explore financial literacy, movement education, crypto basics,
          progression explainers, and evergreen content that helps users
          understand ZWAP! more clearly.
        </p>
      </section>

      <section
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          paddingBottom: "6px",
          marginBottom: "22px",
        }}
      >
        {BLOG_CATEGORIES.map((category) => (
          <CategoryPill
            key={category}
            isActive={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </CategoryPill>
        ))}
      </section>

      {filteredArticles.length === 0 ? (
        <EmptyState />
      ) : (
        <section
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop
              ? "repeat(2, minmax(0, 1fr))"
              : "1fr",
            gap: "16px",
          }}
        >
          {gridArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </section>
      )}
    </div>
  );
}