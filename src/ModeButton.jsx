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
        minHeight: "50px",
        padding: "12px 14px",
        borderRadius: 16,
        border: active
          ? "1px solid rgba(126, 96, 255, 0.95)"
          : "1px solid rgba(255,255,255,0.14)",
        background: active
          ? "linear-gradient(180deg, rgba(108,82,255,0.72), rgba(78,56,210,0.62))"
          : "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",
        color: "#FFFFFF",
        cursor: "pointer",
        width: fullWidth ? "100%" : "auto",
        flex: fullWidth ? "unset" : 1,
        fontWeight: 800,
        fontSize: "clamp(13px, 1.2vw, 15px)",
        letterSpacing: "0.05em",
        textAlign: "center",
        boxShadow: active
          ? "0 0 18px rgba(120, 90, 255, 0.24), inset 0 1px 0 rgba(255,255,255,0.12)"
          : "inset 0 1px 0 rgba(255,255,255,0.04)",
        transition: "all 180ms ease",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </button>
  );
}