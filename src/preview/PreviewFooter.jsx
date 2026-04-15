import React from "react";

export default function PreviewFooter() {
  return (
    <footer
      style={{
        marginTop: "8px",
        paddingTop: "18px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        color: "rgba(236, 240, 255, 0.72)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          borderRadius: "24px",
          border: "1px solid rgba(165,103,255,0.18)",
          background:
            "linear-gradient(180deg, rgba(18,20,40,0.92) 0%, rgba(10,12,24,0.96) 100%)",
          padding: "18px 16px",
          boxShadow: "0 0 24px rgba(120,88,255,0.12)",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            fontWeight: 900,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(245,247,255,0.52)",
            marginBottom: "10px",
          }}
        >
          Referral Rewards
        </div>

        <div
          style={{
            fontSize: "24px",
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#F8FAFF",
            marginBottom: "10px",
          }}
        >
          Bring people in early.
          <br />
          Get rewarded at launch.
        </div>

        <p
          style={{
            margin: "0 auto 14px",
            maxWidth: "320px",
            fontSize: "15px",
            lineHeight: 1.65,
            color: "rgba(235,239,255,0.78)",
          }}
        >
          Every successful referral reserves rewards before launch. When ZWAP!
          opens, those rewards activate and your network starts with momentum.
        </p>

        <div
          style={{
            display: "grid",
            gap: "10px",
          }}
        >
          <div
            style={{
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.025)",
              padding: "12px 14px",
              fontSize: "14px",
              color: "rgba(235,239,255,0.84)",
            }}
          >
            Your referral code and link were sent to your email
          </div>

          <div
            style={{
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.025)",
              padding: "12px 14px",
              fontSize: "14px",
              color: "rgba(235,239,255,0.84)",
            }}
          >
            The more people you bring in, the stronger your launch position
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "18px",
          flexWrap: "wrap",
          justifyContent: "center",
          fontSize: "14px",
        }}
      >
        <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
          Privacy Policy
        </a>
        <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
          Terms of Service
        </a>
      </div>

      <div
        style={{
          fontSize: "14px",
          lineHeight: 1.5,
          maxWidth: "280px",
          margin: "0 auto",
        }}
      >
        © 2026 ZWAP!™ owned by ZWAP LLC. All rights reserved.
      </div>
    </footer>
  );
}