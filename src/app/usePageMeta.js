import { useEffect } from "react";

const PAGE_META = {
  home: {
    title: "ZWAP! | Move. Play. Earn Today.",
    description:
      "Move. Play. Earn Today. Lock in early access to the ZWAP! preview and explore a behavior-based rewards system built around progression.",
    path: "/",
  },
  about: {
    title: "About ZWAP! | Movement-First Rewards Ecosystem",
    description:
      "Learn what ZWAP! is, how movement, play, progression, zPts, and ZWAP fit together, and why the system is built around delayed value.",
    path: "/about",
  },
  news: {
    title: "ZWAP! News | Platform Updates and Announcements",
    description:
      "Read the latest ZWAP! platform updates, launch communication, ecosystem milestones, sponsor news, and rollout visibility.",
    path: "/news",
  },
  blog: {
    title: "ZWAP! Blog | Rewards, Financial Literacy, and Movement",
    description:
      "Explore ZWAP! blog content covering rewards, progression, movement, crypto basics, financial literacy, and platform education.",
    path: "/blog",
  },
  features: {
    title: "ZWAP! Features | MOVE, PLAY, SHOP, SWAP, and More",
    description:
      "Explore the ZWAP! feature set, including MOVE, PLAY, SHOP, SWAP, Learn, and the broader reward ecosystem.",
    path: "/features",
  },
  partners: {
    title: "ZWAP! Partners | Sponsors and Collaboration Opportunities",
    description:
      "Discover how sponsors, brands, and collaborators can partner with ZWAP! across movement, rewards, campaigns, and ecosystem growth.",
    path: "/partners",
  },
  "enterprise-wellness": {
    title: "ZWAP! Enterprise | Workplace Wellness and Engagement",
    description:
      "Learn how ZWAP! plans to support enterprise wellness, workforce engagement, structured incentives, and measurable participation systems.",
    path: "/enterprise",
  },
  "developer-portal": {
    title: "ZWAP! Developers | Developer Portal and V2 Expansion",
    description:
      "Explore the future ZWAP! Developer Portal for game submissions, integrations, reward-compatible experiences, and ecosystem expansion.",
    path: "/developers",
  },
  contact: {
    title: "Contact ZWAP! | Support, Partners, Enterprise, Developers",
    description:
      "Contact ZWAP! for support, sponsor opportunities, enterprise wellness, developer questions, media, and business inquiries.",
    path: "/contact",
  },
  faq: {
    title: "ZWAP! FAQ | Questions About Rewards, zPts, and ZWAP",
    description:
      "Get answers about ZWAP!, zPts, delayed rewards, movement, Shop, Swap, sponsors, enterprise wellness, and developers.",
    path: "/faq",
  },
  "how-it-works": {
    title: "How ZWAP! Works | Move, Progress, Unlock",
    description:
      "See how ZWAP! turns movement, play, learning, and engagement into progression, zPts, controlled ZWAP unlocks, and ecosystem utility.",
    path: "/how-it-works",
  },
  privacy: {
    title: "Privacy Policy | ZWAP!",
    description:
      "Read the ZWAP! Privacy Policy and learn how user information, platform activity, and related data are handled.",
    path: "/privacy",
  },
  terms: {
    title: "Terms of Use | ZWAP!",
    description:
      "Review the ZWAP! Terms of Use for access, platform rules, and general terms governing the site and ecosystem.",
    path: "/terms",
  },
  sitemap: {
    title: "Sitemap | ZWAP!",
    description:
      "Browse the ZWAP! sitemap to explore platform pages, support pages, content hubs, and ecosystem sections.",
    path: "/sitemap",
  },
  preview: {
    title: "ZWAP! Preview | Early Access Experience",
    description:
      "Preview the ZWAP! experience and explore early access to a movement-first rewards ecosystem built around progression and delayed value.",
    path: "/preview",
  },
};

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setPropertyMeta(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

export default function usePageMeta(activePage) {
  useEffect(() => {
    const meta = PAGE_META[activePage] || PAGE_META.home;
    const absoluteUrl = `https://zwap.online${meta.path}`;

    document.title = meta.title;

    setMeta("description", meta.description);

    setPropertyMeta("og:type", "website");
    setPropertyMeta("og:url", absoluteUrl);
    setPropertyMeta("og:title", meta.title);
    setPropertyMeta("og:description", meta.description);
    setPropertyMeta("og:image", "https://zwap.online/website_preview.PNG");
    setPropertyMeta("og:image:alt", "ZWAP! website preview");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:url", absoluteUrl);
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setMeta("twitter:image", "https://zwap.online/website_preview.PNG");
    setMeta("twitter:site", "@ZWAP_Online");
    setMeta("twitter:creator", "@ZWAP_Online");

    setCanonical(absoluteUrl);
  }, [activePage]);
}