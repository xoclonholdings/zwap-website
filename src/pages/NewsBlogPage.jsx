import React, { useMemo, useState } from "react";
import GlobalFooterLinks from "../components/GlobalFooterLinks";

const BLOG_SECTIONS = [
  {
    id: "news",
    label: "News",
    title: "ZWAP! News",
    description:
      "Major announcements, ecosystem highlights, sponsor visibility, and important platform developments will live here.",
    cards: [
      {
        title: "Platform Announcements",
        category: "System",
        summary:
          "Follow major ZWAP! launches, feature unlocks, new modules, and rollout phases as the ecosystem expands.",
      },
      {
        title: "Sponsor Highlights",
        category: "Partners",
        summary:
          "Discover featured sponsors, campaigns, community activations, and reward partnerships inside the ZWAP! ecosystem.",
      },
      {
        title: "App Updates",
        category: "Updates",
        summary:
          "Track new releases, UI improvements, new rewards, onboarding changes, and feature enhancements.",
      },
      {
        title: "Community News",
        category: "Community",
        summary:
          "Stay connected with movement goals, user milestones, streak celebrations, and future community events.",
      },
    ],
  },
  {
    id: "blog",
    label: "Blog",
    title: "ZWAP! Blog",
    description:
      "Educational articles, movement content, financial literacy, Web3 guidance, and behavioral reward strategy content will live here.",
    cards: [
      {
        title: "Financial Literacy",
        category: "Education",
        summary:
          "Learn how ZWAP!, zPts, digital rewards, savings behavior, and controlled progression fit together.",
      },
      {
        title: "Wellness & Movement",
        category: "Move",
        summary:
          "Explore walking, consistency, wellness habits, routines, and movement-first lifestyle content.",
      },
      {
        title: "Crypto Basics",
        category: "Web3",
        summary:
          "Understand wallets, swaps, tokens, blockchain basics, and how ZWAP! simplifies Web3 for everyday users.",
      },
      {
        title: "Rewards & Retention",
        category: "Behavior",
        summary:
          "Read about streaks, milestones, badges, sponsor rewards, and how progression systems keep users engaged.",
      },
    ],
  },
];

export default function NewsBlogPage({
  onBack,
  onPrivacy,
  onTerms,
  onSitemap,
  onAdmin,
}) {
  const [activeTab, setActiveTab] = useState("news");

  const activeSection = useMemo(() => {
    return BLOG_SECTIONS.find((section) => section.id === activeTab);
  }, [activeTab]);

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
            News & Blog
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "720px",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            Explore ZWAP! announcements, ecosystem updates, sponsor highlights,
            movement content, Web3 education, and future platform guidance.
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
              <button
                key={section.id}
                type="button"
                onClick={() => setActiveTab(section.id)}
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
                  boxShadow: isActive
                    ? "0 0 18px rgba(180,134,255,0.25)"
                    : "none",
                }}
              >
                {section.label}
              </button>
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
          <div
            style={{
              fontSize: "clamp(24px, 7vw, 36px)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: "10px",
              color: "#F8FAFF",
              textAlign: "center",
            }}
          >
            {activeSection.title}
          </div>

          <div
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.78)",
              textAlign: "center",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            {activeSection.description}
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
            marginBottom: "26px",
          }}
        >
          {activeSection.cards.map((card) => (
            <div
              key={card.title}
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
                {card.category}
              </div>

              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  marginBottom: "10px",
                  color: "#F8FAFF",
                }}
              >
                {card.title}
              </div>

              <div
                style={{
                  fontSize: "14px",
                  lineHeight: 1.7,
                  color: "rgba(235,239,255,0.74)",
                }}
              >
                {card.summary}
              </div>
            </div>
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
          <div
            style={{
              fontSize: "22px",
              fontWeight: 900,
              color: "#F8FAFF",
              marginBottom: "10px",
            }}
          >
            Admin Access
          </div>

          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.74)",
              maxWidth: "540px",
              margin: "0 auto 18px",
            }}
          >
            Publisher access for updating news, blog posts, sponsor highlights,
            announcements, and ecosystem content.
          </div>

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
          onPrivacy={onPrivacy}
          onTerms={onTerms}
          onSitemap={onSitemap}
        />
      </div>
    </div>
  );
}