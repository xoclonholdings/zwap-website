import React from "react";

const SITEMAP_GROUPS = [
  {
    title: "Main Pages",
    items: [
      { label: "Home", routeKey: "home", href: "/" },
      { label: "About", routeKey: "about", href: "/about" },
      { label: "Features", routeKey: "features", href: "/features" },
      { label: "Partners", routeKey: "partners", href: "/partners" },
      { label: "Contact", routeKey: "contact", href: "/contact", comingSoon: true },
      { label: "Preview", routeKey: "preview", href: "/preview" },
      { label: "Early Access", routeKey: "early-access", href: "/early-access", comingSoon: true },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", routeKey: "privacy", href: "/privacy" },
      { label: "Terms of Use", routeKey: "terms", href: "/terms" },
    ],
  },
  {
    title: "Product / System Pages",
    items: [
      { label: "How ZWAP Works", routeKey: "how-zwap-works", href: "/how-zwap-works", comingSoon: true },
      { label: "Rewards System", routeKey: "rewards-system", href: "/rewards-system", comingSoon: true },
      { label: "zPts and ZWAP", routeKey: "zpts-and-zwap", href: "/zpts-and-zwap", comingSoon: true },
      { label: "Move", routeKey: "move", href: "/move", comingSoon: true },
      { label: "Play", routeKey: "play", href: "/play", comingSoon: true },
      { label: "Shop", routeKey: "shop", href: "/shop", comingSoon: true },
      { label: "Learn", routeKey: "learn", href: "/learn", comingSoon: true },
      { label: "Stream", routeKey: "stream", href: "/stream", comingSoon: true },
      { label: "Garden", routeKey: "garden", href: "/garden", comingSoon: true },
      { label: "Badges", routeKey: "badges", href: "/badges", comingSoon: true },
      { label: "Sponsor Rewards", routeKey: "sponsor-rewards", href: "/sponsor-rewards", comingSoon: true },
      { label: "Swap", routeKey: "swap", href: "/swap", comingSoon: true },
    ],
  },
  {
    title: "Partner / Business Pages",
    items: [
      { label: "Sponsor Opportunities", routeKey: "sponsor-opportunities", href: "/sponsor-opportunities", comingSoon: true },
      { label: "Enterprise Wellness", routeKey: "enterprise-wellness", href: "/enterprise-wellness", comingSoon: true },
      { label: "Financial Literacy Programs", routeKey: "financial-literacy-programs", href: "/financial-literacy-programs", comingSoon: true },
      { label: "Community Partnerships", routeKey: "community-partnerships", href: "/community-partnerships", comingSoon: true },
      { label: "Developer Portal", routeKey: "developer-portal", href: "/developer-portal", comingSoon: true },
    ],
  },
  {
    title: "Content / Articles",
    items: [
      { label: "Blog", routeKey: "blog", href: "/blog", comingSoon: true },
      { label: "Latest Updates", routeKey: "latest-updates", href: "/latest-updates", comingSoon: true },
      { label: "Financial Literacy", routeKey: "financial-literacy", href: "/financial-literacy", comingSoon: true },
      { label: "Wellness and Movement", routeKey: "wellness-and-movement", href: "/wellness-and-movement", comingSoon: true },
      { label: "Crypto Basics", routeKey: "crypto-basics", href: "/crypto-basics", comingSoon: true },
      { label: "Rewards and Retention", routeKey: "rewards-and-retention", href: "/rewards-and-retention", comingSoon: true },
      { label: "Sponsor News", routeKey: "sponsor-news", href: "/sponsor-news", comingSoon: true },
    ],
  },
];

function BackArrowIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function SitemapIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v5" />
      <path d="M6 11h12" />
      <path d="M6 11v4" />
      <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M18 11v4" />
      <path d="M12 11v4" />
    </svg>
  );
}

export default function SitemapPage({ onBack, onNavigate }) {
  const handleItemClick = (item) => {
    if (typeof onNavigate === "function") {
      onNavigate(item.routeKey, item);
      return;
    }

    if (typeof window !== "undefined" && item.href) {
      window.location.href = item.href;
    }
  };

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: `
          radial-gradient(circle at 72% 22%, rgba(204, 91, 255, 0.10), transparent 16%),
          radial-gradient(circle at 18% 28%, rgba(88, 240, 255, 0.08), transparent 14%),
          radial-gradient(circle at 55% 62%, rgba(255, 176, 86, 0.05), transparent 12%),
          linear-gradient(180deg, #030308 0%, #080913 58%, #04050A 100%)
        `,
        color: "#F5F7FF",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          minHeight: "100dvh",
          padding:
            "calc(env(safe-area-inset-top, 0px) + 14px) 16px calc(env(safe-area-inset-bottom, 0px) + 28px)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "18px",
          }}
        >
          <button
            type="button"
            onClick={onBack}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "none",
              background: "transparent",
              color: "rgba(245,247,255,0.76)",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              padding: 0,
            }}
          >
            <BackArrowIcon />
            <span>Back</span>
          </button>

          <div
            style={{
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(245,247,255,0.56)",
            }}
          >
            Sitemap
          </div>

          <div style={{ width: "58px" }} />
        </div>

        <section
          style={{
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "66px",
              height: "66px",
              margin: "0 auto 14px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#67F2FF",
              background: "rgba(103,242,255,0.10)",
              border: "1px solid rgba(103,242,255,0.18)",
              boxShadow: "0 0 20px rgba(103,242,255,0.10)",
            }}
          >
            <SitemapIcon />
          </div>

          <h1
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(34px, 10vw, 48px)",
              lineHeight: 1.02,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#F9FBFF",
            }}
          >
            Sitemap
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "420px",
              fontSize: "15px",
              lineHeight: 1.65,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            Explore every section of the ZWAP! ecosystem.
          </p>
        </section>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "16px",
          }}
        >
          {SITEMAP_GROUPS.map((group) => (
            <section
              key={group.title}
              style={{
                borderRadius: "26px",
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(14,16,30,0.92) 0%, rgba(8,10,22,0.96) 100%)",
                boxShadow:
                  "0 18px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)",
                padding: "18px 16px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 900,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(245,247,255,0.52)",
                  marginBottom: "14px",
                }}
              >
                {group.title}
              </div>

              <div
                style={{
                  display: "grid",
                  gap: "10px",
                }}
              >
                {group.items.map((item) => (
                  <button
                    key={item.routeKey}
                    type="button"
                    onClick={() => handleItemClick(item)}
                    style={{
                      width: "100%",
                      borderRadius: "18px",
                      border: "1px solid rgba(255,255,255,0.07)",
                      background: "rgba(255,255,255,0.025)",
                      padding: "14px 14px",
                      cursor: "pointer",
                      color: "#F8FAFF",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      transition: "transform 160ms ease, border-color 160ms ease, background 160ms ease",
                      WebkitTapHighlightColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-1px)";
                      e.currentTarget.style.borderColor = "rgba(180,134,255,0.22)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                    }}
                    onTouchStart={(e) => {
                      e.currentTarget.style.transform = "scale(0.995)";
                    }}
                    onTouchEnd={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <span
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.35,
                        fontWeight: 700,
                        color: "rgba(248,250,255,0.92)",
                      }}
                    >
                      {item.label}
                    </span>

                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        flexShrink: 0,
                      }}
                    >
                      {item.comingSoon ? (
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 900,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            padding: "7px 10px",
                            borderRadius: "999px",
                            color: "#B486FF",
                            background: "rgba(180,134,255,0.10)",
                            border: "1px solid rgba(180,134,255,0.16)",
                          }}
                        >
                          Coming Soon
                        </span>
                      ) : null}

                      <span
                        style={{
                          fontSize: "18px",
                          color: "rgba(245,247,255,0.42)",
                          lineHeight: 1,
                        }}
                      >
                        ›
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer
          style={{
            marginTop: "22px",
            paddingTop: "18px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              maxWidth: "560px",
              marginInline: "auto",
              fontSize: "14px",
              lineHeight: 1.65,
              color: "rgba(236,240,255,0.68)",
            }}
          >
            ZWAP! is a movement-first progression ecosystem built around action,
            consistency, and controlled value.
          </p>
        </footer>
      </div>
    </div>
  );
}