import React from "react";
import logo from "./assets/Zwap_logo_full.png";
import googlePlayLogo from "./assets/google_play_logo.PNG";

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
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
        fontSize: "12px",
        textShadow: "0 0 10px rgba(255,255,255,0.9)",
        animation: "twinkle 3s ease-in-out infinite",
        ...style,
      }}
    >
      ✦
    </div>
  );
}

export default function LandingHeader() {
  return (
    <>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 0 10px",
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* LOGO */}
        <div style={{ position: "relative", width: "110px" }}>
          <img
            src={logo}
            alt="ZWAP!"
            style={{ width: "100%", display: "block" }}
          />
          <Star style={{ top: "-4px", left: "6px" }} />
          <Star style={{ top: "6px", right: "6px", animationDelay: "0.8s" }} />
        </div>

        {/* NAV (DESKTOP ONLY FEEL, WE'LL ADAPT NEXT STEP) */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <a href="#" style={{ color: "#F5F7FF", textDecoration: "none" }}>
            About
          </a>
          <a href="#" style={{ color: "#F5F7FF", textDecoration: "none" }}>
            Features
          </a>

          {/* GOOGLE PLAY */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 12px",
              borderRadius: "999px",
              border: "1px solid rgba(174, 132, 255, 0.35)",
              background: "rgba(255,255,255,0.02)",
              color: "#FFFFFF",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            <img
              src={googlePlayLogo}
              alt="Google Play"
              style={{ width: "16px" }}
            />
            Play
          </button>

          {/* APPLE */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 12px",
              borderRadius: "999px",
              border: "1px solid rgba(174, 132, 255, 0.35)",
              background: "rgba(255,255,255,0.02)",
              color: "#FFFFFF",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            <AppleIcon />
            iOS
          </button>
        </nav>
      </header>

      {/* GRADIENT LINE */}
      <div
        style={{
          height: "2px",
          width: "100%",
          marginBottom: "12px",
          background:
            "linear-gradient(90deg, rgba(222,78,255,0.35), rgba(255,183,92,0.4), rgba(90,241,255,0.4))",
          opacity: 0.7,
        }}
      />
    </>
  );
}