import React from "react";

export default function ModeButton({
  label,
  active = false,
  onClick,
  fullWidth = false,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        minHeight: "56px",
        padding: "14px 16px",
        borderRadius: 14,
        border: active
          ? "1px solid rgba(120, 90, 255, 0.9)"
          : "1px solid rgba(255,255,255,0.18)",
        background: active
          ? "linear-gradient(180deg, rgba(108,82,255,0.65), rgba(82,58,210,0.58))"
          : "rgba(255,255,255,0.03)",
        color: "#FFFFFF",
        cursor: "pointer",
        width: fullWidth ? "100%" : "auto",
        flex: fullWidth ? "unset" : 1,
        fontWeight: 800,
        fontSize: "clamp(14px, 1.4vw, 16px)",
        letterSpacing: "0.05em",
        boxShadow: active ? "0 0 20px rgba(120, 90, 255, 0.22)" : "none",
        transition: "all 180ms ease",
        textAlign: "center",
      }}
    >
      {label}
    </button>
  );
}