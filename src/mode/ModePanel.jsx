import React from "react";

export default function ModePanel({ activeMode, modeContent }) {
  const content = modeContent[activeMode];

  return (
    <div
      style={{
        height: "clamp(340px, 58vh, 560px)",
        borderRadius: 22,
        border: "1px solid rgba(120, 90, 255, 0.25)",
        position: "relative",
        background:
          "linear-gradient(180deg, rgba(20,20,40,0.5), rgba(8,8,18,0.95))",
        boxShadow: getGlow(activeMode),
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
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
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "540px",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              margin: "0 0 8px 0",
              fontWeight: 800,
              letterSpacing: "0.04em",
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.05,
              color: "#F8FAFF",
            }}
          >
            {content.title}
          </h2>

          <p
            style={{
              margin: 0,
              opacity: 0.88,
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.55,
              color: "rgba(235,239,255,0.9)",
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