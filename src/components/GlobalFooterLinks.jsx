import React from "react";

export default function GlobalFooterLinks({
  onPrivacy,
  onTerms,
  onSitemap,
  isDesktop = false,
}) {
  return (
    <footer
      style={{
        marginTop: "8px",
        paddingTop: "18px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        color: "rgba(236, 240, 255, 0.72)",
        display: "flex",
        flexDirection: isDesktop ? "row" : "column",
        alignItems: "center",
        justifyContent: isDesktop ? "space-between" : "center",
        gap: "12px",
        textAlign: isDesktop ? "left" : "center",
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

        <button
          type="button"
          onClick={onSitemap}
          style={{
            color: "inherit",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Sitemap
        </button>
      </div>

      <div
        style={{
          fontSize: "14px",
          lineHeight: 1.5,
          maxWidth: isDesktop ? "420px" : "280px",
          textAlign: isDesktop ? "right" : "center",
        }}
      >
        © 2026 ZWAP!™ owned by ZWAP LLC. All rights reserved.
      </div>
    </footer>
  );
}