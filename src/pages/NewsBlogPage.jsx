import React, { useState } from "react";
import GlobalFooterLinks from "../components/GlobalFooterLinks";
import MailingListDatabase from "../components/MailingListDatabase";
import ZwapNews from "./newsblog/ZwapNews";
import ZwapBlog from "./newsblog/ZwapBlog";

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
        transition: "all 0.18s ease",
      }}
    >
      {children}
    </button>
  );
}

function NewsletterCard() {
  return (
    <section
      style={{
        marginBottom: "24px",
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "radial-gradient(circle at top right, rgba(102,242,255,0.12), transparent 30%), radial-gradient(circle at left center, rgba(180,134,255,0.12), transparent 28%), linear-gradient(180deg, rgba(16,18,34,0.94) 0%, rgba(8,10,22,0.98) 100%)",
        padding: "22px 18px",
        boxShadow:
          "0 18px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)",
        overflow: "hidden",
      }}
    >
      <SectionEyebrow>Stay in the Loop</SectionEyebrow>

      <h2
        style={{
          margin: "0 0 10px",
          fontSize: "clamp(24px, 6vw, 36px)",
          lineHeight: 1.08,
          fontWeight: 900,
          letterSpacing: "-0.03em",
          textAlign: "center",
          color: "#F8FAFF",
        }}
      >
        Get ZWAP! updates by email
      </h2>

      <p
        style={{
          margin: "0 auto 18px",
          maxWidth: "720px",
          textAlign: "center",
          fontSize: "14px",
          lineHeight: 1.75,
          color: "rgba(235,239,255,0.74)",
        }}
      >
        Subscribe for launch updates, new blog posts, sponsor news, educational
        content, and future ecosystem announcements from ZWAP!.
      </p>

      <div
        style={{
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.03)",
          padding: "14px",
        }}
      >
        <MailingListDatabase />
      </div>
    </section>
  );
}

export default function NewsBlogPage({
  initialTab = "news",
  onBack,
  onPrivacy,
  onTerms,
  onSitemap,
  onAdmin,
}) {
  const [activeTab, setActiveTab] = useState(
    initialTab === "blog" ? "blog" : "news"
  );

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
          radial-gradient(circle at 72% 22%, rgba(204,91,255,0.10), transparent 16%),
          radial-gradient(circle at 18% 28%, rgba(88,240,255,0.08), transparent 14%),
          radial-gradient(circle at 55% 62%, rgba(255,176,86,0.05), transparent 12%),
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
            Blog & Updates
          </div>

          <button
            type="button"
            onClick={onAdmin}
            style={{
              border: "none",
              background: "transparent",
              color: "rgba(245,247,255,0.72)",
              fontSize: "14px",
              fontWeight: 800,
              cursor: "pointer",
              padding: 0,
            }}
          >
            Admin
          </button>
        </div>

        <section
          style={{
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <SectionEyebrow>ZWAP! Editorial Hub</SectionEyebrow>

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
            Blog & Updates
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "760px",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            Movement. Rewards. Financial literacy. Product updates. Everything
            happening inside ZWAP!.
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
          <HeaderTabButton
            isActive={activeTab === "news"}
            onClick={() => setActiveTab("news")}
          >
            News
          </HeaderTabButton>

          <HeaderTabButton
            isActive={activeTab === "blog"}
            onClick={() => setActiveTab("blog")}
          >
            Blog
          </HeaderTabButton>
        </section>

        <section style={{ marginBottom: "24px" }}>
          {activeTab === "news" ? <ZwapNews /> : <ZwapBlog />}
        </section>

        <NewsletterCard />

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