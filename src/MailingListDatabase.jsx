import React from "react";

export default function MailingListDatabase({
  onBack,
  email,
  setEmail,
  onSubmitAccess,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    onSubmitAccess(email);
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
          maxWidth: "430px",
          minHeight: "100dvh",
          padding:
            "calc(env(safe-area-inset-top, 0px) + 14px) 16px calc(env(safe-area-inset-bottom, 0px) + 28px)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "18px",
          }}
        >
          <button
            onClick={onBack}
            style={{
              border: "none",
              background: "transparent",
              color: "rgba(245,247,255,0.76)",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              padding: 0,
            }}
          >
            ← Back
          </button>

          <div
            style={{
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(245,247,255,0.56)",
            }}
          >
            Early Access
          </div>

          <div style={{ width: "48px" }} />
        </div>

        {/* HERO */}
        <section
          style={{
            textAlign: "center",
            marginBottom: "26px",
          }}
        >
          <h1
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(34px, 10vw, 46px)",
              lineHeight: 1.02,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#F9FBFF",
            }}
          >
            Lock In{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Early
            </span>
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "320px",
              fontSize: "15px",
              lineHeight: 1.65,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            Get access to the preview experience and secure your early position
            before launch.
          </p>
        </section>

        {/* FORM CARD */}
        <section
          style={{
            borderRadius: "26px",
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "radial-gradient(circle at 80% 18%, rgba(180,134,255,0.12), transparent 28%), rgba(255,255,255,0.035)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.02) inset, 0 12px 36px rgba(0,0,0,0.18)",
            padding: "22px 20px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                borderRadius: "999px",
                padding: "14px 18px",
                marginBottom: "14px",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(0,0,0,0.22)",
                color: "#fff",
                outline: "none",
                fontSize: "15px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px 18px",
                borderRadius: "999px",
                border: "2px solid rgba(165, 103, 255, 0.78)",
                background:
                  "linear-gradient(180deg, rgba(14,16,30,0.94) 0%, rgba(8,10,22,0.98) 100%)",
                color: "#F9FAFF",
                fontSize: "16px",
                fontWeight: 800,
                letterSpacing: "0.02em",
                cursor: "pointer",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 26px rgba(73, 44, 162, 0.28)",
              }}
            >
              Lock In. Early.
            </button>
          </form>
        </section>

        {/* NOTE */}
        <div
          style={{
            marginTop: "16px",
            textAlign: "center",
            fontSize: "13px",
            color: "rgba(235,239,255,0.6)",
          }}
        >
          Early users will receive access first and unlock referral rewards at launch.
        </div>
      </div>
    </div>
  );
}