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
        height: "clamp(340px, 58vh, 560px)",
        borderRadius: 24,
        border: `1px solid ${theme.border}`,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        background: `
          radial-gradient(circle at 16% 28%, ${theme.radialA}, transparent 22%),
          radial-gradient(circle at 74% 18%, ${theme.radialB}, transparent 24%),
          linear-gradient(180deg, rgba(8,10,22,0.72) 0%, rgba(6,8,18,0.92) 100%)
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
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <ModeVisual mode={activeMode} theme={theme} />
      </div>

      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "7%",
          right: "7%",
          textAlign: "left",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            fontSize: "clamp(28px, 5vw, 74px)",
            fontWeight: 900,
            lineHeight: 0.92,
            letterSpacing: "-0.05em",
            color: "rgba(255,255,255,0.11)",
            textTransform: "uppercase",
            maxWidth: "72%",
          }}
        >
          {heroLabel}
        </div>
      </div>

      <div
        style={{
          width: "100%",
          padding: "18px 16px",
          boxSizing: "border-box",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          background:
            "linear-gradient(180deg, rgba(10,10,20,0.18), rgba(10,10,20,0.88))",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "560px",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              margin: "0 0 8px 0",
              fontWeight: 900,
              letterSpacing: "0.03em",
              fontSize: "clamp(28px, 4vw, 42px)",
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