import React, { useState } from "react";

export default function MailingListDatabase({ onBack }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email submitted:", email);

    // later: send to backend
    alert("You're locked in early.");
    setEmail("");
  };

  return (
    <div style={{ padding: 20, color: "white" }}>
      <button onClick={onBack}>← Back</button>

      <h1 style={{ marginTop: 20 }}>Early Access</h1>

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
          style={{
            padding: 12,
            width: "100%",
            borderRadius: 999,
            background: "#6b5cff",
            color: "white",
            fontWeight: "bold",
            border: "none",
          }}
        >
          Lock In. Early.
        </button>
      </form>
    </div>
  );
}