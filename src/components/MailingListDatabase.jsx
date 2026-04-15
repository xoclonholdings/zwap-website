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

export default function MailingListDatabase({ onBack }) {
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

      /* -------------------- LOCAL SYSTEM SYNC -------------------- */

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

  return (
    <div style={{ padding: 20, color: "white" }}>
      <button onClick={onBack}>← Back</button>

      <h1 style={{ marginTop: 20 }}>Early Access</h1>

      {success ? (
        <div style={{ marginTop: 20 }}>
          <p>You're locked in early.</p>
          <p>Check your email for your referral link.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: 10,
              width: "100%",
              marginBottom: 10,
              borderRadius: 8,
              border: "1px solid #444",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: 12,
              width: "100%",
              borderRadius: 999,
              background: "#6b5cff",
              color: "white",
              fontWeight: "bold",
              border: "none",
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? "Sending..." : "Lock In. Early."}
          </button>
        </form>
      )}
    </div>
  );
}