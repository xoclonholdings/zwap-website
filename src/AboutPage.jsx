import React from "react";
import bang from "./assets/Zwap_bang_3d.png";

function ModeCard({ title, desc, accent }) {
  return (
    <div
      style={{
        borderRadius: "24px",
        border: `1px solid ${accent.border}`,
        background: "rgba(255,255,255,0.035)",
        boxShadow: `0 0 26px ${accent.glow}`,
        padding: "20px",
      }}
    >
      <div
        style={{
          fontSize: "22px",
          fontWeight: 900,
          letterSpacing: "0.02em",
          marginBottom: "10px",
          color: accent.text,
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "15px",
          lineHeight: 1.6,
          color: "rgba(235,239,255,0.76)",
        }}
      >
        {desc}
      </div>
    </div>
  );
}

function InfoCard({ title, desc }) {
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
          fontSize: "16px",
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

export default function AboutPage({ onBack, onLockIn }) {
  const accents = {
    cyan: {
      text: "#67F2FF",
      border: "rgba(103,242,255,0.22)",
      glow: "rgba(103,242,255,0.08)",
    },
    purple: {
      text: "#B486FF",
      border: "rgba(180,134,255,0.22)",
      glow: "rgba(180,134,255,0.08)",
    },
    blue: {
      text: "#79AFFF",
      border: "rgba(121,175,255,0.22)",
      glow: "rgba(121,175,255,0.08)",
    },
    pink: {
      text: "#FF67D4",
      border: "rgba(255,103,212,0.22)",
      glow: "rgba(255,103,212,0.08)",
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
            About
          </div>

          <div style={{ width: "48px" }} />
        </div>

        <section
          style={{
            textAlign: "center",
            marginBottom: "26px",
          }}
        >
          <img
            src={bang}
            alt="ZWAP!"
            style={{
              width: "112px",
              height: "auto",
              display: "block",
              margin: "0 auto 16px",
              filter: "drop-shadow(0 0 22px rgba(103,242,255,0.24))",
            }}
          />

          <h1
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(34px, 10vw, 48px)",
              lineHeight: 1.02,
              fontWeight: 900,
              letterSpacing: "-0.04em",
            }}
          >
            What is{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ZWAP!
            </span>
            ?
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "330px",
              fontSize: "16px",
              lineHeight: 1.65,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            ZWAP! turns movement, play, and everyday participation into rewards
            inside a culture-first ecosystem built for real people, not just
            crypto natives.
          </p>
        </section>

        <section
          style={{
            marginBottom: "18px",
            borderRadius: "26px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            padding: "22px 20px",
          }}
        >
          <div
            style={{
              fontSize: "26px",
              lineHeight: 1.08,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              marginBottom: "12px",
            }}
          >
            Most apps{" "}
            <span style={{ color: "rgba(245,247,255,0.58)" }}>take.</span>
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ZWAP!
            </span>{" "}
            gives back.
          </div>

          <div
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.72)",
            }}
          >
            Most platforms are built to keep you scrolling, tapping, and
            spending without returning anything meaningful. ZWAP! flips that by
            rewarding actions that already fit into daily life.
          </div>
        </section>

        <section style={{ marginBottom: "24px" }}>
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
            One ecosystem. Four modes.
          </div>

          <div
            style={{
              display: "grid",
              gap: "14px",
            }}
          >
            <ModeCard
              title="MOVE"
              desc="Walk and earn ZWAP! through the step-based side of the ecosystem. The more you move, the more momentum you build."
              accent={accents.cyan}
            />
            <ModeCard
              title="PLAY"
              desc="Play games like zCube and zTrivia to earn rewards, stack ZWAP!, and build up zPts through active participation."
              accent={accents.purple}
            />
            <ModeCard
              title="SWAP"
              desc="Exchange value across the ecosystem through a clean and simple experience designed for motion, utility, and flow."
              accent={accents.blue}
            />
            <ModeCard
              title="SHOP"
              desc="Use what you earn on curated products, digital drops, and ecosystem-based offers inside the ZWAP! experience."
              accent={accents.pink}
            />
          </div>
        </section>

        <section
          style={{
            marginBottom: "24px",
          }}
        >
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
            Dual currency system
          </div>

          <div style={{ display: "grid", gap: "14px" }}>
            <InfoCard
              title="ZWAP!"
              desc="The main reward token inside the ecosystem. Earn it through movement, games, and participation, then use it across the ZWAP! experience."
            />
            <InfoCard
              title="zPts"
              desc="Loyalty-style points earned through gameplay and engagement. They deepen the loop, support retention, and reward active users."
            />
          </div>
        </section>

        <section
          style={{
            marginBottom: "24px",
          }}
        >
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
            How it works
          </div>

          <div style={{ display: "grid", gap: "12px" }}>
            <InfoCard
              title="1. Learn the flow"
              desc="ZWAP! is designed to be understandable. You do not need to be a crypto expert to grasp what the ecosystem does."
            />
            <InfoCard
              title="2. Move, play, and participate"
              desc="Earn through actions that already fit into your life instead of forcing yourself into a system built around speculation."
            />
            <InfoCard
              title="3. Build value you can see"
              desc="As you engage, your rewards begin stacking into something visible, usable, and tied to your activity."
            />
            <InfoCard
              title="4. Use what you earn"
              desc="ZWAP! is not built around empty points. It is built around creating value loops inside an ecosystem you can actually move through."
            />
          </div>
        </section>

        <section
          style={{
            marginBottom: "28px",
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
            Built for the future.
          </div>

          <p
            style={{
              margin: "0 auto 18px",
              maxWidth: "320px",
              fontSize: "15px",
              lineHeight: 1.65,
              color: "rgba(235,239,255,0.72)",
            }}
          >
            ZWAP! is built around user-owned value, ecosystem participation, and
            a reward loop that feels natural instead of forced.
          </p>

          <button
            onClick={onLockIn}
            style={{
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
              maxWidth: "270px",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 26px rgba(73, 44, 162, 0.28)",
            }}
          >
            Lock In. Early.
          </button>
        </section>
      </div>
    </div>
  );
}