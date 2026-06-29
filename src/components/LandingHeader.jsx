import React, { useEffect, useState } from "react";
import logo from "../assets/Zwap_logo_full.png";

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
  onNews,
  onBlog,
  onFeatures,
  onPreview,
  onContact,
  onFAQ,
  onUpdates,
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
    color: "#F5F7FF",
    textDecoration: "none",
    background: "transparent",
    border: "none",
    padding: isDesktop ? "6px 4px" : "10px 8px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    textAlign: "center",
    width: isDesktop ? "auto" : "100%",
    whiteSpace: "nowrap",
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
          gap: "14px",
          padding: "14px 0 10px",
          position: "relative",
          zIndex: 3,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: isDesktop ? "center" : "flex-start",
            justifyContent: "space-between",
            gap: isDesktop ? "32px" : "12px",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              width: isDesktop ? "118px" : "96px",
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
            <Star
              style={{
                top: "10px",
                right: "4px",
                animationDelay: "0.8s",
              }}
            />
            <Star
              style={{
                bottom: "8px",
                right: "-2px",
                animationDelay: "1.4s",
              }}
            />
          </div>

          <nav
            style={
              isDesktop
                ? {
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "22px",
                    flexWrap: "nowrap",
                    overflow: "visible",
                  }
                : {
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "10px",
                    justifyItems: "stretch",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "300px",
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
