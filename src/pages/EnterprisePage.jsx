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

export default function EnterprisePage({
  onBack,
  onPrivacy,
  onTerms,
  onSitemap,
  onNews,
  onBlog,
  onAbout,
  onFeatures,
  onPartners,
  onDevelopers,
  onContact,
  onFAQ,
  onHowItWorks,
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
            Enterprise
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
              <GradientText>Enterprise</GradientText> Wellness
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
              Enterprise is the V2 layer where ZWAP! expands beyond individual
              users and into workforce wellness, structured incentives, guided
              engagement, and measurable participation systems for organizations
              and communities.
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
              Coming in V2, with real structure behind it.
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
          <SectionEyebrow>What Enterprise is for</SectionEyebrow>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "1fr 1fr 1fr" : "1fr",
              gap: "14px",
            }}
          >
            <InfoCard
              title="Workplace Wellness"
              body="Support employee engagement through movement goals, participation systems, guided learning, and reward-based retention loops that feel modern instead of punitive."
              accent={accents.cyan}
            />

            <InfoCard
              title="Program Delivery"
              body="Use ZWAP! as a structure for wellness programs, education initiatives, sponsor-backed campaigns, and future financial literacy experiences."
              accent={accents.purple}
            />

            <InfoCard
              title="Measurable Participation"
              body="Track action, streaks, completion, and engagement patterns in a way that gives organizations visibility without flattening the human side of the experience."
              accent={accents.pink}
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
          <SectionEyebrow>V2 Enterprise Layers</SectionEyebrow>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
              gap: "14px",
            }}
          >
            <BulletBlock
              title="Included direction"
              items={[
                "Movement-based wellness challenges for teams and organizations",
                "Participation loops tied to daily tasks, streaks, and structured engagement",
                "Financial literacy and guided learning tracks for communities and programs",
                "Sponsor-backed rewards and milestone systems",
                "Future admin tools for updating programs, content, and enterprise campaigns",
              ]}
            />

            <BulletBlock
              title="What makes it different"
              items={[
                "ZWAP! is not built like a bland HR dashboard or a static wellness portal",
                "The system centers action, progression, and visible momentum",
                "It can support both workforce use cases and community-based initiatives",
                "The model connects movement, education, rewards, and behavior in one ecosystem",
                "It is designed to feel motivating, modern, and culturally alive",
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
            <SectionEyebrow>Planned enterprise use cases</SectionEyebrow>

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
              Built for more than one type of organization.
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
              Enterprise Wellness is intended to support employers, sponsor-led
              initiatives, educational programs, community-driven engagement
              models, and future workforce or household wellness structures. It
              gives ZWAP! a path into larger systems without losing the
              movement-first identity at the core.
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
              Enterprise is planned for V2.
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
              The public-facing page exists now so partners, reviewers, ad
              networks, and future collaborators can understand where the
              platform is headed. The live enterprise tools, program dashboards,
              and management layer will come after the core consumer-facing
              rollout is in place.
            </p>
          </GlassCard>
        </section>

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
          onEnterprise={undefined}
          onContact={onContact}
          onFAQ={onFAQ}
          onHowItWorks={onHowItWorks}
        />
      </div>
    </div>
  );
}