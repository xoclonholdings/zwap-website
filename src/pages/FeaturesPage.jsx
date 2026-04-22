import React, { useEffect, useState } from "react";
import { coreModes, systemModes, modeContent } from "../mode/FeaturesData.js";
import ModeRail from "../mode/ModeRail";
import ModePanel from "../mode/ModePanel";
import FeatureExplainerCard from "./features/FeatureExplainerCard";
import featuresExplainerData from "./features/featuresExplainerData";

export default function FeaturesPage({ onBack, onPrivacy, onTerms }) {
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

  const activeExplainer = featuresExplainerData[activeMode];

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
          maxWidth: isDesktop ? "1440px" : "430px",
          minHeight: "100dvh",
          padding: isDesktop
            ? "28px 24px 34px"
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
            marginBottom: isDesktop ? "18px" : "14px",
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

        {isDesktop ? (
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "120px minmax(780px, 1fr) 120px",
              gap: "16px",
              alignItems: "stretch",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ModeRail
                modes={systemModes}
                activeMode={activeMode}
                setActiveMode={setActiveMode}
                direction="vertical"
              />
            </div>

            <div
              style={{
                width: "100%",
                minWidth: 0,
              }}
            >
              <ModePanel activeMode={activeMode} modeContent={modeContent} />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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
              gap: "14px",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                width: "100%",
                overflow: "hidden",
              }}
            >
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

            <div
              style={{
                width: "100%",
                overflow: "hidden",
              }}
            >
              <ModeRail
                modes={coreModes}
                activeMode={activeMode}
                setActiveMode={setActiveMode}
                direction="horizontal"
              />
            </div>
          </section>
        )}

        <FeatureExplainerCard data={activeExplainer} />

        <div
          style={{
            marginTop: "16px",
            marginBottom: "18px",
            textAlign: "center",
            fontSize: isDesktop ? "20px" : "18px",
            fontWeight: 700,
            lineHeight: 1.55,
            color: "rgba(235,239,255,0.82)",
            maxWidth: isDesktop ? "860px" : "340px",
            marginInline: "auto",
          }}
        >
          Explore the modes and systems that make up the ZWAP! experience.
        </div>

        <footer
          style={{
            marginTop: "8px",
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
            <button
              type="button"
              onClick={onPrivacy}
              style={{
                color: "inherit",
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={onTerms}
              style={{
                color: "inherit",
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Terms of Service
            </button>
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