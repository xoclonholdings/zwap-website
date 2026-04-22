import React from "react";
import GlobalFooterLinks from "../../components/GlobalFooterLinks";

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

function FlowCard({ number, title, description }) {
  return (
    <article
      style={{
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "radial-gradient(circle at top right, rgba(180,134,255,0.12), transparent 30%), rgba(255,255,255,0.03)",
        padding: "20px 18px",
        boxShadow:
          "0 14px 28px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          marginBottom: "14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(103,242,255,0.10)",
          border: "1px solid rgba(103,242,255,0.18)",
          color: "#67F2FF",
          fontSize: "15px",
          fontWeight: 900,
        }}
      >
        {number}
      </div>

      <h3
        style={{
          margin: "0 0 10px",
          fontSize: "22px",
          lineHeight: 1.1,
          fontWeight: 900,
          color: "#F8FAFF",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          fontSize: "14px",
          lineHeight: 1.75,
          color: "rgba(235,239,255,0.74)",
        }}
      >
        {description}
      </p>
    </article>
  );
}

function ModuleCard({ title, description }) {
  return (
    <article
      style={{
        borderRadius: "22px",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(16,18,34,0.94) 0%, rgba(8,10,22,0.98) 100%)",
        padding: "18px",
        boxShadow:
          "0 14px 28px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      <h3
        style={{
          margin: "0 0 10px",
          fontSize: "20px",
          lineHeight: 1.1,
          fontWeight: 900,
          color: "#F8FAFF",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          fontSize: "14px",
          lineHeight: 1.75,
          color: "rgba(235,239,255,0.74)",
        }}
      >
        {description}
      </p>
    </article>
  );
}

export default function HowItWorksPage({
  onBack,
  onPrivacy,
  onTerms,
  onSitemap,
  onContact,
  onNews,
  onBlog,
  onAbout,
  onFeatures,
  onPartners,
  onDevelopers,
  onEnterprise,
}) {
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
            How It Works
          </div>

          <div style={{ width: "52px" }} />
        </div>

        <section
          style={{
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          <SectionEyebrow>How ZWAP! Works</SectionEyebrow>

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
            Move. Progress. Unlock.
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "780px",
              fontSize: "15px",
              lineHeight: 1.75,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            ZWAP! is built around action, consistency, and delayed value.
            Instead of rewarding passive presence, the platform rewards movement,
            gameplay, learning, and daily engagement over time.
          </p>
        </section>

        <section
          style={{
            marginBottom: "24px",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(14,16,30,0.92) 0%, rgba(8,10,22,0.96) 100%)",
            boxShadow:
              "0 18px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)",
            padding: "24px 20px",
            textAlign: "center",
          }}
        >
          <SectionEyebrow>Core System Flow</SectionEyebrow>

          <div
            style={{
              fontSize: isDesktop ? "22px" : "18px",
              fontWeight: 900,
              lineHeight: 1.8,
              color: "#F8FAFF",
            }}
          >
            Move / Play / Learn
            <br />
            ↓
            <br />
            Earn zPts
            <br />
            ↓
            <br />
            Unlock ZWAP
            <br />
            ↓
            <br />
            Use Shop, Rewards, and Future Swap
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop
              ? "repeat(2, minmax(0, 1fr))"
              : "1fr",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <FlowCard
            number="1"
            title="Complete Real Actions"
            description="Users progress through movement, gameplay, learning, streaks, and daily engagement instead of simply opening the app and waiting."
          />

          <FlowCard
            number="2"
            title="Earn zPts"
            description="Activity generates zPts, which represent effort, engagement, and progression throughout the ZWAP! ecosystem."
          />

          <FlowCard
            number="3"
            title="Unlock ZWAP"
            description="zPts help support eligibility for controlled ZWAP unlocks through thresholds, streaks, milestones, and progression logic."
          />

          <FlowCard
            number="4"
            title="Use Utility First"
            description="ZWAP! teaches users utility before exchange through Shop items, sponsor rewards, streaks, unlocks, and future Swap access."
          />
        </section>

        <section
          style={{
            marginBottom: "24px",
          }}
        >
          <SectionEyebrow>Core Modules</SectionEyebrow>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop
                ? "repeat(2, minmax(0, 1fr))"
                : "1fr",
              gap: "16px",
            }}
          >
            <ModuleCard
              title="MOVE"
              description="Movement is the primary input in ZWAP!. Walking and physical activity help users build progression through real-world action."
            />

            <ModuleCard
              title="PLAY"
              description="Gameplay introduces fun, challenge, retention, and additional reward opportunities inside the ecosystem."
            />

            <ModuleCard
              title="LEARN"
              description="Educational content, quizzes, and lessons allow users to grow their knowledge while continuing to progress."
            />

            <ModuleCard
              title="SHOP"
              description="The Shop is designed to introduce utility before exchange. Users learn how to use rewards before Swap becomes a larger part of the ecosystem."
            />

            <ModuleCard
              title="SPONSORS"
              description="Sponsors can support campaigns, rewards, unlocks, and experiences without disrupting the balance of the core platform."
            />

            <ModuleCard
              title="ENTERPRISE"
              description="ZWAP! is being designed to support workplace wellness, team engagement, rewards systems, and enterprise partnerships."
            />
          </div>
        </section>

        <section
          style={{
            marginBottom: "24px",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "radial-gradient(circle at top right, rgba(102,242,255,0.12), transparent 30%), linear-gradient(180deg, rgba(16,18,34,0.94) 0%, rgba(8,10,22,0.98) 100%)",
            padding: "22px 18px",
            textAlign: "center",
          }}
        >
          <SectionEyebrow>Why Delayed Rewards Matter</SectionEyebrow>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "760px",
              fontSize: "14px",
              lineHeight: 1.85,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            ZWAP! intentionally delays value to make progression feel earned.
            That helps reduce impulsive extraction, supports healthier habits,
            improves retention, and creates a stronger relationship between
            action and reward over time.
          </p>
        </section>

        <section
          style={{
            marginBottom: "24px",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(16,18,34,0.94) 0%, rgba(8,10,22,0.98) 100%)",
            padding: "24px 18px",
            textAlign: "center",
          }}
        >
          <SectionEyebrow>Need More Detail?</SectionEyebrow>

          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(24px, 6vw, 34px)",
              lineHeight: 1.08,
              fontWeight: 900,
              color: "#F8FAFF",
            }}
          >
            Explore the rest of the ecosystem
          </h2>

          <p
            style={{
              margin: "0 auto 18px",
              maxWidth: "720px",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "rgba(235,239,255,0.74)",
            }}
          >
            Visit the FAQ, Contact page, Blog, and News sections to learn more
            about rewards, movement, sponsors, developers, enterprise wellness,
            and future platform expansion.
          </p>

          {onContact ? (
            <button
              type="button"
              onClick={onContact}
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
              Contact ZWAP!
            </button>
          ) : null}
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
          onEnterprise={onEnterprise}
        />
      </div>
    </div>
  );
}