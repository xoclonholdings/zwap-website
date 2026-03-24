import React from "react";

export default function DownloadPage({ onBack }) {
  return (
    <div style={{ padding: 20, color: "white" }}>
      <button onClick={onBack}>← Back</button>

      <h1 style={{ marginTop: 20 }}>Download</h1>
      <p>Choose your platform.</p>
    </div>
  );
}