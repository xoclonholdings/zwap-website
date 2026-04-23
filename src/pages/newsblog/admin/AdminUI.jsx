import React from "react";

export function SectionEyebrow({ children, style = {} }) {
  return (
    <div
      style={{
        fontSize: "12px",
        fontWeight: 900,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "rgba(245,247,255,0.48)",
        marginBottom: "10px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function GlassPanel({ children, style = {} }) {
  return (
    <section
      style={{
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(14,16,30,0.92) 0%, rgba(8,10,22,0.96) 100%)",
        boxShadow:
          "0 18px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)",
        padding: "20px 18px",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

export function SmallMetric({ label, value }) {
  return (
    <div
      style={{
        borderRadius: "18px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.035)",
        padding: "14px 14px",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          fontWeight: 900,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(245,247,255,0.48)",
          marginBottom: "8px",
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: "24px",
          fontWeight: 900,
          lineHeight: 1,
          color: "#F8FAFF",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export function HeaderTabButton({ isActive, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: "none",
        cursor: "pointer",
        padding: "11px 18px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 900,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: isActive ? "#05060B" : "rgba(245,247,255,0.78)",
        background: isActive
          ? "linear-gradient(90deg, #66F2FF 0%, #B486FF 100%)"
          : "rgba(255,255,255,0.06)",
        boxShadow: isActive
          ? "0 0 18px rgba(180,134,255,0.22)"
          : "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      {children}
    </button>
  );
}

export function AdminInput({
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
}) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      autoComplete={autoComplete}
      style={{
        width: "100%",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.04)",
        color: "#F8FAFF",
        padding: "14px 14px",
        fontSize: "14px",
        fontWeight: 600,
        outline: "none",
        boxSizing: "border-box",
      }}
    />
  );
}

export function AdminTextarea({
  value,
  onChange,
  placeholder,
  rows = 4,
}) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      style={{
        width: "100%",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.04)",
        color: "#F8FAFF",
        padding: "14px 14px",
        fontSize: "14px",
        fontWeight: 600,
        outline: "none",
        boxSizing: "border-box",
        resize: "vertical",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    />
  );
}

export function ActionButton({
  label,
  onClick,
  primary = false,
  disabled = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "100%",
        border: primary
          ? "1px solid rgba(103,242,255,0.24)"
          : "1px solid rgba(255,255,255,0.08)",
        background: primary
          ? "linear-gradient(90deg, rgba(103,242,255,0.18) 0%, rgba(180,134,255,0.18) 100%)"
          : "rgba(255,255,255,0.04)",
        color: "#F8FAFF",
        borderRadius: "14px",
        padding: "14px 14px",
        cursor: disabled ? "default" : "pointer",
        fontSize: "14px",
        fontWeight: 800,
        textAlign: "center",
        opacity: disabled ? 0.55 : 1,
      }}
    >
      {label}
    </button>
  );
}

export function StatusPill({ value }) {
  const isPublished = value === "Published";

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px 10px",
        borderRadius: "999px",
        background: isPublished
          ? "rgba(103,242,255,0.12)"
          : "rgba(180,134,255,0.12)",
        border: isPublished
          ? "1px solid rgba(103,242,255,0.22)"
          : "1px solid rgba(180,134,255,0.22)",
        color: isPublished ? "#67F2FF" : "#B486FF",
        fontSize: "11px",
        fontWeight: 900,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      {value}
    </span>
  );
}

export function TogglePill({ active, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: active
          ? "1px solid rgba(103,242,255,0.26)"
          : "1px solid rgba(255,255,255,0.10)",
        background: active
          ? "rgba(103,242,255,0.10)"
          : "rgba(255,255,255,0.04)",
        color: active ? "#67F2FF" : "rgba(245,247,255,0.76)",
        borderRadius: "999px",
        padding: "10px 14px",
        cursor: "pointer",
        fontSize: "11px",
        fontWeight: 900,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </button>
  );
}