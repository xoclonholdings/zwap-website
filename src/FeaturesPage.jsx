import React, { useEffect, useState } from "react";
import { coreModes, systemModes, modeContent } from "./FeaturesData";
import ModeRail from "./ModeRail";
import ModePanel from "./ModePanel";

export default function FeaturesPage({ onBack }) {
  const [activeMode, setActiveMode] = useState("move");
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            Features
          </div>

          <div style={{ width: isDesktop ? "60px" : "48px" }} />
        </div>

        <section
          style={{
            textAlign: "center",
            marginBottom: isDesktop ? "30px" : "22px",
            maxWidth: "980px",
            marginInline: "auto",
          }}
        >
          <div
            style={{
              borderRadius: "26px",
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "radial-gradient(circle at 80% 18%, rgba(180,134,255,0.12), transparent 28%), rgba(255,255,255,0.035)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.02) inset, 0 12px 36px rgba(0,0,0,0.18)",
              padding: isDesktop ? "30px 30px" : "24px 20px",
            }}
          >
            <div
              style={{
                fontSize: isDesktop ? "clamp(44px, 5vw, 66px)" : "clamp(30px, 9vw, 42px)",
                lineHeight: 1.02,
                fontWeight: 900,
                letterSpacing: "-0.04em",
                marginBottom: "12px",
                color: "#F8FAFF",
              }}
            >
              Features
            </div>

            <p
              style={{
                margin: "0 auto",
                maxWidth: isDesktop ? "820px" : "320px",
                fontSize: isDesktop ? "20px" : "15px",
                lineHeight: 1.7,
                color: "rgba(235,239,255,0.78)",
              }}
            >
              Explore the modes and systems that make up the ZWAP experience.
            </p>
          </div>
        </section>

        {isDesktop ? (
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "160px minmax(0, 1fr) 160px",
              gap: "20px",
              alignItems: "center",
              marginBottom: "22px",
              flex: 1,
            }}
          >
            <div>
              <ModeRail
                modes={systemModes}
                activeMode={activeMode}
                setActiveMode={setActiveMode}
                direction="vertical"
              />
            </div>

            <div>
              <ModePanel activeMode={activeMode} modeContent={modeContent} />
            </div>

            <div>
              <ModeRail
                modes={coreModes}
                activeMode={activeMode}
                setActiveMode={setActiveMode}
                direction="vertical"
              />
            </div>
          </section>
        ) : (
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginBottom: "22px",
              flex: 1,
            }}
          >
            <div>
              <ModeRail
                modes={systemModes}
                activeMode={activeMode}
                setActiveMode={setActiveMode}
                direction="horizontal"
              />
            </div>

            <div>
              <ModePanel activeMode={activeMode} modeContent={modeContent} />
            </div>

            <div>
              <ModeRail
                modes={coreModes}
                activeMode={activeMode}
                setActiveMode={setActiveMode}
                direction="horizontal"
              />
            </div>
          </section>
        )}

        <footer
          style={{
            marginTop: "22px",
            paddingTop: "18px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "rgba(236, 240, 255, 0.72)",
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            alignItems: "center",
            justifyContent: isDesktop ? "space-between" : "center",
            gap: "12px",
            textAlign: isDesktop ? "left" : "center",
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
              maxWidth: isDesktop ? "420px" : "280px",
              textAlign: isDesktop ? "right" : "center",
            }}
          >
            © 2026 ZWAP!™ owned by ZWAP LLC. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}