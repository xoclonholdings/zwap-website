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
        color: "rgba(245,247,255,0.66)",
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
        border: isActive
          ? "1px solid rgba(103,242,255,0.34)"
          : "1px solid rgba(255,255,255,0.10)",
        cursor: "pointer",
        padding: "12px 20px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 900,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: isActive ? "#071018" : "rgba(245,247,255,0.88)",
        background: isActive
          ? "linear-gradient(90deg, #66F2FF 0%, #B486FF 100%)"
          : "rgba(255,255,255,0.07)",
        boxShadow: isActive
          ? "0 10px 24px rgba(180,134,255,0.22)"
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
        borderRadius: "26px",
        border: "1px solid rgba(255,255,255,0.12)",
        background:
          "radial-gradient(circle at top right, rgba(102,242,255,0.12), transparent 28%), radial-gradient(circle at left center, rgba(180,134,255,0.14), transparent 30%), linear-gradient(180deg, rgba(18,21,40,0.98) 0%, rgba(10,12,26,0.99) 100%)",
        padding: "24px 18px 18px",
        boxShadow:
          "0 18px 40px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.05)",
        overflow: "hidden",
      }}
    >
      <SectionEyebrow>Stay in the Loop</SectionEyebrow>

      <h2
        style={{
          margin: "0 0 10px",
          fontSize: "clamp(28px, 7vw, 40px)",
          lineHeight: 1.04,
          fontWeight: 900,
          letterSpacing: "-0.04em",
          textAlign: "center",
          color: "#FCFDFF",
        }}
      >
        Get ZWAP! updates by email
      </h2>

      <p
        style={{
          margin: "0 auto 18px",
          maxWidth: "760px",
          textAlign: "center",
          fontSize: "15px",
          lineHeight: 1.72,
          color: "rgba(245,247,255,0.86)",
        }}
      >
        Subscribe for launch updates, new blog posts, sponsor news,
        educational content, and future ecosystem announcements from ZWAP!.
      </p>

      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          borderRadius: "22px",
          border: "1px solid rgba(255,255,255,0.10)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)",
          padding: "16px",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
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
  onNews,
  onBlog,
  onAbout,
  onFeatures,
  onPartners,
  onDevelopers,
  onEnterprise,
  onContact,
  onFAQ,
  onHowItWorks,
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
          radial-gradient(circle at 74% 18%, rgba(204,91,255,0.12), transparent 18%),
          radial-gradient(circle at 16% 24%, rgba(88,240,255,0.10), transparent 16%),
          radial-gradient(circle at 52% 62%, rgba(255,176,86,0.05), transparent 12%),
          linear-gradient(180deg, #020308 0%, #060913 54%, #03050B 100%)
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
            marginBottom: "22px",
          }}
        >
          <button
            type="button"
            onClick={onBack}
            style={{
              border: "none",
              background: "transparent",
              color: "rgba(245,247,255,0.82)",
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
              color: "rgba(245,247,255,0.62)",
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
              color: "rgba(245,247,255,0.80)",
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
            marginBottom: "26px",
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
              color: "#FCFDFF",
            }}
          >
            Blog & Updates
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "760px",
              fontSize: "16px",
              lineHeight: 1.72,
              color: "rgba(245,247,255,0.86)",
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
          onNews={onNews}
          onBlog={onBlog}
          onAbout={onAbout}
          onFeatures={onFeatures}
          onPartners={onPartners}
          onDevelopers={onDevelopers}
          onEnterprise={onEnterprise}
          onContact={onContact}
          onFAQ={onFAQ}
          onHowItWorks={onHowItWorks}
        />
      </div>
    </div>
  );
}