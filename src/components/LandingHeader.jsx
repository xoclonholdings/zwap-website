import React from "react";
import logo from "../assets/Zwap_logo_full.png";
import googlePlayLogo from "../assets/google_play_logo.PNG";

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.7 12.9c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.7-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 6.9 1.1 9 .7 1 1.6 2.2 2.8 2.1 1.1 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-.1 2.7-1.1.8-1 1.2-2 1.2-2.1-.1 0-2.3-.9-2.3-5.1ZM14.5 6.4c.6-.7 1-1.7.9-2.6-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.6-1 2.5 1 .1 2-.5 2.7-1.2Z" />
    </svg>
  );
}

function Star({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        color: "#F8F9FF",
        fontSize: "11px",
        lineHeight: 1,
        textShadow: "0 0 10px rgba(255,255,255,0.92)",
        animation: "twinkle 3s ease-in-out infinite",
        ...style,
      }}
    >
      ✦
    </div>
  );
}

export default function LandingHeader({
  onAbout,
  onFeatures,
  onPreview,
  onPartners,
  onEnterprise,
  onDevelopers,
  onNewsBlog,
  onGooglePlay,
  onAppleStore,
}) {
  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 768 : false;

  const linkStyle = {
    color: "#F5F7FF",
    textDecoration: "none",
    background: "transparent",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    textAlign: isDesktop ? "right" : "center",
    width: "100%",
    whiteSpace: "nowrap",
  };

  const storeButtonStyle = {
    flex: 1,
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "11px 12px",
    borderRadius: "999px",
    border: "1px solid rgba(174, 132, 255, 0.42)",
    background:
      "linear-gradient(180deg, rgba(18,20,38,0.92) 0%, rgba(10,12,26,0.98) 100%)",
    color: "#FFFFFF",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 700,
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 20px rgba(0,0,0,0.22)",
  };

  const navItems = [
    { label: "About", onClick: onAbout },
    { label: "Features", onClick: onFeatures },
    { label: "Preview", onClick: onPreview },
    { label: "Partners", onClick: onPartners },
    { label: "Enterprise", onClick: onEnterprise },
    { label: "Developers", onClick: onDevelopers },
    { label: "News Blog", onClick: onNewsBlog },
  ];

  return (
    <>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          padding: "14px 0 10px",
          position: "relative",
          zIndex: 3,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: isDesktop ? "104px" : "96px",
              flexShrink: 0,
            }}
          >
            <img
              src={logo}
              alt="ZWAP!"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
            <Star style={{ top: "-4px", left: "8px" }} />
            <Star style={{ top: "10px", right: "4px", animationDelay: "0.8s" }} />
            <Star style={{ bottom: "8px", right: "-2px", animationDelay: "1.4s" }} />
          </div>

          <nav
            style={
              isDesktop
                ? {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "14px",
                    flexWrap: "wrap",
                    maxWidth: "820px",
                  }
                : {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px 14px",
                    justifyItems: "stretch",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "300px",
                  }
            }
          >
            {navItems.map((item) => (
              <button key={item.label} onClick={item.onClick} style={linkStyle}>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            width: "100%",
          }}
        >
          <button onClick={onGooglePlay} style={storeButtonStyle}>
            <img
              src={googlePlayLogo}
              alt="Google Play"
              style={{
                width: "18px",
                height: "18px",
                objectFit: "contain",
                display: "block",
              }}
            />
            <span>Google Play</span>
          </button>

          <button onClick={onAppleStore} style={storeButtonStyle}>
            <AppleIcon />
            <span>App Store</span>
          </button>
        </div>
      </header>

      <div
        style={{
          height: "2px",
          width: "100%",
          marginBottom: "12px",
          background:
            "linear-gradient(90deg, rgba(222,78,255,0.35) 0%, rgba(255,183,92,0.42) 45%, rgba(90,241,255,0.4) 100%)",
          boxShadow:
            "0 0 14px rgba(212,82,255,0.12), 0 0 10px rgba(92,240,255,0.08)",
          opacity: 0.72,
        }}
      />
    </>
  );
}