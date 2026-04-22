import React from "react";

export default function GlobalFooterLinks({
  onPrivacy,
  onTerms,
  onSitemap,
  onContact,
  onFAQ,
  isDesktop = false,
}) {
  const buttonStyle = {
    color: "inherit",
    background: "transparent",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
    transition: "opacity 0.18s ease",
  };

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
        gap: "16px",
        textAlign: isDesktop ? "left" : "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "18px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "14px",
        }}
      >
        <button
          type="button"
          onClick={onPrivacy}
          style={buttonStyle}
        >
          Privacy Policy
        </button>

        <button
          type="button"
          onClick={onTerms}
          style={buttonStyle}
        >
          Terms of Service
        </button>

        <button
          type="button"
          onClick={onSitemap}
          style={buttonStyle}
        >
          Sitemap
        </button>

        {onContact ? (
          <button
            type="button"
            onClick={onContact}
            style={buttonStyle}
          >
            Contact
          </button>
        ) : null}

        {onFAQ ? (
          <button
            type="button"
            onClick={onFAQ}
            style={buttonStyle}
          >
            FAQ
          </button>
        ) : null}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          maxWidth: isDesktop ? "480px" : "320px",
          textAlign: isDesktop ? "right" : "center",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            lineHeight: 1.5,
          }}
        >
          © 2026 ZWAP!™ owned by ZWAP LLC. All rights reserved.
        </div>

        <div
          style={{
            fontSize: "12px",
            lineHeight: 1.6,
            color: "rgba(236,240,255,0.48)",
          }}
        >
          ZWAP! is a movement-first rewards ecosystem developed by XOCLON
          HOLDINGS INC.
        </div>
      </div>
    </footer>
  );
}