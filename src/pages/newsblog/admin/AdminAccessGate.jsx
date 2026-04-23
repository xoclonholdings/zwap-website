import React, { useState } from "react";

export default function AdminAccessGate({
  onBack,
  onAuthenticate,
  isAuthenticating,
  errorMessage,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!onAuthenticate) return;

    await onAuthenticate({
      email,
      password,
    });
  };

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `
          radial-gradient(circle at 72% 22%, rgba(204, 91, 255, 0.10), transparent 16%),
          radial-gradient(circle at 18% 28%, rgba(88, 240, 255, 0.08), transparent 14%),
          radial-gradient(circle at 55% 62%, rgba(255, 176, 86, 0.05), transparent 12%),
          linear-gradient(180deg, #030308 0%, #080913 58%, #04050A 100%)
        `,
        color: "#F5F7FF",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.08)",
          background:
            "linear-gradient(180deg, rgba(14,16,30,0.92) 0%, rgba(8,10,22,0.96) 100%)",
          boxShadow:
            "0 18px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)",
          padding: "24px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "18px", textAlign: "center" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(245,247,255,0.48)",
              marginBottom: "8px",
            }}
          >
            Admin Access
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "28px",
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            ZWAP! Admin Login
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gap: "12px",
          }}
        >
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          {errorMessage ? (
            <div
              style={{
                fontSize: "13px",
                color: "#FF6B6B",
                fontWeight: 600,
              }}
            >
              {errorMessage}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isAuthenticating}
            style={{
              border: "1px solid rgba(103,242,255,0.24)",
              background:
                "linear-gradient(90deg, rgba(103,242,255,0.18) 0%, rgba(180,134,255,0.18) 100%)",
              color: "#F8FAFF",
              borderRadius: "14px",
              padding: "14px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 800,
              opacity: isAuthenticating ? 0.7 : 1,
            }}
          >
            {isAuthenticating ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Back */}
        <button
          onClick={onBack}
          style={{
            marginTop: "14px",
            background: "transparent",
            border: "none",
            color: "rgba(245,247,255,0.6)",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.04)",
  color: "#F8FAFF",
  padding: "14px",
  fontSize: "14px",
  fontWeight: 600,
  outline: "none",
  boxSizing: "border-box",
};