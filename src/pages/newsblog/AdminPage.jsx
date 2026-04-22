import React, { useEffect, useState } from "react";
import GlobalFooterLinks from "../components/GlobalFooterLinks";

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

function QuickActionButton({ label }) {
  return (
    <button
      type="button"
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

export default function AdminPage({
  onBack,
  onPrivacy,
  onTerms,
  onSitemap,
}) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 900 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            ZWAP! Admin
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
            This admin area is where future content, announcements, blog posts,
            sponsor updates, featured apps, rewards messaging, and ecosystem
            pages will be managed.
          </p>
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
            title="News & Blog"
            description="Create announcements, publish blog posts, manage app updates, sponsor stories, and educational content."
            accent={accents.purple}
          >
            <div
              style={{
                display: "grid",
                gap: "10px",
              }}
            >
              <QuickActionButton label="Create News Post" />
              <QuickActionButton label="Create Blog Article" />
              <QuickActionButton label="Publish App Update" />
              <QuickActionButton label="Manage Categories" />
            </div>
          </AdminCard>

          <AdminCard
            title="Sponsors & Partners"
            description="Manage sponsor campaigns, featured partner placements, sponsor rewards, and ecosystem collaborations."
            accent={accents.cyan}
          >
            <div
              style={{
                display: "grid",
                gap: "10px",
              }}
            >
              <QuickActionButton label="Add Sponsor Campaign" />
              <QuickActionButton label="Manage Partner Profiles" />
              <QuickActionButton label="Update Sponsor Rewards" />
              <QuickActionButton label="Feature Partner Spotlight" />
            </div>
          </AdminCard>

          <AdminCard
            title="Enterprise & Developer Programs"
            description="Update enterprise wellness offerings, developer portal information, SDK notes, and integration opportunities."
            accent={accents.pink}
          >
            <div
              style={{
                display: "grid",
                gap: "10px",
              }}
            >
              <QuickActionButton label="Edit Enterprise Sections" />
              <QuickActionButton label="Update Developer Portal" />
              <QuickActionButton label="Add API Information" />
              <QuickActionButton label="Manage V2 Expansion Content" />
            </div>
          </AdminCard>

          <AdminCard
            title="Website Management"
            description="Maintain sitemap entries, featured pages, hero content, early access messaging, and navigation sections."
            accent={accents.gold}
          >
            <div
              style={{
                display: "grid",
                gap: "10px",
              }}
            >
              <QuickActionButton label="Edit Homepage Hero" />
              <QuickActionButton label="Update Sitemap" />
              <QuickActionButton label="Manage Navigation Tabs" />
              <QuickActionButton label="Edit Early Access Messaging" />
            </div>
          </AdminCard>
        </div>

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
            This admin area is currently a visual scaffold for future CMS
            controls. Later, it can be connected to protected admin auth,
            database storage, blog publishing, sponsor management, and content
            editing tools.
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