import { useEffect } from "react";

const PAGE_META = {
  home: {
    title: "ZWAP! | Discovery App",
    description:
      "ZWAP! is a Discovery App built around curiosity, movement, play, education, sound, reward, and reflection.",
  },
  about: {
    title: "About ZWAP! | Discovery App",
    description:
      "Learn what ZWAP! is, why it exists, who it is for, and how the platform helps people explore through action.",
  },
  news: {
    title: "ZWAP! News | Announcements and Launch Notes",
    description:
      "Read ZWAP! news, announcements, launch communication, milestones, and platform updates.",
  },
  blog: {
    title: "ZWAP! Blog | Discovery, Wholeness, and Progress",
    description:
      "Read ZWAP! blog content on discovery, wholeness, movement, play, education, rewards, and platform building.",
  },
  features: {
    title: "ZWAP! Features | Discover, Move, Play, Learn, Stream, Shop",
    description:
      "Explore the ZWAP! experience: Discover, Move, Play, Learn, Stream, and Shop.",
  },
  partners: {
    title: "ZWAP! Partners | Support the ZWAP! Ecosystem",
    description:
      "Learn how partners can support ZWAP! through responsible campaigns, rewards, learning, movement, and community programs.",
  },
  "enterprise-wellness": {
    title: "ZWAP! Enterprise | Engagement Programs",
    description:
      "Learn how ZWAP! can support organizations through discovery, movement, learning, engagement, and responsible rewards.",
  },
  "developer-portal": {
    title: "ZWAP! Developers | Build for the ZWAP! Ecosystem",
    description:
      "Explore future developer opportunities for games, learning tools, integrations, and discovery-compatible experiences.",
  },
  contact: {
    title: "Contact ZWAP! | Support and Inquiries",
    description:
      "Contact ZWAP! for support, partners, enterprise, developers, media, and business inquiries.",
  },
  faq: {
    title: "ZWAP! FAQs | Questions and Answers",
    description:
      "Get answers about ZWAP!, Discovery Apps, zPts, ZWAP, rewards, Shop, Preview, privacy, and platform access.",
  },
  "how-it-works": {
    title: "ZWAP! Updates | Stay Connected",
    description:
      "Stay connected with ZWAP! updates, mailing list access, launch notes, roadmap progress, and platform communication.",
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
    title: "ZWAP! Preview | Early Access",
    description:
      "Enter the ZWAP! preview and explore the platform before public launch.",
  },
  "google-play": {
    title: "ZWAP! on Google Play | Coming Soon",
    description:
      "Stay updated on the upcoming Google Play release for ZWAP! and early access to the Discovery App experience.",
  },
  "apple-store": {
    title: "ZWAP! on the App Store | Coming Soon",
    description:
      "Stay updated on the upcoming App Store release for ZWAP! and early access to the Discovery App experience.",
  },
  admin: {
    title: "ZWAP! Admin | Content Management",
    description:
      "Administrative area for managing ZWAP! content, updates, announcements, and publishing workflows.",
  },
  "mailing-list": {
    title: "ZWAP! Updates | Mailing List",
    description:
      "Join the ZWAP! mailing list for launch updates, blog posts, news, and platform communication.",
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
