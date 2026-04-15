import React from "react";
import { Link } from "react-router-dom";

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
            fontSize: "28px",
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#F8FAFF",
            marginBottom: "10px",
          }}
        >
          Invite friends.
          <br />
          Stack launch rewards.
        </div>

        <p
          style={{
            margin: "0 auto 18px",
            maxWidth: "300px",
            fontSize: "15px",
            lineHeight: 1.65,
            color: "rgba(235,239,255,0.78)",
          }}
        >
          Send your referral link before launch and reserve bonus rewards for
          every verified signup.
        </p>

        <div
          style={{
            display: "grid",
            gap: "10px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.025)",
              padding: "14px 16px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(245,247,255,0.48)",
                marginBottom: "8px",
              }}
            >
              Your Referral Code
            </div>

            <div
              style={{
                fontSize: "18px",
                fontWeight: 900,
                letterSpacing: "0.08em",
                color: "#B486FF",
              }}
            >
              ZWAP-7X2Q
            </div>
          </div>

          <div
            style={{
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.025)",
              padding: "14px 16px",
            }}
          >
            <input
              type="email"
              placeholder="Enter a friend's email"
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                background: "transparent",
                color: "#F8FAFF",
                fontSize: "15px",
                textAlign: "center",
              }}
            />
          </div>
        </div>

        <button
          style={{
            width: "100%",
            border: "none",
            borderRadius: "999px",
            padding: "14px 18px",
            background:
              "linear-gradient(90deg, rgba(103,242,255,0.22) 0%, rgba(180,134,255,0.22) 100%)",
            color: "#F8FAFF",
            fontSize: "15px",
            fontWeight: 800,
            letterSpacing: "0.02em",
            cursor: "pointer",
            boxShadow: "0 0 18px rgba(180,134,255,0.16)",
            marginBottom: "12px",
          }}
        >
          Send Invite
        </button>

        <div
          style={{
            fontSize: "12px",
            lineHeight: 1.6,
            color: "rgba(235,239,255,0.44)",
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          Earn 5 reserved ZWAP rewards for each verified referral before launch.
          Referral rewards are capped at 25 reserved ZWAP per account.
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
        <Link
          to="/privacy"
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Privacy Policy
        </Link>

        <Link
          to="/terms"
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Terms of Service
        </Link>
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