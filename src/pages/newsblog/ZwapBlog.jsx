import React, { useMemo, useState } from "react";
import { shareArticle } from "./shareArticle";

const BLOG_CATEGORIES = [
  "All",
  "Financial Literacy",
  "Wellness & Movement",
  "Crypto Basics",
  "Rewards & Progression",
  "Platform Education",
];

const FEATURED_ARTICLE = {
  id: "featured-blog-1",
  slug: "why-delayed-rewards-build-better-habits",
  category: "Rewards & Progression",
  title: "Why Delayed Rewards Build Better Habits",
  excerpt:
    "ZWAP! uses delayed value to strengthen consistency, reduce impulsive extraction, and make progress feel earned over time.",
  readTime: "5 min read",
  date: "Featured",
  cta: "Read More",
};

const BLOG_ARTICLES = [
  {
    id: "blog-1",
    slug: "why-delayed-rewards-build-better-habits",
    category: "Rewards & Progression",
    title: "Why Delayed Rewards Build Better Habits",
    excerpt:
      "Instant gratification creates churn. Delayed value creates anticipation, commitment, and a stronger relationship to progress.",
    readTime: "5 min read",
    date: "Apr 2026",
  },
  {
    id: "blog-2",
    slug: "how-zpts-become-zwap",
    category: "Rewards & Progression",
    title: "How zPts Become ZWAP",
    excerpt:
      "A beginner-friendly explanation of how effort becomes progression and how progression eventually unlocks controlled digital value.",
    readTime: "4 min read",
    date: "Apr 2026",
  },
  {
    id: "blog-3",
    slug: "how-move-works",
    category: "Wellness & Movement",
    title: "How MOVE Works",
    excerpt:
      "Movement is the primary system input in ZWAP!. Learn how step-based activity supports progression, unlocks, and stronger retention.",
    readTime: "4 min read",
    date: "Apr 2026",
  },
  {
    id: "blog-4",
    slug: "why-financial-literacy-matters",
    category: "Financial Literacy",
    title: "Why Financial Literacy Matters",
    excerpt:
      "ZWAP! is designed to make value, utility, and progression easier to understand for users who may be new to digital finance.",
    readTime: "6 min read",
    date: "Apr 2026",
  },
  {
    id: "blog-5",
    slug: "what-makes-zwap-different",
    category: "Platform Education",
    title: "What Makes ZWAP Different",
    excerpt:
      "ZWAP! is not built around passive farming. It is a behavior-based system that rewards action, consistency, and structured engagement.",
    readTime: "5 min read",
    date: "Apr 2026",
  },
  {
    id: "blog-6",
    slug: "understanding-wallets-tokens-and-utility",
    category: "Crypto Basics",
    title: "Understanding Wallets, Tokens, and Utility",
    excerpt:
      "A simple introduction to wallets, token utility, and why ZWAP! is structured to abstract complexity instead of amplifying confusion.",
    readTime: "5 min read",
    date: "Apr 2026",
  },
  {
    id: "blog-7",
    slug: "understanding-the-shop-before-swap",
    category: "Rewards & Progression",
    title: "Understanding the Shop Before Swap",
    excerpt:
      "The Shop teaches utility first. That sequencing matters because it builds a healthier relationship with value before exchange is introduced.",
    readTime: "4 min read",
    date: "Apr 2026",
  },
  {
    id: "blog-8",
    slug: "how-the-garden-system-supports-retention",
    category: "Wellness & Movement",
    title: "How the Garden System Supports Retention",
    excerpt:
      "The Garden creates emotional attachment to consistency by turning daily progress into something visible, persistent, and easier to care about.",
    readTime: "4 min read",
    date: "Apr 2026",
  },
];

function CategoryPill({ isActive, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: isActive
          ? "1px solid rgba(103,242,255,0.26)"
          : "1px solid rgba(255,255,255,0.08)",
        cursor: "pointer",
        padding: "9px 14px",
        borderRadius: "999px",
        fontSize: "11px",
        fontWeight: 800,
        letterSpacing: "0.05em",
        color: isActive ? "#67F2FF" : "rgba(245,247,255,0.72)",
        background: isActive
          ? "rgba(103,242,255,0.09)"
          : "rgba(255,255,255,0.04)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}

function ActionButton({ children, onClick, primary = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: primary
          ? "1px solid rgba(180,134,255,0.22)"
          : "1px solid rgba(255,255,255,0.10)",
        background: primary
          ? "linear-gradient(180deg, rgba(24,26,48,1) 0%, rgba(11,13,28,1) 100%)"
          : "rgba(255,255,255,0.04)",
        color: "#F8FAFF",
        borderRadius: "999px",
        padding: primary ? "14px 20px" : "12px 16px",
        fontSize: primary ? "14px" : "13px",
        fontWeight: 800,
        cursor: "pointer",
        boxShadow: primary
          ? "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 24px rgba(0,0,0,0.28)"
          : "none",
      }}
    >
      {children}
    </button>
  );
}

function FeaturedArticleCard({ article }) {
  return (
    <article
      style={{
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "radial-gradient(circle at top right, rgba(102,242,255,0.16), transparent 28%), radial-gradient(circle at left center, rgba(180,134,255,0.14), transparent 26%), linear-gradient(180deg, rgba(18,20,36,0.96) 0%, rgba(8,10,22,0.98) 100%)",
        padding: "22px 18px",
        boxShadow:
          "0 20px 44px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "7px 12px",
          borderRadius: "999px",
          marginBottom: "14px",
          background: "rgba(103,242,255,0.10)",
          border: "1px solid rgba(103,242,255,0.18)",
          color: "#67F2FF",
          fontSize: "11px",
          fontWeight: 900,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Featured • {article.category}
      </div>

      <h2
        style={{
          fontSize: "clamp(28px, 7vw, 42px)",
          lineHeight: 1.04,
          fontWeight: 900,
          letterSpacing: "-0.04em",
          margin: "0 0 12px",
          color: "#F9FBFF",
        }}
      >
        {article.title}
      </h2>

      <p
        style={{
          margin: "0 0 16px",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "rgba(235,239,255,0.78)",
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
          color: "rgba(235,239,255,0.58)",
          fontSize: "12px",
          fontWeight: 800,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        <span>{article.readTime}</span>
        <span>•</span>
        <span>{article.date}</span>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <ActionButton primary>{article.cta || "Read More"}</ActionButton>
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
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6px 10px",
          borderRadius: "999px",
          marginBottom: "12px",
          background: "rgba(103,242,255,0.10)",
          border: "1px solid rgba(103,242,255,0.18)",
          color: "#67F2FF",
          fontSize: "11px",
          fontWeight: 900,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {article.category}
      </div>

      <h3
        style={{
          fontSize: "22px",
          fontWeight: 900,
          lineHeight: 1.1,
          margin: "0 0 10px",
          color: "#F8FAFF",
        }}
      >
        {article.title}
      </h3>

      <p
        style={{
          margin: "0 0 14px",
          fontSize: "14px",
          lineHeight: 1.7,
          color: "rgba(235,239,255,0.74)",
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
          color: "rgba(235,239,255,0.55)",
          fontSize: "11px",
          fontWeight: 800,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        <span>{article.readTime}</span>
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
        <ActionButton>Read More</ActionButton>
        <ActionButton onClick={() => shareArticle(article, "blog")}>
          Share
        </ActionButton>
      </div>
    </article>
  );
}

export default function ZwapBlog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All") return BLOG_ARTICLES;

    return BLOG_ARTICLES.filter(
      (article) =>
        article.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 900 : false;

  return (
    <div style={{ width: "100%" }}>
      <section style={{ marginBottom: "20px" }}>
        <FeaturedArticleCard article={FEATURED_ARTICLE} />
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
            color: "#F8FAFF",
            textAlign: "center",
          }}
        >
          ZWAP! Blog
        </h2>

        <p
          style={{
            margin: "0 auto",
            maxWidth: "760px",
            fontSize: "14px",
            lineHeight: 1.75,
            color: "rgba(235,239,255,0.74)",
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

      <section
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop
            ? "repeat(2, minmax(0, 1fr))"
            : "1fr",
          gap: "16px",
        }}
      >
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </section>
    </div>
  );
}