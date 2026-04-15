import React, { useMemo, useState } from "react";

export default function PreviewFooter({
  onPrivacy,
  onTerms,
  referralCode = "",
  onSendInvite,
}) {
  const [enteredReferralCode, setEnteredReferralCode] = useState(referralCode);
  const [friendEmail, setFriendEmail] = useState("");

  const isInviteReady = useMemo(() => {
    return (
      enteredReferralCode.trim().length > 0 &&
      friendEmail.trim().length > 0
    );
  }, [enteredReferralCode, friendEmail]);

  const handleInvite = () => {
    if (!isInviteReady) return;

    if (typeof onSendInvite === "function") {
      onSendInvite({
        referralCode: enteredReferralCode.trim(),
        friendEmail: friendEmail.trim(),
      });
    }
  };

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
            maxWidth: "310px",
            fontSize: "15px",
            lineHeight: 1.65,
            color: "rgba(235,239,255,0.78)",
          }}
        >
          Use the referral code sent to your email, enter a friend’s email,
          and reserve bonus rewards for each verified signup before launch.
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
            }}
          >
            <input
              type="text"
              value={enteredReferralCode}
              onChange={(e) => setEnteredReferralCode(e.target.value)}
              placeholder="Enter referral code from your email"
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                background: "transparent",
                color: "#F8FAFF",
                fontSize: "15px",
                textAlign: "center",
                letterSpacing: "0.06em",
              }}
            />
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
              value={friendEmail}
              onChange={(e) => setFriendEmail(e.target.value)}
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
          type="button"
          onClick={handleInvite}
          disabled={!isInviteReady}
          style={{
            width: "100%",
            border: "none",
            borderRadius: "999px",
            padding: "14px 18px",
            background: isInviteReady
              ? "linear-gradient(90deg, rgba(103,242,255,0.22) 0%, rgba(180,134,255,0.22) 100%)"
              : "rgba(255,255,255,0.08)",
            color: isInviteReady ? "#F8FAFF" : "rgba(248,250,255,0.42)",
            fontSize: "15px",
            fontWeight: 800,
            letterSpacing: "0.02em",
            cursor: isInviteReady ? "pointer" : "not-allowed",
            boxShadow: isInviteReady
              ? "0 0 18px rgba(180,134,255,0.16)"
              : "none",
            marginBottom: "12px",
            transition: "all 180ms ease",
          }}
        >
          Send Invite
        </button>

        <div
          style={{
            fontSize: "12px",
            lineHeight: 1.6,
            color: "rgba(235,239,255,0.44)",
            maxWidth: "310px",
            margin: "0 auto",
          }}
        >
          Earn 5 reserved ZWAP rewards for each verified referral before
          launch. Referral rewards are capped at 25 reserved ZWAP per account
          and activate after real signup and first activity inside the app.
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
        <button
          type="button"
          onClick={onPrivacy}
          style={{
            color: "inherit",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Privacy Policy
        </button>

        <button
          type="button"
          onClick={onTerms}
          style={{
            color: "inherit",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Terms of Service
        </button>
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