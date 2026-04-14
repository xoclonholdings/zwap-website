import React, { useState } from "react";

export default function MailingListDatabase({ onBack }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setLoading(true);

    try {
      const referredBy = localStorage.getItem("zwap_referred_by") || "";

      const res = await fetch("/.netlify/functions/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          referredBy,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed");
      }

      // Save locally (sync with your system)
      localStorage.setItem("zwap_early_access_email", email);
      localStorage.setItem("zwap_preview_unlocked", "true");

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