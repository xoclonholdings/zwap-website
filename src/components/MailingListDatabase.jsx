import React, { useState } from "react";

function getStoredRecord() {
  try {
    return JSON.parse(localStorage.getItem("zwap_early_access_record") || "{}");
  } catch {
    return {};
  }
}

function saveRecord(record) {
  localStorage.setItem("zwap_early_access_record", JSON.stringify(record));
}

export default function MailingListDatabase() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanEmail = email.trim();
    if (!cleanEmail || loading) return;

    setLoading(true);

    try {
      const referredBy = localStorage.getItem("zwap_referred_by") || "";

      const res = await fetch("/.netlify/functions/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: cleanEmail,
          referredBy,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed");
      }

      const existing = getStoredRecord();

      const updated = {
        ...existing,
        email: cleanEmail,
        early_access: true,
        preview_unlocked: true,
        referral_code:
          data.referralCode ||
          existing.referral_code ||
          localStorage.getItem("zwap_referral_code") ||
          "",
        referred_by: referredBy || existing.referred_by || null,
        referral_count: existing.referral_count || 0,
        pending_rewards: {
          referral_zwap:
            existing?.pending_rewards?.referral_zwap || 0,
        },
        created_at: existing.created_at || new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      saveRecord(updated);

      localStorage.setItem("zwap_early_access_email", cleanEmail);
      localStorage.setItem("zwap_preview_unlocked", "true");

      if (updated.referral_code) {
        localStorage.setItem("zwap_referral_code", updated.referral_code);
      }

      setSuccess(true);
      setEmail("");
    } catch (err) {
      console.error("Early access error:", err);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "10px 6px",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            fontWeight: 800,
            color: "#7AF4FF",
            marginBottom: "6px",
          }}
        >
          You're in.
        </div>

        <div
          style={{
            fontSize: "14px",
            color: "rgba(245,247,255,0.78)",
            lineHeight: 1.6,
          }}
        >
          Check your email for your referral link and updates.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "14px 16px",
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.06)",
            color: "#F8FAFF",
            fontSize: "14px",
            outline: "none",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            borderRadius: "999px",
            padding: "14px 18px",
            border: "1px solid rgba(103,242,255,0.30)",
            background:
              "linear-gradient(90deg, #66F2FF 0%, #B486FF 100%)",
            color: "#05060B",
            fontSize: "14px",
            fontWeight: 900,
            cursor: "pointer",
            opacity: loading ? 0.6 : 1,
            boxShadow: "0 10px 24px rgba(180,134,255,0.22)",
          }}
        >
          {loading ? "Submitting..." : "Join the Newsletter"}
        </button>
      </div>
    </form>
  );
}