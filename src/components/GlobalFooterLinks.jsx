import React from "react";

export default function GlobalFooterLinks({
  onPrivacy,
  onTerms,
  onSitemap,
  onNews,
  onBlog,
  onAbout,
  onFeatures,
  onPartners,
  onDevelopers,
  onEnterprise,
  onContact,
  onFAQ,
  onHowItWorks,
  isDesktop = false,
}) {
  const sectionTitleStyle = {
    fontSize: "11px",
    fontWeight: 900,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(245,247,255,0.42)",
    marginBottom: "10px",
  };

  const linkButtonStyle = {
    color: "rgba(236,240,255,0.76)",
    background: "transparent",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontSize: "14px",
    lineHeight: 1.5,
    textAlign: "left",
  };

  const gradientZwapStyle = {
    fontWeight: 800,
    background:
      "linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <footer
      style={{
        marginTop: "10px",
        paddingTop: "22px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: "22px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop
            ? "repeat(4, minmax(0, 1fr))"
            : "1fr 1fr",
          gap: "20px",
        }}
      >
        <div>
          <div style={sectionTitleStyle}>Explore</div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <button type="button" onClick={onAbout} style={linkButtonStyle}>
              About
            </button>

            <button type="button" onClick={onFeatures} style={linkButtonStyle}>
              Features
            </button>

            <button type="button" onClick={onPartners} style={linkButtonStyle}>
              Partners
            </button>

            <button
              type="button"
              onClick={onEnterprise}
              style={linkButtonStyle}
            >
              Enterprise
            </button>

            <button
              type="button"
              onClick={onDevelopers}
              style={linkButtonStyle}
            >
              Developers
            </button>
          </div>
        </div>

        <div>
          <div style={sectionTitleStyle}>Content</div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <button type="button" onClick={onNews} style={linkButtonStyle}>
              News
            </button>

            <button type="button" onClick={onBlog} style={linkButtonStyle}>
              Blog
            </button>

            <button
              type="button"
              onClick={onHowItWorks}
              style={linkButtonStyle}
            >
              How It Works
            </button>

            <button type="button" onClick={onSitemap} style={linkButtonStyle}>
              Sitemap
            </button>
          </div>
        </div>

        <div>
          <div style={sectionTitleStyle}>Support</div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <button type="button" onClick={onContact} style={linkButtonStyle}>
              Contact
            </button>

            <button type="button" onClick={onFAQ} style={linkButtonStyle}>
              FAQ
            </button>

            <button type="button" onClick={onPrivacy} style={linkButtonStyle}>
              Privacy Policy
            </button>

            <button type="button" onClick={onTerms} style={linkButtonStyle}>
              Terms of Use
            </button>
          </div>

          <div
            style={{
              marginTop: "14px",
              maxWidth: "220px",
              fontSize: "12px",
              lineHeight: 1.6,
              color: "rgba(236,240,255,0.42)",
              textAlign: "left",
            }}
          >
            <span style={gradientZwapStyle}>ZWAP!</span> is currently in early
            access. Features and rewards are subject to change during rollout.
          </div>
        </div>

        <div>
          <div style={sectionTitleStyle}>
            <span style={gradientZwapStyle}>ZWAP!</span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "rgba(236,240,255,0.68)",
              }}
            >
              <span style={gradientZwapStyle}>ZWAP!</span> is a movement-first
              reward ecosystem built around progression, consistency, financial
              literacy, and delayed value.
            </div>

            <div
              style={{
                fontSize: "13px",
                lineHeight: 1.7,
                color: "rgba(236,240,255,0.52)",
              }}
            >
              Developed by ZWAP LLC, a subsidiary of XOCLON HOLDINGS INC.
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: "16px",
          display: "flex",
          flexDirection: isDesktop ? "row" : "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          textAlign: isDesktop ? "left" : "center",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            color: "rgba(236,240,255,0.56)",
          }}
        >
          © 2026 <span style={gradientZwapStyle}>ZWAP!</span>™ owned by ZWAP
          LLC. All rights reserved.
        </div>

        <div
          style={{
            fontSize: "13px",
            color: "rgba(236,240,255,0.46)",
          }}
        >
          Movement • Rewards • Education • Utility
        </div>
      </div>
    </footer>
  );
}