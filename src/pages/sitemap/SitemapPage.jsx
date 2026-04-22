import React from "react";

const SITEMAP_GROUPS = [
  {
    title: "Main Pages",
    items: [
      { label: "Home", routeKey: "home", href: "/" },
      { label: "About", routeKey: "about", href: "/about" },
      { label: "Features", routeKey: "features", href: "/features" },
      { label: "Partners", routeKey: "partners", href: "/partners" },
      {
        label: "Enterprise",
        routeKey: "enterprise-wellness",
        href: "/enterprise",
      },
      {
        label: "Developers",
        routeKey: "developer-portal",
        href: "/developers",
      },
      {
        label: "News Blog",
        routeKey: "blog",
        href: "/news-blog",
      },
      {
        label: "Contact",
        routeKey: "contact",
        href: "/contact",
        fallbackRouteKey: "contact",
      },
      { label: "Preview", routeKey: "preview", href: "/preview" },
      {
        label: "Early Access",
        routeKey: "early-access",
        href: "/early-access",
        fallbackRouteKey: "preview",
      },
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
      {
        label: "How ZWAP Works",
        routeKey: "how-zwap-works",
        href: "/how-zwap-works",
        fallbackRouteKey: "about",
      },
      {
        label: "Rewards System",
        routeKey: "rewards-system",
        href: "/rewards-system",
        fallbackRouteKey: "about",
      },
      {
        label: "zPts and ZWAP",
        routeKey: "zpts-and-zwap",
        href: "/zpts-and-zwap",
        fallbackRouteKey: "about",
      },
      {
        label: "Move",
        routeKey: "move",
        href: "/move",
        fallbackRouteKey: "features",
      },
      {
        label: "Play",
        routeKey: "play",
        href: "/play",
        fallbackRouteKey: "features",
      },
      {
        label: "Shop",
        routeKey: "shop",
        href: "/shop",
        fallbackRouteKey: "features",
      },
      {
        label: "Learn",
        routeKey: "learn",
        href: "/learn",
        fallbackRouteKey: "features",
      },
      {
        label: "Stream",
        routeKey: "stream",
        href: "/stream",
        fallbackRouteKey: "features",
      },
      {
        label: "Garden",
        routeKey: "garden",
        href: "/garden",
        fallbackRouteKey: "features",
      },
      {
        label: "Badges",
        routeKey: "badges",
        href: "/badges",
        fallbackRouteKey: "features",
      },
      {
        label: "Sponsor Rewards",
        routeKey: "sponsor-rewards",
        href: "/sponsor-rewards",
        fallbackRouteKey: "features",
      },
      {
        label: "Swap",
        routeKey: "swap",
        href: "/swap",
        fallbackRouteKey: "features",
      },
    ],
  },
  {
    title: "Partner / Business Pages",
    items: [
      {
        label: "Sponsor Opportunities",
        routeKey: "sponsor-opportunities",
        href: "/sponsor-opportunities",
        fallbackRouteKey: "partners",
      },
      {
        label: "Enterprise Wellness",
        routeKey: "enterprise-wellness",
        href: "/enterprise-wellness",
      },
      {
        label: "Financial Literacy Programs",
        routeKey: "financial-literacy-programs",
        href: "/financial-literacy-programs",
        fallbackRouteKey: "blog",
      },
      {
        label: "Community Partnerships",
        routeKey: "community-partnerships",
        href: "/community-partnerships",
        fallbackRouteKey: "partners",
      },
      {
        label: "Developer Portal",
        routeKey: "developer-portal",
        href: "/developer-portal",
      },
    ],
  },
  {
    title: "Content / Articles",
    items: [
      {
        label: "News Blog",
        routeKey: "blog",
        href: "/news-blog",
      },
      {
        label: "Latest Updates",
        routeKey: "latest-updates",
        href: "/latest-updates",
        fallbackRouteKey: "blog",
      },
      {
        label: "Financial Literacy",
        routeKey: "financial-literacy",
        href: "/financial-literacy",
        fallbackRouteKey: "blog",
      },
      {
        label: "Wellness and Movement",
        routeKey: "wellness-and-movement",
        href: "/wellness-and-movement",
        fallbackRouteKey: "blog",
      },
      {
        label: "Crypto Basics",
        routeKey: "crypto-basics",
        href: "/crypto-basics",
        fallbackRouteKey: "blog",
      },
      {
        label: "Rewards and Retention",
        routeKey: "rewards-and-retention",
        href: "/rewards-and-retention",
        fallbackRouteKey: "blog",
      },
      {
        label: "Sponsor News",
        routeKey: "sponsor-news",
        href: "/sponsor-news",
        fallbackRouteKey: "blog",
      },
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
    const targetRoute = item.fallbackRouteKey || item.routeKey;

    if (typeof onNavigate === "function") {
      onNavigate(targetRoute, item);
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
                        fontSize: "18px",
                        color: "rgba(245,247,255,0.42)",
                        lineHeight: 1,
                      }}
                    >
                      ›
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