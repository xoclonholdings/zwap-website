import React from "react";

export default function PreviewModeTabs({
  modes,
  activeMode,
  onChange,
}) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
        marginBottom: "16px",
      }}
    >
      {modes.map((mode) => {
        const isActive = mode.id === activeMode;

        return (
          <button
            key={mode.id}
            onClick={() => onChange(mode.id)}
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
              transition: "all 160ms ease",
            }}
          >
            {mode.label}
          </button>
        );
      })}
    </section>
  );
}