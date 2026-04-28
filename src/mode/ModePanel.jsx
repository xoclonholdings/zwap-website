import React from "react";
import { getTheme } from "./ModePanelTheme";
import { getHeroLabel } from "./ModePanelHero";
import { ModeVisual } from "./ModePanelVisuals";

export default function ModePanel({ activeMode, modeContent }) {
  const content = modeContent[activeMode];
  const theme = getTheme(activeMode);
  const heroLabel = getHeroLabel(activeMode, content);

  return (
    <div
      style={{
        minHeight: "clamp(460px, 66vh, 680px)",
        borderRadius: 24,
        border: `1px solid ${theme.border}`,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: `
          radial-gradient(circle at 16% 28%, ${theme.radialA}, transparent 22%),
          radial-gradient(circle at 74% 18%, ${theme.radialB}, transparent 24%),
          linear-gradient(180deg, rgba(8,10,22,0.72) 0%, rgba(6,8,18,0.94) 100%)
        `,
        boxShadow: `0 0 34px ${theme.glow}`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${theme.grid} 1px, transparent 1px),
            linear-gradient(90deg, ${theme.grid} 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
          opacity: 0.16,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          flex: "1 1 auto",
          minHeight: "clamp(320px, 48vh, 520px)",
          width: "100%",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <ModeVisual mode={activeMode} theme={theme} />

        <div
          style={{
            position: "absolute",
            top: "8%",
            left: "6%",
            right: "6%",
            textAlign: "left",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: "clamp(28px, 5vw, 74px)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.05em",
              color: "rgba(255,255,255,0.10)",
              textTransform: "uppercase",
              maxWidth: "72%",
            }}
          >
            {heroLabel}
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          padding: "22px 16px 24px",
          boxSizing: "border-box",
          background:
            "linear-gradient(180deg, rgba(8,10,22,0.94), rgba(5,6,14,0.99))",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 3,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "680px",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              margin: "0 0 8px 0",
              fontWeight: 900,
              letterSpacing: "0.03em",
              fontSize: "clamp(30px, 4vw, 46px)",
              lineHeight: 1.02,
              color: "#F8FAFF",
              textTransform: "uppercase",
            }}
          >
            {content.title}
          </h2>

          <p
            style={{
              margin: 0,
              color: "rgba(235,239,255,0.9)",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.55,
              maxWidth: "100%",
              overflowWrap: "break-word",
              wordBreak: "normal",
            }}
          >
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
}