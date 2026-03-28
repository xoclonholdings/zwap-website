import React from "react";

function PartnerCard({ title, desc }) {
  return (
    <div
      style={{
        borderRadius: "22px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
        padding: "18px",
      }}
    >
      <div
        style={{
          fontSize: "18px",
          fontWeight: 800,
          marginBottom: "8px",
          color: "#F8FAFF",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "14px",
          lineHeight: 1.6,
          color: "rgba(235,239,255,0.72)",
        }}
      >
        {desc}
      </div>
    </div>
  );
}

export default function PartnersPage({ onBack }) {
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
          maxWidth: "430px",
          minHeight: "100dvh",
          padding:
            "calc(env(safe-area-inset-top, 0px) + 14px) 16px calc(env(safe-area-inset-bottom, 0px) + 28px)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "18px",
          }}
        >
          <button
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
            Partners
          </div>

          <div style={{ width: "48px" }} />
        </div>

        <section
          style={{
            textAlign: "center",
            marginBottom: "24px",
            borderRadius: "26px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
          }}
        >
          <div
            style={{
              fontSize: "clamp(30px, 9vw, 42px)",
              lineHeight: 1.02,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              marginBottom: "12px",
            }}
          >
            Partners &{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sponsors
            </span>
          </div>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "320px",
              fontSize: "15px",
              lineHeight: 1.65,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            ZWAP! gives brands, communities, and collaborators a way to connect
            with a mobile-first reward ecosystem built around movement, play,
            culture, and participation.
          </p>
        </section>

        <section style={{ marginBottom: "22px" }}>
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
            Why partner
          </div>

          <div style={{ display: "grid", gap: "14px" }}>
            <PartnerCard
              title="Reach active users"
              desc="ZWAP! is built around users who move, play, engage, and return. This is not passive traffic. It is participation-based attention."
            />
            <PartnerCard
              title="Show up inside the loop"
              desc="Partners can be placed inside challenges, campaigns, rewards, featured experiences, and ecosystem touchpoints that feel natural instead of forced."
            />
            <PartnerCard
              title="Culture-first positioning"
              desc="ZWAP! sits at the crossover of rewards, mobile engagement, lifestyle, gaming, and Web3. That creates a unique lane for aligned collaborators."
            />
          </div>
        </section>

        <section style={{ marginBottom: "22px" }}>
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
            Partnership lanes
          </div>

          <div style={{ display: "grid", gap: "14px" }}>
            <PartnerCard
              title="Sponsored campaigns"
              desc="Fund branded reward campaigns, activity challenges, or ecosystem pushes that put your name inside a high-attention loop."
            />
            <PartnerCard
              title="In-app placements"
              desc="Show up inside the app in ways that match the user journey instead of interrupting it."
            />
            <PartnerCard
              title="Merch, drops, and collaborations"
              desc="Partner on products, curated drops, special offers, and reward redemptions connected to your brand."
            />
            <PartnerCard
              title="Community and event support"
              desc="Support activations, launch moments, and ecosystem-facing opportunities designed to grow attention and participation."
            />
          </div>
        </section>

        <section style={{ marginBottom: "22px" }}>
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
            Best fit
          </div>

          <div style={{ display: "grid", gap: "12px" }}>
            <PartnerCard
              title="Brands"
              desc="Consumer brands, wellness, lifestyle, fitness, media, and culture-driven products."
            />
            <PartnerCard
              title="Communities"
              desc="Groups looking to activate members through rewards, participation, and shared momentum."
            />
            <PartnerCard
              title="Creators"
              desc="Creators who want to connect audience engagement to utility, motion, and ecosystem participation."
            />
            <PartnerCard
              title="Web3 and gaming"
              desc="Projects looking for aligned user growth, branded campaigns, or ecosystem crossover."
            />
          </div>
        </section>

        <section
          style={{
            borderRadius: "26px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            padding: "22px 20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "24px",
              lineHeight: 1.08,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              marginBottom: "10px",
            }}
          >
            Interested in partnering?
          </div>

          <p
            style={{
              margin: "0 auto 18px",
              maxWidth: "310px",
              fontSize: "15px",
              lineHeight: 1.65,
              color: "rgba(235,239,255,0.72)",
            }}
          >
            Use the sponsor interest form to tell us who you are, what you
            represent, and how you’d like to work with ZWAP!
          </p>

          <a
            href="https://web3mi.notion.site"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px 28px",
              borderRadius: "999px",
              border: "2px solid rgba(165, 103, 255, 0.78)",
              background:
                "linear-gradient(180deg, rgba(14,16,30,0.94) 0%, rgba(8,10,22,0.98) 100%)",
              color: "#F9FAFF",
              fontSize: "17px",
              fontWeight: 800,
              letterSpacing: "0.02em",
              cursor: "pointer",
              width: "100%",
              maxWidth: "290px",
              textDecoration: "none",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 26px rgba(73, 44, 162, 0.28)",
            }}
          >
            Open Sponsor Form
          </a>
        </section>
      </div>
    </div>
  );
}