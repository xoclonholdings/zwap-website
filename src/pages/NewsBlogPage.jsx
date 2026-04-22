import React, { useMemo, useState } from "react";
import GlobalFooterLinks from "../components/GlobalFooterLinks";

const BLOG_SECTIONS = [
  {
    id: "news",
    label: "News",
    title: "ZWAP! News",
    description:
      "ZWAP! News covers platform announcements, ecosystem milestones, sponsor highlights, app updates, launch phases, and community developments. This section is intended to help users, partners, reviewers, and supporters follow what is happening across the ZWAP! ecosystem in one place.",
    cards: [
      {
        title: "Platform Announcements",
        category: "System",
        summary:
          "Follow major ZWAP! launches, feature unlocks, new modules, roadmap updates, and rollout phases as the ecosystem expands over time.",
      },
      {
        title: "Sponsor Highlights",
        category: "Partners",
        summary:
          "Discover featured sponsors, partner campaigns, community activations, reward collaborations, and sponsor-backed experiences inside the ZWAP! ecosystem.",
      },
      {
        title: "App Updates",
        category: "Updates",
        summary:
          "Track new releases, interface improvements, onboarding changes, reward adjustments, platform fixes, and new experience updates across the app.",
      },
      {
        title: "Community News",
        category: "Community",
        summary:
          "Stay connected with movement goals, user milestones, streak celebrations, ecosystem activity, and future community-focused events and announcements.",
      },
    ],
  },
  {
    id: "blog",
    label: "Blog",
    title: "ZWAP! Blog",
    description:
      "The ZWAP! Blog is where educational and strategic content will live, including financial literacy, movement and wellness articles, crypto basics, reward system explainers, and guidance that helps users understand the platform more clearly.",
    cards: [
      {
        title: "Financial Literacy",
        category: "Education",
        summary:
          "Learn how ZWAP!, zPts, digital rewards, savings behavior, delayed value, and structured progression fit together in a more practical way.",
      },
      {
        title: "Wellness & Movement",
        category: "Move",
        summary:
          "Explore walking, consistency, routines, movement-first wellness, habit formation, and practical lifestyle content connected to daily activity.",
      },
      {
        title: "Crypto Basics",
        category: "Web3",
        summary:
          "Understand wallets, swaps, tokens, blockchain fundamentals, and how ZWAP! is designed to make Web3 easier for everyday users to approach.",
      },
      {
        title: "Rewards & Retention",
        category: "Behavior",
        summary:
          "Read about streaks, milestones, badges, sponsor rewards, behavioral loops, and how progression systems help keep users engaged over time.",
      },
    ],
  },
];

function SectionEyebrow({ children }) {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "12px",
        fontWeight: 900,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "rgba(245,247,255,0.52)",
        marginBottom: "12px",
      }}
    >
      {children}
    </div>
  );
}

function TabButton({ isActive, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: "none",
        cursor: "pointer",
        padding: "10px 18px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 800,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: isActive ? "#04050A" : "rgba(245,247,255,0.78)",
        background: isActive
          ? "linear-gradient(90deg, #66F2FF 0%, #B486FF 100%)"
          : "rgba(255,255,255,0.06)",
        boxShadow: isActive ? "0 0 18px rgba(180,134,255,0.25)" : "none",
      }}
    >
      {children}
    </button>
  );
}

function InfoCard({ category, title, summary }) {
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
        {category}
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
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          fontSize: "14px",
          lineHeight: 1.7,
          color: "rgba(235,239,255,0.74)",
        }}
      >
        {summary}
      </p>
    </article>
  );
}

export default function NewsBlogPage({
  onBack,
  onPrivacy,
  onTerms,
  onSitemap,
  onAdmin,
}) {
  const [activeTab, setActiveTab] = useState("news");

  const activeSection = useMemo(() => {
    return BLOG_SECTIONS.find((section) => section.id === activeTab) || BLOG_SECTIONS[0];
  }, [activeTab]);

  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 900 : false;

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
          maxWidth: "1200px",
          minHeight: "100dvh",
          padding:
            "calc(env(safe-area-inset-top, 0px) + 16px) 16px calc(env(safe-area-inset-bottom, 0px) + 32px)",
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
            marginBottom: "20px",
          }}
        >
          <button
            type="button"
            onClick={onBack}
            style={{
              border: "none",
              background: "transparent",
              color: "rgba(245,247,255,0.76)",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              padding: 0,
            }}
          >
            ← Back
          </button>

          <div
            style={{
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(245,247,255,0.56)",
            }}
          >
            News Blog
          </div>

          <div style={{ width: "52px" }} />
        </div>

        <section
          style={{
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <h1
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(34px, 9vw, 60px)",
              lineHeight: 1.02,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#F9FBFF",
            }}
          >
            ZWAP! News Blog
          </h1>

          <p
            style={{
              margin: "0 auto 12px",
              maxWidth: "760px",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            The ZWAP! News Blog is the central place for platform announcements,
            app updates, sponsor news, community highlights, financial literacy,
            movement and wellness content, crypto basics, and reward system
            education.
          </p>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "760px",
              fontSize: "14px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.62)",
            }}
          >
            This page is designed to help users, partners, reviewers, and search
            engines clearly understand what ZWAP! is building, what the app
            covers, and where future guidance and updates will be published.
          </p>
        </section>

        <section
          style={{
            marginBottom: "20px",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(14,16,30,0.92) 0%, rgba(8,10,22,0.96) 100%)",
            boxShadow:
              "0 18px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)",
            padding: "20px 18px",
            textAlign: "center",
          }}
        >
          <SectionEyebrow>What you’ll find here</SectionEyebrow>

          <p
            style={{
              margin: 0,
              maxWidth: "820px",
              marginInline: "auto",
              fontSize: "15px",
              lineHeight: 1.75,
              color: "rgba(235,239,255,0.78)",
            }}
          >
            News will focus on ZWAP! announcements, ecosystem milestones, app
            releases, sponsor highlights, and community updates. Blog content
            will focus on financial literacy, wellness and movement, crypto
            basics, rewards and retention, and educational content that explains
            how the ZWAP! ecosystem works.
          </p>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "22px",
          }}
        >
          {BLOG_SECTIONS.map((section) => {
            const isActive = activeTab === section.id;

            return (
              <TabButton
                key={section.id}
                isActive={isActive}
                onClick={() => setActiveTab(section.id)}
              >
                {section.label}
              </TabButton>
            );
          })}
        </section>

        <section
          style={{
            marginBottom: "22px",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(14,16,30,0.92) 0%, rgba(8,10,22,0.96) 100%)",
            boxShadow:
              "0 18px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)",
            padding: "22px 18px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 7vw, 36px)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: "0 0 10px",
              color: "#F8FAFF",
              textAlign: "center",
            }}
          >
            {activeSection.title}
          </h2>

          <p
            style={{
              margin: "0 auto",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.78)",
              textAlign: "center",
              maxWidth: "760px",
            }}
          >
            {activeSection.description}
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop
              ? "repeat(2, minmax(0, 1fr))"
              : "1fr",
            gap: "16px",
            marginBottom: "26px",
          }}
        >
          {activeSection.cards.map((card) => (
            <InfoCard
              key={card.title}
              category={card.category}
              title={card.title}
              summary={card.summary}
            />
          ))}
        </section>

        <section
          style={{
            marginBottom: "24px",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(16,18,34,0.94) 0%, rgba(8,10,22,0.98) 100%)",
            padding: "22px 18px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              fontWeight: 900,
              color: "#F8FAFF",
              margin: "0 0 10px",
            }}
          >
            Admin Access
          </h2>

          <p
            style={{
              margin: "0 auto 18px",
              fontSize: "14px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.74)",
              maxWidth: "540px",
            }}
          >
            Publisher access for updating ZWAP! news, blog posts, sponsor
            highlights, app updates, announcements, and future ecosystem
            content.
          </p>

          <button
            type="button"
            onClick={onAdmin}
            style={{
              border: "1px solid rgba(180,134,255,0.22)",
              background:
                "linear-gradient(180deg, rgba(24,26,48,1) 0%, rgba(11,13,28,1) 100%)",
              color: "#F8FAFF",
              borderRadius: "999px",
              padding: "14px 22px",
              fontSize: "14px",
              fontWeight: 800,
              cursor: "pointer",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 24px rgba(0,0,0,0.28)",
            }}
          >
            Admin Login
          </button>
        </section>

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