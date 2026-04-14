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
        alignItems: "center",
        gap: "12px",
        textAlign: "center",
      }}
    >
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
        }}
      >
        © 2026 ZWAP!™ owned by ZWAP LLC. All rights reserved.
      </div>
    </footer>
  );
}