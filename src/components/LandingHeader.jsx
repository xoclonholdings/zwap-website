import React, { useEffect, useState } from "react";
import logo from "../assets/Zwap_logo_full.png";
import googlePlayLogo from "../assets/google_play_logo.PNG";

function AppleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
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
        fontSize: "10px",
        lineHeight: 1,
        textShadow: "0 0 10px rgba(255,255,255,0.86)",
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
  onNews,
  onBlog,
  onFeatures,
  onPreview,
  onContact,
  onFAQ,
  onUpdates,
  onGooglePlay,
  onAppleStore,
}) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkStyle = {
    color: "rgba(245,247,255,0.88)",
    textDecoration: "none",
    background: "transparent",
    border: "none",
    padding: isDesktop ? "8px 4px" : "8px 6px",
    cursor: "pointer",
    fontFamily:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
    fontSize: isDesktop ? "11px" : "13px",
    fontWeight: 900,
    letterSpacing: isDesktop ? "0.16em" : "0.18em",
    textTransform: "uppercase",
    textAlign: "center",
    width: isDesktop ? "auto" : "100%",
    whiteSpace: "nowrap",
    textShadow: "0 0 16px rgba(255,255,255,0.08)",
  };

  const storeButtonStyle = {
    flex: 1,
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    padding: isDesktop ? "12px 18px" : "12px 13px",
    borderRadius: "999px",
    border: "1px solid rgba(174, 132, 255, 0.46)",
    background:
      "linear-gradient(180deg, rgba(20,22,39,0.90) 0%, rgba(8,10,22,0.98) 100%)",
    color: "#FFFFFF",
    cursor: "pointer",
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontSize: isDesktop ? "14px" : "15px",
    fontWeight: 800,
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.09), 0 10px 24px rgba(0,0,0,0.26), 0 0 22px rgba(126,78,255,0.10)",
  };

  const dropdownStyle = {
    position: isDesktop ? "absolute" : "static",
    top: "calc(100% + 8px)",
    right: 0,
    zIndex: 12,
    minWidth: isDesktop ? "170px" : "100%",
    borderRadius: "18px",
    border: "1px solid rgba(174,132,255,0.24)",
    background:
      "linear-gradient(180deg, rgba(18,20,38,0.98) 0%, rgba(8,10,22,0.98) 100%)",
    boxShadow:
      "0 18px 36px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.06)",
    padding: "10px",
    display: "grid",
    gap: "6px",
  };

  const dropdownButtonStyle = {
    ...linkStyle,
    width: "100%",
    padding: "10px 12px",
    textAlign: isDesktop ? "left" : "center",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.035)",
  };

  const closeMenu = () => setOpenMenu(null);

  const handleClick = (callback) => {
    closeMenu();
    if (callback) callback();
  };

  const navGroups = [
    {
      label: "Explore",
      key: "explore",
      items: [
        { label: "About", onClick: onAbout },
        { label: "Features", onClick: onFeatures },
        { label: "Contact", onClick: onContact },
        { label: "FAQs", onClick: onFAQ },
      ],
    },
    {
      label: "Connect",
      key: "connect",
      items: [
        { label: "News", onClick: onNews },
        { label: "Blog", onClick: onBlog },
        { label: "Updates", onClick: onUpdates },
      ],
    },
  ];

  return (
    <>
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isDesktop ? "18px" : "16px",
          padding: isDesktop ? "18px 0 14px" : "10px 0 12px",
          position: "relative",
          zIndex: 3,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "auto 1fr" : "118px 1fr",
            alignItems: "start",
            gap: isDesktop ? "36px" : "16px",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              width: isDesktop ? "124px" : "112px",
              flexShrink: 0,
              marginTop: isDesktop ? "0" : "2px",
            }}
          >
            <img
              src={logo}
              alt="ZWAP!"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "drop-shadow(0 0 16px rgba(103,242,255,0.10))",
              }}
            />

            <Star style={{ top: "-6px", left: "6px" }} />
            <Star
              style={{
                top: "11px",
                right: "4px",
                animationDelay: "0.8s",
              }}
            />
            <Star
              style={{
                bottom: "5px",
                right: "-4px",
                animationDelay: "1.4s",
              }}
            />
          </div>

          <nav
            style={
              isDesktop
                ? {
                    minWidth: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "28px",
                    flexWrap: "nowrap",
                    overflow: "visible",
                  }
                : {
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "16px",
                    justifyItems: "center",
                    alignItems: "center",
                    width: "100%",
                    paddingTop: "8px",
                  }
            }
          >
            {navGroups.map((group) => (
              <div
                key={group.key}
                onMouseEnter={() => isDesktop && setOpenMenu(group.key)}
                onMouseLeave={() => isDesktop && setOpenMenu(null)}
                style={{
                  position: "relative",
                  width: isDesktop ? "auto" : "100%",
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu(openMenu === group.key ? null : group.key)
                  }
                  style={linkStyle}
                >
                  {group.label}
                </button>

                {openMenu === group.key ? (
                  <div style={dropdownStyle}>
                    {group.items.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => handleClick(item.onClick)}
                        style={dropdownButtonStyle}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}

            <button type="button" onClick={onPreview} style={linkStyle}>
              Preview
            </button>
          </nav>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            width: "100%",
            marginTop: isDesktop ? "2px" : "6px",
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
          marginBottom: "16px",
          background:
            "linear-gradient(90deg, rgba(222,78,255,0.50) 0%, rgba(255,183,92,0.40) 45%, rgba(90,241,255,0.52) 100%)",
          boxShadow:
            "0 0 14px rgba(212,82,255,0.16), 0 0 12px rgba(92,240,255,0.12)",
          opacity: 0.84,
        }}
      />
    </>
  );
}
