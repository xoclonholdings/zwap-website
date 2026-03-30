import React from "react";

export default function ModePanel({ activeMode, modeContent }) {
  const content = modeContent[activeMode];

  return (
    <div
      style={{
        height: 240,
        borderRadius: 18,
        border: "1px solid rgba(120, 90, 255, 0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background:
          "linear-gradient(180deg, rgba(20,20,40,0.6), rgba(10,10,20,0.9))",
        boxShadow: getGlow(activeMode),
        overflow: "hidden",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: 24,
          transition: "all 0.25s ease",
        }}
      >
        <h2 style={{ marginBottom: 10 }}>{content.title}</h2>
        <p style={{ opacity: 0.8 }}>{content.description}</p>
      </div>
    </div>
  );
}

/* -------- glow system -------- */

function getGlow(mode) {
  switch (mode) {
    case "move":
      return "0 0 30px rgba(120, 255, 180, 0.25)";
    case "play":
      return "0 0 30px rgba(255, 120, 180, 0.25)";
    case "swap":
      return "0 0 30px rgba(120, 180, 255, 0.25)";
    case "shop":
      return "0 0 30px rgba(255, 200, 120, 0.25)";
    case "world":
      return "0 0 30px rgba(180, 120, 255, 0.25)";
    case "profile":
      return "0 0 30px rgba(120, 255, 255, 0.25)";
    case "audio":
      return "0 0 30px rgba(255, 120, 255, 0.25)";
    case "learn":
      return "0 0 30px rgba(200, 255, 120, 0.25)";
    default:
      return "0 0 25px rgba(120, 90, 255, 0.15)";
  }
}