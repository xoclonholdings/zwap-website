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
        minWidth: 0,
        padding: "12px 10px",
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
        flex: fullWidth ? "1 1 0" : 1,
        fontWeight: 800,
        fontSize: "clamp(12px, 1.1vw, 15px)",
        letterSpacing: "0.04em",
        textAlign: "center",
        boxShadow: active
          ? "0 0 18px rgba(120, 90, 255, 0.24), inset 0 1px 0 rgba(255,255,255,0.12)"
          : "inset 0 1px 0 rgba(255,255,255,0.04)",
        transition: "all 180ms ease",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {label}
    </button>
  );
}