import React, { useState } from "react";

function GlassPanel({ children, style = {} }) {
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

function AdminInput({
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

function ActionButton({ label, onClick, primary = false, disabled = false }) {
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

export default function AdminAccessGate({
  onBack,
  onAuthenticate,
  isAuthenticating = false,
  errorMessage = "",
}) {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const handleSubmit = () => {
    if (!onAuthenticate || isAuthenticating) return;

    onAuthenticate({
      email: adminEmail.trim(),
      password: adminPassword,
    });
  };

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: `
          radial-gradient(circle at 72% 22%, rgba(204, 91, 255, 0.10), transparent 16%),
          radial-gradient(circle at 18% 28%, rgba(88, 240, 255, 0.08), transparent 14%),
          radial-gradient(circle at 55% 62%, rgba(255, 176, 86, 0.05), transparent 12%),
          linear-gradient(180deg, #030308 0%, #080913 58%, #04050A 100%)
        `,
        color: "#F5F7FF",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "620px",
          minHeight: "100dvh",
          padding:
            "calc(env(safe-area-inset-top, 0px) + 18px) 16px calc(env(safe-area-inset-bottom, 0px) + 32px)",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
        }}
      >
        <GlassPanel
          style={{
            width: "100%",
            textAlign: "center",
            padding: "28px 22px",
          }}
        >
          <div
            style={{
              width: "74px",
              height: "74px",
              margin: "0 auto 16px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(180,134,255,0.10)",
              border: "1px solid rgba(180,134,255,0.18)",
              boxShadow: "0 0 26px rgba(180,134,255,0.12)",
              fontSize: "30px",
            }}
          >
            🔐
          </div>

          <h1
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(32px, 9vw, 46px)",
              lineHeight: 1.02,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#F8FAFF",
            }}
          >
            Admin Sign In
          </h1>

          <p
            style={{
              margin: "0 auto 20px",
              maxWidth: "480px",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.74)",
            }}
          >
            This area is restricted to authorized ZWAP! administrators only.
            Sign in with your approved admin credentials to access the editorial
            workspace.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              textAlign: "left",
              marginBottom: "14px",
            }}
          >
            <AdminInput
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              placeholder="Admin email"
              type="email"
              autoComplete="username"
            />

            <AdminInput
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              placeholder="Password or access code"
              type="password"
              autoComplete="current-password"
            />
          </div>

          {errorMessage ? (
            <div
              style={{
                marginBottom: "14px",
                fontSize: "13px",
                lineHeight: 1.6,
                color: "#FF8FB8",
              }}
            >
              {errorMessage}
            </div>
          ) : null}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <ActionButton
              label={isAuthenticating ? "Signing In..." : "Sign In"}
              onClick={handleSubmit}
              primary
              disabled={isAuthenticating}
            />

            <ActionButton
              label="Back"
              onClick={onBack}
              disabled={isAuthenticating}
            />
          </div>

          <div
            style={{
              fontSize: "12px",
              lineHeight: 1.65,
              color: "rgba(235,239,255,0.52)",
              maxWidth: "420px",
              margin: "0 auto",
            }}
          >
            This sign-in screen is the admin access gate for the ZWAP! editorial
            system and can later be connected to real authentication, protected
            sessions, or role-based access controls.
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}