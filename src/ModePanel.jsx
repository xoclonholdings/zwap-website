import React from "react";

export default function ModePanel({ activeMode, modeContent }) {
  const content = modeContent[activeMode];

  return (
    <div
      style={{
        height: "clamp(320px, 55vh, 520px)", // ⬅️ taller responsive console
        borderRadius: 22,
        border: "1px solid rgba(120, 90, 255, 0.25)",
        position: "relative",
        background:
          "linear-gradient(180deg, rgba(20,20,40,0.5), rgba(8,8,18,0.95))",
        boxShadow: getGlow(activeMode),
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end", // ⬅️ pushes overlay to bottom
      }}
    >
      {/* BOTTOM OVERLAY */}
      <div
        style={{
          width: "100%",
          padding: "20px 18px",
          backdropFilter: "blur(14px)",
          background:
            "linear-gradient(180deg, rgba(10,10,20,0.2), rgba(10,10,20,0.85))",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 520,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              marginBottom: 6,
              fontWeight: 800,
              letterSpacing: "0.04em",
            }}
          >
            {content.title}
          </h2>

          <p
            style={{
              opacity: 0.8,
              fontSize: "0.95rem",
              lineHeight: 1.5,
            }}
          >
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* -------- glow system -------- */

function getGlow(mode) {
  switch (mode) {
    case "move":
      return "0 0 40px rgba(120, 255, 180, 0.25)";
    case "play":
      return "0 0 40px rgba(255, 120, 180, 0.25)";
    case "swap":
      return "0 0 40px rgba(120, 180, 255, 0.25)";
    case "shop":
      return "0 0 40px rgba(255, 200, 120, 0.25)";
    case "world":
      return "0 0 40px rgba(180, 120, 255, 0.25)";
    case "profile":
      return "0 0 40px rgba(120, 255, 255, 0.25)";
    case "audio":
      return "0 0 40px rgba(255, 120, 255, 0.25)";
    case "learn":
      return "0 0 40px rgba(200, 255, 120, 0.25)";
    default:
      return "0 0 25px rgba(120, 90, 255, 0.15)";
  }
}