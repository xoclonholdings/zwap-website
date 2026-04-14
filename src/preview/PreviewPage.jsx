import React, { useState } from "react";

const previewModes = [
  {
    id: "move",
    label: "MOVE",
    headline: "Move. Earn. Feel the loop.",
    description:
      "Start with motion. Watch progress build in real time and see how everyday activity turns into measurable value.",
    accent: "#67F2FF",
    glow: "rgba(103,242,255,0.22)",
    bar: "72%",
    reward: "+42 zPts",
    statA: "3,240 steps",
    statB: "Daily streak active",
  },
  {
    id: "play",
    label: "PLAY",
    headline: "Play. Progress. Stack momentum.",
    description:
      "Jump into the reward loop through gameplay. Participation, completion, and performance all push your progression forward.",
    accent: "#B486FF",
    glow: "rgba(180,134,255,0.22)",
    bar: "58%",
    reward: "+35 zPts",
    statA: "1 session complete",
    statB: "Combo streak building",
  },
];

export default function PreviewPage({ onBack, onLockIn }) {
  const [activeMode, setActiveMode] = useState("move");
  const [progressAnimated, setProgressAnimated] = useState(true);

  const activePreview =
    previewModes.find((mode) => mode.id === activeMode) || previewModes[0];

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
          display: "flex",
          flexDirection: "column",
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
            Preview
          </div>

          <div style={{ width: "48px" }} />
        </div>

        <section
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <h1
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(34px, 10vw, 46px)",
              lineHeight: 1.02,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#F9FBFF",
            }}
          >
            Feel{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ZWAP!
            </span>{" "}
            before it drops.
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "320px",
              fontSize: "15px",
              lineHeight: 1.65,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            A lightweight first look at the V1 loop. Choose a lane and preview
            how progression begins.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
            marginBottom: "16px",
          }}
        >
          {previewModes.map((mode) => {
            const isActive = mode.id === activeMode;

            return (
              <button
                key={mode.id}
                onClick={() => {
                  setActiveMode(mode.id);
                  setProgressAnimated(false);
                  requestAnimationFrame(() => setProgressAnimated(true));
                }}
                style={{
                  borderRadius: "999px",
                  border: isActive
                    ? `1px solid ${mode.accent}`
                    : "1px solid rgba(255,255,255,0.12)",
                  background: isActive
                    ? "linear-gradient(180deg, rgba(22,24,44,0.94) 0%, rgba(12,14,28,0.98) 100%)"
                    : "rgba(255,255,255,0.03)",
                  color: isActive ? "#FFFFFF" : "rgba(245,247,255,0.78)",
                  padding: "13px 14px",
                  fontSize: "13px",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  boxShadow: isActive ? `0 0 20px ${mode.glow}` : "none",
                }}
              >
                {mode.label}
              </button>
            );
          })}
        </section>

        <section
          style={{
            flex: 1,
            borderRadius: "28px",
            border: `1px solid ${activePreview.glow.replace("0.22", "0.34")}`,
            background: `
              radial-gradient(circle at 18% 22%, ${activePreview.glow}, transparent 24%),
              radial-gradient(circle at 82% 18%, rgba(255,255,255,0.05), transparent 20%),
              linear-gradient(180deg, rgba(8,10,22,0.88) 0%, rgba(6,8,18,0.98) 100%)
            `,
            boxShadow: `0 0 30px ${activePreview.glow}`,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "440px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              padding: "20px 18px 8px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 900,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: activePreview.accent,
                marginBottom: "12px",
              }}
            >
              V1 Preview
            </div>

            <div
              style={{
                fontSize: "clamp(28px, 8vw, 40px)",
                lineHeight: 0.96,
                fontWeight: 900,
                letterSpacing: "-0.05em",
                color: "rgba(255,255,255,0.14)",
                textTransform: "uppercase",
                maxWidth: "85%",
                marginBottom: "18px",
              }}
            >
              {activePreview.label}
            </div>

            <div
              style={{
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                padding: "16px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 800,
                    color: "rgba(245,247,255,0.76)",
                  }}
                >
                  Daily Progress
                </div>

                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 900,
                    color: activePreview.accent,
                  }}
                >
                  {activePreview.reward}
                </div>
              </div>

              <div
                style={{
                  height: "12px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.08)",
                  overflow: "hidden",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: progressAnimated ? activePreview.bar : "0%",
                    height: "100%",
                    borderRadius: "999px",
                    background: `linear-gradient(90deg, ${activePreview.accent} 0%, rgba(255,255,255,0.95) 100%)`,
                    boxShadow: `0 0 18px ${activePreview.glow}`,
                    transition: "width 700ms ease",
                  }}
                />
              </div>

              <div
                style={{
                  display: "grid",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    borderRadius: "18px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.025)",
                    padding: "12px 14px",
                    fontSize: "14px",
                    color: "rgba(235,239,255,0.82)",
                  }}
                >
                  {activePreview.statA}
                </div>

                <div
                  style={{
                    borderRadius: "18px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.025)",
                    padding: "12px 14px",
                    fontSize: "14px",
                    color: "rgba(235,239,255,0.82)",
                  }}
                >
                  {activePreview.statB}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "18px 16px",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              background:
                "linear-gradient(180deg, rgba(10,10,20,0.20), rgba(10,10,20,0.90))",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                lineHeight: 1.06,
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#F8FAFF",
                marginBottom: "8px",
              }}
            >
              {activePreview.headline}
            </div>

            <p
              style={{
                margin: "0 auto 16px",
                maxWidth: "320px",
                fontSize: "15px",
                lineHeight: 1.6,
                color: "rgba(235,239,255,0.78)",
              }}
            >
              {activePreview.description}
            </p>

            <button
              onClick={onLockIn}
              style={{
                width: "100%",
                maxWidth: "260px",
                padding: "14px 18px",
                borderRadius: "999px",
                border: "2px solid rgba(165, 103, 255, 0.78)",
                background:
                  "linear-gradient(180deg, rgba(14,16,30,0.94) 0%, rgba(8,10,22,0.98) 100%)",
                color: "#F9FAFF",
                fontSize: "16px",
                fontWeight: 800,
                letterSpacing: "0.02em",
                cursor: "pointer",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 26px rgba(73, 44, 162, 0.28)",
              }}
            >
              Lock In. Early.
            </button>
          </div>
        </section>

        <footer
          style={{
            marginTop: "8px",
            paddingTop: "18px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "rgba(236, 240, 255, 0.72)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              justifyContent: "center",
              fontSize: "14px",
            }}
          >
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Terms of Service
            </a>
          </div>

          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.5,
              maxWidth: "280px",
            }}
          >
            © 2026 ZWAP!™ owned by ZWAP LLC. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}