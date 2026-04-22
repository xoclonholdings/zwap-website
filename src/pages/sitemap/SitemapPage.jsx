import React from "react";

const SITEMAP_GROUPS = [
  {
    title: "Main Pages",
    items: [
      { label: "Home", routeKey: "home", href: "/" },
      { label: "About", routeKey: "about", href: "/about" },
      { label: "News", routeKey: "news", href: "/news" },
      { label: "Blog", routeKey: "blog", href: "/blog" },
      { label: "Features", routeKey: "features", href: "/features" },
      { label: "Preview", routeKey: "preview", href: "/preview" },
      { label: "Partners", routeKey: "partners", href: "/partners" },
      {
        label: "Developers",
        routeKey: "developer-portal",
        href: "/developers",
      },
      {
        label: "Enterprise",
        routeKey: "enterprise-wellness",
        href: "/enterprise",
      },
    ],
  },
  {
    title: "Support & Trust",
    items: [
      { label: "Contact", routeKey: "contact", href: "/contact" },
      { label: "FAQ", routeKey: "faq", href: "/faq" },
      {
        label: "How It Works",
        routeKey: "how-it-works",
        href: "/how-it-works",
      },
      {
        label: "Early Access",
        routeKey: "early-access",
        href: "/early-access",
        fallbackRouteKey: "preview",
      },
      { label: "Privacy Policy", routeKey: "privacy", href: "/privacy" },
      { label: "Terms of Use", routeKey: "terms", href: "/terms" },
      { label: "Sitemap", routeKey: "sitemap", href: "/sitemap" },
    ],
  },
  {
    title: "ZWAP! Systems",
    items: [
      {
        label: "MOVE",
        routeKey: "features",
        href: "/move",
        fallbackRouteKey: "features",
      },
      {
        label: "PLAY",
        routeKey: "features",
        href: "/play",
        fallbackRouteKey: "features",
      },
      {
        label: "LEARN",
        routeKey: "features",
        href: "/learn",
        fallbackRouteKey: "features",
      },
      {
        label: "SHOP",
        routeKey: "features",
        href: "/shop",
        fallbackRouteKey: "features",
      },
      {
        label: "SWAP",
        routeKey: "features",
        href: "/swap",
        fallbackRouteKey: "features",
      },
      {
        label: "Garden",
        routeKey: "features",
        href: "/garden",
        fallbackRouteKey: "features",
      },
      {
        label: "Badges",
        routeKey: "features",
        href: "/badges",
        fallbackRouteKey: "features",
      },
      {
        label: "zPts & ZWAP",
        routeKey: "blog",
        href: "/zpts-and-zwap",
        fallbackRouteKey: "blog",
      },
      {
        label: "Rewards System",
        routeKey: "blog",
        href: "/rewards-system",
        fallbackRouteKey: "blog",
      },
    ],
  },
  {
    title: "Content & Education",
    items: [
      {
        label: "Latest News",
        routeKey: "news",
        href: "/news/latest",
        fallbackRouteKey: "news",
      },
      {
        label: "Platform Updates",
        routeKey: "news",
        href: "/news/platform-updates",
        fallbackRouteKey: "news",
      },
      {
        label: "Financial Literacy",
        routeKey: "blog",
        href: "/blog/financial-literacy",
        fallbackRouteKey: "blog",
      },
      {
        label: "Wellness & Movement",
        routeKey: "blog",
        href: "/blog/wellness-and-movement",
        fallbackRouteKey: "blog",
      },
      {
        label: "Crypto Basics",
        routeKey: "blog",
        href: "/blog/crypto-basics",
        fallbackRouteKey: "blog",
      },
      {
        label: "Rewards & Progression",
        routeKey: "blog",
        href: "/blog/rewards-and-progression",
        fallbackRouteKey: "blog",
      },
      {
        label: "Partner News",
        routeKey: "news",
        href: "/news/partner-news",
        fallbackRouteKey: "news",
      },
      {
        label: "Sponsor News",
        routeKey: "news",
        href: "/news/sponsor-news",
        fallbackRouteKey: "news",
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
    <div>{/* keep rest of your existing component exactly the same */}</div>
  );
}