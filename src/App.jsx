import React from "react";
import bang from "./assets/Zwap_bang_3d.png";

import LandingHeader from "./components/LandingHeader";
import EarlyAccessModal from "./components/EarlyAccessModal";
import GlobalFooterLinks from "./components/GlobalFooterLinks";

import MailModal from "./app/MailModal";
import AppHome from "./app/AppHome";
import AppRoutes from "./app/AppRoutes";
import appStyles from "./app/appStyles";

import useAppState from "./app/useAppState";
import useAppInit from "./app/useAppInit";
import useMailModal from "./app/useMailModal";
import useEarlyAccessModal from "./app/useEarlyAccessModal";
import usePreviewUnlock from "./app/usePreviewUnlock";
import usePreviewNavigation from "./app/usePreviewNavigation";
import usePageMeta from "./app/usePageMeta";

export default function App() {
  const {
    activePage,
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
  } = useAppState();

  usePageMeta(activePage);

  const {
    isMailOpen,
    setIsMailOpen,
    mailSubject,
    setMailSubject,
    mailMessage,
    setMailMessage,
  } = useMailModal();

  useAppInit({
    setReferralCode,
    setPreviewUnlocked,
    setEmail,
    setReferredBy,
  });

  const { openEarlyAccessModal, closeEarlyAccessModal } = useEarlyAccessModal({
    setPendingPage,
    setIsModalOpen,
  });

  const unlockPreview = usePreviewUnlock({
    email,
    referralCode,
    referredBy,
    pendingPage,
    setPreviewUnlocked,
    setIsModalOpen,
    setActivePage,
    setPendingPage,
  });

  const handlePreviewNav = usePreviewNavigation({
    previewUnlocked,
    setActivePage,
    openEarlyAccessModal,
  });

  const handleSendInvite = async ({ referralCode, friendEmail }) => {
    const trimmedCode = String(referralCode || "").trim();
    const trimmedEmail = String(friendEmail || "").trim().toLowerCase();

    if (!trimmedCode || !trimmedEmail) {
      alert("Enter your referral code and a friend's email.");
      return;
    }

    try {
      const response = await fetch("/.netlify/functions/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: trimmedEmail,
          referredBy: trimmedCode,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Failed to send referral invite");
      }

      alert(`Invite sent to ${trimmedEmail}`);
    } catch (error) {
      console.error("Referral invite error:", error);
      alert(error.message || "Failed to send referral invite");
    }
  };

  const routeContent = (
    <AppRoutes
      activePage={activePage}
      setActivePage={setActivePage}
      setIsMailOpen={setIsMailOpen}
      previewUnlocked={previewUnlocked}
      openEarlyAccessModal={openEarlyAccessModal}
      closeEarlyAccessModal={closeEarlyAccessModal}
      unlockPreview={unlockPreview}
      isModalOpen={isModalOpen}
      email={email}
      setEmail={setEmail}
      bang={bang}
      pendingPage={pendingPage}
      referralCode={referralCode}
      onSendInvite={handleSendInvite}
    />
  );

  if (activePage !== "home") {
    return routeContent;
  }

  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 900 : false;

  return (
    <div className="landing-shell">
      <style>{appStyles}</style>

      <div className="landing-app">
        <LandingHeader
          onAbout={() => setActivePage("about")}
          onNews={() => setActivePage("news")}
          onBlog={() => setActivePage("blog")}
          onFeatures={() => setActivePage("features")}
          onPreview={handlePreviewNav}
          onPartners={() => setActivePage("partners")}
          onDevelopers={() => setActivePage("developer-portal")}
          onEnterprise={() => setActivePage("enterprise-wellness")}
          onGooglePlay={() => setActivePage("google-play")}
          onAppleStore={() => setActivePage("apple-store")}
        />

        <AppHome
          openEarlyAccessModal={openEarlyAccessModal}
          setIsMailOpen={setIsMailOpen}
          onNews={() => setActivePage("news")}
          onBlog={() => setActivePage("blog")}
        />

        <GlobalFooterLinks
          isDesktop={isDesktop}
          onPrivacy={() => setActivePage("privacy")}
          onTerms={() => setActivePage("terms")}
          onSitemap={() => setActivePage("sitemap")}
          onNews={() => setActivePage("news")}
          onBlog={() => setActivePage("blog")}
          onAbout={() => setActivePage("about")}
          onFeatures={() => setActivePage("features")}
          onPartners={() => setActivePage("partners")}
          onDevelopers={() => setActivePage("developer-portal")}
          onEnterprise={() => setActivePage("enterprise-wellness")}
          onContact={() => setActivePage("contact")}
          onFAQ={() => setActivePage("faq")}
          onHowItWorks={() => setActivePage("how-it-works")}
        />

        <EarlyAccessModal
          isOpen={isModalOpen}
          onClose={closeEarlyAccessModal}
          email={email}
          setEmail={setEmail}
          bang={bang}
          onSubmitAccess={unlockPreview}
          onInstantAccess={unlockPreview}
          pendingPage={pendingPage}
        />

        <MailModal
          isOpen={isMailOpen}
          onClose={() => setIsMailOpen(false)}
          subject={mailSubject}
          setSubject={setMailSubject}
          message={mailMessage}
          setMessage={setMailMessage}
        />
      </div>
    </div>
  );
}