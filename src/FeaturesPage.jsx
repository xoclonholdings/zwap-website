import React from "react";

export default function FeaturesPage({ onBack }) {
  return (
    <div style={{ padding: 20, color: "white" }}>
      <button onClick={onBack}>← Back</button>

      <h1 style={{ marginTop: 20 }}>Features</h1>
      <p>ZWAP features breakdown coming next.</p>
    </div>
  );
}