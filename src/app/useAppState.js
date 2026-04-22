import { useEffect, useMemo, useState } from "react";

const PATH_TO_PAGE = {
  "/": "home",
  "/about": "about",
  "/news": "news",
  "/blog": "blog",
  "/features": "features",
  "/preview": "preview",
  "/partners": "partners",
  "/developers": "developer-portal",
  "/developer-portal": "developer-portal",
  "/enterprise": "enterprise-wellness",
  "/enterprise-wellness": "enterprise-wellness",
  "/contact": "contact",
  "/faq": "faq",
  "/how-it-works": "how-it-works",
  "/privacy": "privacy",
  "/terms": "terms",
  "/sitemap": "sitemap",
  "/google-play": "google-play",
  "/apple-store": "apple-store",
  "/mailing-list": "mailing-list",
  "/admin": "admin",
};

const PAGE_TO_PATH = {
  home: "/",
  about: "/about",
  news: "/news",
  blog: "/blog",
  features: "/features",
  preview: "/preview",
  partners: "/partners",
  "developer-portal": "/developers",
  "enterprise-wellness": "/enterprise",
  contact: "/contact",
  faq: "/faq",
  "how-it-works": "/how-it-works",
  privacy: "/privacy",
  terms: "/terms",
  sitemap: "/sitemap",
  "google-play": "/google-play",
  "apple-store": "/apple-store",
  "mailing-list": "/mailing-list",
  admin: "/admin",
};

function getPageFromPath() {
  if (typeof window === "undefined") return "home";

  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  return PATH_TO_PAGE[pathname] || "home";
}

export default function useAppState() {
  const [activePageState, setActivePageState] = useState(getPageFromPath);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingPage, setPendingPage] = useState(null);

  const [email, setEmail] = useState("");
  const [previewUnlocked, setPreviewUnlocked] = useState(false);

  const [referralCode, setReferralCode] = useState("");
  const [referredBy, setReferredBy] = useState("");

  useEffect(() => {
    const handlePopState = () => {
      setActivePageState(getPageFromPath());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const setActivePage = useMemo(() => {
    return (nextPage) => {
      setActivePageState((currentPage) => {
        const resolvedPage =
          typeof nextPage === "function" ? nextPage(currentPage) : nextPage;

        const nextPath = PAGE_TO_PATH[resolvedPage] || "/";

        if (typeof window !== "undefined") {
          const currentPath =
            window.location.pathname.replace(/\/+$/, "") || "/";

          if (currentPath !== nextPath) {
            window.history.pushState({}, "", nextPath);
          }
        }

        return resolvedPage;
      });
    };
  }, []);

  return {
    activePage: activePageState,
    setActivePage,

    isModalOpen,
    setIsModalOpen,

    pendingPage,
    setPendingPage,

    email,
    setEmail,

    previewUnlocked,
    setPreviewUnlocked,

    referralCode,
    setReferralCode,

    referredBy,
    setReferredBy,
  };
}