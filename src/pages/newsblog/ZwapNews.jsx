import React, { useMemo, useState } from "react";

const NEWS_CATEGORIES = [
  "All",
  "Platform Updates",
  "Partner News",
  "Launch Updates",
  "Community",
  "Sponsor News",
];

const FEATURED_ARTICLE = {
  id: "featured-news-1",
  category: "Platform Updates",
  title: "What is ZWAP!?",
  excerpt:
    "ZWAP! is a movement-first reward ecosystem built around progression, consistency, and delayed value.",
  readTime: "4 min read",
  date: "Featured",
  cta: "Read More",
};

const NEWS_ARTICLES = [
  {
    id: "news-1",
    category: "Platform Updates",
    title: "What is ZWAP!?",
    excerpt:
      "Get a clear introduction to the ZWAP! ecosystem, including movement-based progression, delayed rewards, and the role of structured value.",
    readTime: "4 min read",
    date: "Apr 2026",
  },
  {
    id: "news-2",
    category: "Launch Updates",
    title: "How zPts Become ZWAP",
    excerpt:
      "A breakdown of how effort becomes progression and how progression eventually unlocks ZWAP through controlled system logic.",
    readTime: "5 min read",
    date: "Apr 2026",
  },
  {
    id: "news-3",
    category: "Platform Updates",
    title: "What Makes ZWAP Different",
    excerpt:
      "ZWAP! is designed around action, rhythm, and controlled value release instead of passive farming or instant extraction loops.",
    readTime: "5 min read",
    date: "Apr 2026",
  },
  {
    id: "news-4",
    category: "Community",
    title: "Why Delayed Rewards Build Better Habits",
    excerpt:
      "Delayed value gives progression emotional weight, reduces impulsive extraction, and creates stronger behavioral retention over time.",
    readTime: "4 min read",
    date: "Apr 2026",
  },
  {
    id: "news-5",
    category: "Launch Updates",
    title: "Understanding the Shop Before Swap",
    excerpt:
      "The Shop is designed to come first so users build a relationship with utility before exchange is introduced later in the lifecycle.",
    readTime: "4 min read",
    date: "Apr 2026",
  },
  {
    id: "news-6",
    category: "Platform Updates",
    title: "How the Garden System Works",
    excerpt:
      "The Garden adds emotional retention, visual progression, and consistency-based attachment to the ZWAP! experience.",
    readTime: "4 min read",
    date: "Apr 2026",
  },
  {
    id: "news-7",
    category: "Sponsor News",
    title: "Future Sponsor Rewards in ZWAP!",
    excerpt:
      "Sponsor-backed rewards, product drops, and premium unlocks are designed to strengthen utility without disrupting the core economy.",
    readTime: "5 min read",
    date: "Apr 2026",
  },
  {
    id: "news-8",
    category: "Partner News",
    title: "Why News and Education Both Matter",
    excerpt:
      "ZWAP! uses both timely updates and evergreen educational content to help users, partners, and reviewers understand the system more clearly.",
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

      <button
        type="button"
        style={{
          border: "1px solid rgba(180,134,255,0.22)",
          background:
            "linear-gradient(180deg, rgba(24,26,48,1) 0%, rgba(11,13,28,1) 100%)",
          color: "#F8FAFF",
          borderRadius: "999px",
          padding: "14px 20px",
          fontSize: "14px",
          fontWeight: 800,
          cursor: "pointer",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 24px rgba(0,0,0,0.28)",
        }}
      >
        {article.cta || "Read More"}
      </button>
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

      <button
        type="button"
        style={{
          border: "1px solid rgba(255,255,255,0.10)",
          background: "rgba(255,255,255,0.04)",
          color: "#F8FAFF",
          borderRadius: "999px",
          padding: "12px 16px",
          fontSize: "13px",
          fontWeight: 800,
          cursor: "pointer",
        }}
      >
        Read More
      </button>
    </article>
  );
}

export default function ZwapNews() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All") return NEWS_ARTICLES;

    return NEWS_ARTICLES.filter(
      (article) => article.category.toLowerCase() === activeCategory.toLowerCase()
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
          ZWAP! News
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
          Follow platform updates, launch communication, ecosystem milestones,
          community developments, sponsor news, and rollout visibility across ZWAP!.
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
        {NEWS_CATEGORIES.map((category) => (
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