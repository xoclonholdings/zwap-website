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
        padding: "10px 12px",
        borderRadius: 8,
        border: active
          ? "1px solid rgba(120, 90, 255, 0.8)"
          : "1px solid rgba(255,255,255,0.2)",
        background: active
          ? "rgba(120, 90, 255, 0.4)"
          : "transparent",
        color: "white",
        cursor: "pointer",
        width: fullWidth ? "100%" : "auto",
        flex: fullWidth ? "unset" : 1,
        fontWeight: 700,
        letterSpacing: "0.04em",
      }}
    >
      {label}
    </button>
  );
}