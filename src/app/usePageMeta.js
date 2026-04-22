import { useEffect } from "react";

const PAGE_META = {
  home: {
    title: "ZWAP! | Move. Play. Earn Today.",
    description:
      "Move. Play. Earn Today. Lock in early access to the ZWAP! preview and explore a behavior-based rewards system built around progression.",
  },
  about: {
    title: "About ZWAP! | Movement-First Rewards Ecosystem",
    description:
      "Learn what ZWAP! is, how movement, play, progression, zPts, and ZWAP fit together, and why the system is built around delayed value.",
  },
  news: {
    title: "ZWAP! News | Platform Updates and Announcements",
    description:
      "Read the latest ZWAP! platform updates, launch communication, ecosystem milestones, sponsor news, and rollout visibility.",
  },
  blog: {
    title: "ZWAP! Blog | Rewards, Financial Literacy, and Movement",
    description:
      "Explore ZWAP! blog content covering rewards, progression, movement, crypto basics, financial literacy, and platform education.",
  },
  features: {
    title: "ZWAP! Features | MOVE, PLAY, SHOP, SWAP, and More",
    description:
      "Explore the ZWAP! feature set, including MOVE, PLAY, SHOP, SWAP, Learn, and the broader reward ecosystem.",
  },
  partners: {
    title: "ZWAP! Partners | Sponsors and Collaboration Opportunities",
    description:
      "Discover how sponsors, brands, and collaborators can partner with ZWAP! across movement, rewards, campaigns, and ecosystem growth.",
  },
  "enterprise-wellness": {
    title: "ZWAP! Enterprise | Workplace Wellness and Engagement",
    description:
      "Learn how ZWAP! plans to support enterprise wellness, workforce engagement, structured incentives, and measurable participation systems.",
  },
  "developer-portal": {
    title: "ZWAP! Developers | Developer Portal and V2 Expansion",
    description:
      "Explore the future ZWAP! Developer Portal for game submissions, integrations, reward-compatible experiences, and ecosystem expansion.",
  },
  contact: {
    title: "Contact ZWAP! | Support, Partners, Enterprise, Developers",
    description:
      "Contact ZWAP! for support, sponsor opportunities, enterprise wellness, developer questions, media, and business inquiries.",
  },
  faq: {
    title: "ZWAP! FAQ | Questions About Rewards, zPts, and ZWAP",
    description:
      "Get answers about ZWAP!, zPts, delayed rewards, movement, Shop, Swap, sponsors, enterprise wellness, and developers.",
  },
  "how-it-works": {
    title: "How ZWAP! Works | Move, Progress, Unlock",
    description:
      "See how ZWAP! turns movement, play, learning, and engagement into progression, zPts, controlled ZWAP unlocks, and ecosystem utility.",
  },
  privacy: {
    title: "Privacy Policy | ZWAP!",
    description:
      "Read the ZWAP! Privacy Policy and learn how user information, platform activity, and related data are handled.",
  },
  terms: {
    title: "Terms of Use | ZWAP!",
    description:
      "Review the ZWAP! Terms of Use for access, platform rules, and general terms governing the site and ecosystem.",
  },
  sitemap: {
    title: "Sitemap | ZWAP!",
    description:
      "Browse the ZWAP! sitemap to explore platform pages, support pages, content hubs, and ecosystem sections.",
  },
  preview: {
    title: "ZWAP! Preview | Early Access Experience",
    description:
      "Preview the ZWAP! experience and explore early access to a movement-first rewards ecosystem built around progression and delayed value.",
  },
  "google-play": {
    title: "ZWAP! on Google Play | Coming Soon",
    description:
      "Stay updated on the upcoming Google Play release for ZWAP! and early access to the movement-first rewards ecosystem.",
  },
  "apple-store": {
    title: "ZWAP! on the App Store | Coming Soon",
    description:
      "Stay updated on the upcoming App Store release for ZWAP! and early access to the movement-first rewards ecosystem.",
  },
  admin: {
    title: "ZWAP! Admin | Content Management",
    description:
      "Administrative area for managing ZWAP! content, updates, announcements, and publishing workflows.",
  },
  "mailing-list": {
    title: "ZWAP! Mailing List | Stay Updated",
    description:
      "Join the ZWAP! mailing list for product updates, launch announcements, blog posts, and ecosystem news.",
  },
};

function upsertMetaByName(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertCanonical(url) {
  let tag = document.querySelector('link[rel="canonical"]');

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", url);
}

export default function usePageMeta(activePage) {
  useEffect(() => {
    const meta = PAGE_META[activePage] || PAGE_META.home;
    const pathname =
      typeof window !== "undefined" ? window.location.pathname : "/";
    const absoluteUrl = `https://zwap.online${pathname || "/"}`;

    document.title = meta.title;

    upsertMetaByName("description", meta.description);

    upsertMetaByProperty("og:type", "website");
    upsertMetaByProperty("og:url", absoluteUrl);
    upsertMetaByProperty("og:title", meta.title);
    upsertMetaByProperty("og:description", meta.description);
    upsertMetaByProperty(
      "og:image",
      "https://zwap.online/website_preview.PNG"
    );
    upsertMetaByProperty("og:image:alt", "ZWAP! website preview");

    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:url", absoluteUrl);
    upsertMetaByName("twitter:title", meta.title);
    upsertMetaByName("twitter:description", meta.description);
    upsertMetaByName(
      "twitter:image",
      "https://zwap.online/website_preview.PNG"
    );
    upsertMetaByName("twitter:site", "@ZWAP_Online");
    upsertMetaByName("twitter:creator", "@ZWAP_Online");

    upsertCanonical(absoluteUrl);

    if (typeof window !== "undefined") {
      window.prerenderReady = true;
    }
  }, [activePage]);
}