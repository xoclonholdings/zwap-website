import React from "react";
import GlobalFooterLinks from "../components/GlobalFooterLinks";

function GradientText({ children }) {
  return (
    <span
      style={{
        background:
          "linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

function SectionEyebrow({ children }) {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "13px",
        fontWeight: 900,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "rgba(245,247,255,0.56)",
        marginBottom: "14px",
      }}
    >
      {children}
    </div>
  );
}

function GlassCard({ children, style = {} }) {
  return (
    <div
      style={{
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "radial-gradient(circle at 80% 18%, rgba(180,134,255,0.12), transparent 28%), rgba(255,255,255,0.035)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.02) inset, 0 12px 36px rgba(0,0,0,0.18)",
        padding: "22px 20px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function InfoCard({ title, body, accent }) {
  return (
    <div
      style={{
        borderRadius: "24px",
        border: `1px solid ${accent.border}`,
        background: `
          radial-gradient(circle at 18% 18%, ${accent.glow}, transparent 22%),
          rgba(255,255,255,0.03)
        `,
        boxShadow: `0 0 24px ${accent.glow}`,
        padding: "22px 18px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "24px",
          fontWeight: 900,
          lineHeight: 1.12,
          letterSpacing: "-0.02em",
          marginBottom: "10px",
          color: "#F8FAFF",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "15px",
          lineHeight: 1.7,
          color: "rgba(235,239,255,0.78)",
        }}
      >
        {body}
      </div>
    </div>
  );
}

function BulletBlock({ title, items }) {
  return (
    <GlassCard>
      <div
        style={{
          fontSize: "24px",
          fontWeight: 900,
          lineHeight: 1.12,
          letterSpacing: "-0.02em",
          marginBottom: "14px",
          color: "#F8FAFF",
          textAlign: "center",
        }}
      >
        {title}
      </div>

      <div
        style={{
          display: "grid",
          gap: "10px",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.025)",
              padding: "12px 14px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                background:
                  "linear-gradient(180deg, rgba(103,242,255,1) 0%, rgba(180,134,255,1) 100%)",
                marginTop: "7px",
                flexShrink: 0,
                boxShadow: "0 0 12px rgba(180,134,255,0.45)",
              }}
            />

            <div
              style={{
                fontSize: "14px",
                lineHeight: 1.6,
                color: "rgba(235,239,255,0.82)",
              }}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default function DevelopersPage({
  onBack,
  onPrivacy,
  onTerms,
  onSitemap,
}) {
  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false;

  const accents = {
    cyan: {
      border: "rgba(103,242,255,0.24)",
      glow: "rgba(103,242,255,0.10)",
    },
    purple: {
      border: "rgba(180,134,255,0.24)",
      glow: "rgba(180,134,255,0.10)",
    },
    pink: {
      border: "rgba(255,103,212,0.24)",
      glow: "rgba(255,103,212,0.10)",
    },
    blue: {
      border: "rgba(121,175,255,0.24)",
      glow: "rgba(121,175,255,0.10)",
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
          maxWidth: isDesktop ? "1240px" : "430px",
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
            marginBottom: isDesktop ? "26px" : "18px",
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
            Developers
          </div>

          <div style={{ width: isDesktop ? "60px" : "48px" }} />
        </div>

        <section
          style={{
            textAlign: "center",
            marginBottom: isDesktop ? "32px" : "24px",
            maxWidth: "980px",
            marginInline: "auto",
          }}
        >
          <GlassCard
            style={{
              padding: isDesktop ? "30px 30px" : "24px 20px",
            }}
          >
            <SectionEyebrow>V2 Expansion</SectionEyebrow>

            <h1
              style={{
                margin: "0 0 14px",
                fontSize: isDesktop
                  ? "clamp(44px, 5vw, 64px)"
                  : "clamp(34px, 10vw, 46px)",
                lineHeight: 1.02,
                fontWeight: 900,
                letterSpacing: "-0.04em",
                color: "#F9FBFF",
              }}
            >
              <GradientText>Developers</GradientText> Portal
            </h1>

            <p
              style={{
                margin: "0 auto 14px",
                maxWidth: isDesktop ? "860px" : "330px",
                fontSize: isDesktop ? "21px" : "16px",
                lineHeight: 1.65,
                color: "rgba(235,239,255,0.8)",
              }}
            >
              The Developer Portal is the future entry point for studios, indie
              creators, technical partners, and builders who want to create
              reward-compatible experiences inside the ZWAP! ecosystem.
            </p>

            <div
              style={{
                fontSize: isDesktop ? "18px" : "14px",
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(235,239,255,0.72)",
              }}
            >
              Planned for V2, with a real ecosystem role behind it.
            </div>
          </GlassCard>
        </section>

        <section
          style={{
            marginBottom: isDesktop ? "30px" : "22px",
            maxWidth: "1100px",
            marginInline: "auto",
          }}
        >
          <SectionEyebrow>What the portal is for</SectionEyebrow>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "1fr 1fr 1fr 1fr" : "1fr",
              gap: "14px",
            }}
          >
            <InfoCard
              title="Game Submission"
              body="Developers will be able to submit playable experiences that align with ZWAP! progression, retention, and reward design."
              accent={accents.cyan}
            />

            <InfoCard
              title="Reward Integration"
              body="Experiences can eventually connect into zPts, milestones, streaks, and other ecosystem-based progression systems."
              accent={accents.purple}
            />

            <InfoCard
              title="Sponsor Campaigns"
              body="Studios and creators may participate in sponsor-backed activations, featured events, and ecosystem campaigns."
              accent={accents.pink}
            />

            <InfoCard
              title="Future Analytics"
              body="Portal tooling is planned to include engagement visibility, submission status, and performance insights over time."
              accent={accents.blue}
            />
          </div>
        </section>

        <section
          style={{
            marginBottom: isDesktop ? "30px" : "22px",
            maxWidth: "1100px",
            marginInline: "auto",
          }}
        >
          <SectionEyebrow>What developers can build for</SectionEyebrow>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
              gap: "14px",
            }}
          >
            <BulletBlock
              title="Primary surfaces"
              items={[
                "PLAY games designed for repeat engagement and reward-compatible sessions",
                "Learning modules and future interactive education experiences",
                "Sponsor-backed campaigns, activations, and event integrations",
                "Future Stream and media-connected experiences",
                "Expansion systems connected to the broader ZWAP! ecosystem",
              ]}
            />

            <BulletBlock
              title="Design expectations"
              items={[
                "Mobile-first experiences that fit the ZWAP! structure",
                "Progression-aware design instead of random standalone uploads",
                "Alignment with retention, streaks, milestones, and controlled rewards",
                "Moderation and review before ecosystem approval",
                "Experiences built for everyday users, not only crypto-native audiences",
              ]}
            />
          </div>
        </section>

        <section
          style={{
            marginBottom: isDesktop ? "30px" : "22px",
            maxWidth: "980px",
            marginInline: "auto",
          }}
        >
          <GlassCard
            style={{
              textAlign: "center",
              padding: isDesktop ? "30px 30px" : "22px 18px",
            }}
          >
            <SectionEyebrow>Portal roadmap</SectionEyebrow>

            <div
              style={{
                fontSize: isDesktop ? "38px" : "24px",
                lineHeight: 1.08,
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: "12px",
                color: "#F8FAFF",
              }}
            >
              A submission layer, not a random upload bin.
            </div>

            <div
              style={{
                fontSize: isDesktop ? "18px" : "15px",
                lineHeight: 1.75,
                color: "rgba(235,239,255,0.78)",
                maxWidth: "820px",
                marginInline: "auto",
              }}
            >
              The V2 Developer Portal is intended to include onboarding, game or
              experience submissions, metadata and asset intake, review and
              moderation flows, future reward configuration, sponsor campaign
              compatibility, and analytics tools for approved builders.
            </div>
          </GlassCard>
        </section>

        <section
          style={{
            marginBottom: "28px",
            maxWidth: "980px",
            marginInline: "auto",
          }}
        >
          <GlassCard
            style={{
              textAlign: "center",
              padding: isDesktop ? "30px 30px" : "22px 18px",
            }}
          >
            <SectionEyebrow>Current status</SectionEyebrow>

            <div
              style={{
                fontSize: isDesktop ? "34px" : "24px",
                lineHeight: 1.08,
                fontWeight: 900,
                letterSpacing: "-0.03em",
                marginBottom: "10px",
                color: "#F8FAFF",
              }}
            >
              Developer tools are planned for V2.
            </div>

            <p
              style={{
                margin: "0 auto",
                maxWidth: "760px",
                fontSize: isDesktop ? "18px" : "15px",
                lineHeight: 1.75,
                color: "rgba(235,239,255,0.76)",
              }}
            >
              This page exists now so reviewers, partners, and future builders
              can understand where the platform is heading. The public-facing
              submission flow, developer onboarding tools, and approval system
              will come after the core consumer rollout is live and stable.
            </p>
          </GlassCard>
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