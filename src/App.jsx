import React from "react";
import bang from "./assets/Zwap_bang_3d.png";

import LandingHeader from "./components/LandingHeader";
import EarlyAccessModal from "./components/EarlyAccessModal";
import MailingListDatabase from "./components/MailingListDatabase";

import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";
import PartnersPage from "./pages/PartnersPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import GooglePlay from "./pages/GooglePlay";
import AppleStore from "./pages/AppleStore";

import PreviewPage from "./preview/PreviewPage";

import MailModal from "./app/MailModal";
import AppHome from "./app/AppHome";
import AppFooter from "./app/AppFooter";
import AppRoutes from "./app/AppRoutes";
import appStyles from "./app/appStyles";

import useAppState from "./app/useAppState";
import useAppInit from "./app/useAppInit";
import useMailModal from "./app/useMailModal";
import useEarlyAccessModal from "./app/useEarlyAccessModal";
import usePreviewUnlock from "./app/usePreviewUnlock";
import usePreviewNavigation from "./app/usePreviewNavigation";

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

  const routedPage = (
    <AppRoutes
      activePage={activePage}
      setActivePage={setActivePage}
      previewUnlocked={previewUnlocked}
      openEarlyAccessModal={openEarlyAccessModal}
      closeEarlyAccessModal={closeEarlyAccessModal}
      unlockPreview={unlockPreview}
      isModalOpen={isModalOpen}
      email={email}
      setEmail={setEmail}
      bang={bang}
      pendingPage={pendingPage}
      AboutPage={AboutPage}
      FeaturesPage={FeaturesPage}
      PartnersPage={PartnersPage}
      PrivacyPage={PrivacyPage}
      TermsPage={TermsPage}
      GooglePlay={GooglePlay}
      AppleStore={AppleStore}
      MailingListDatabase={MailingListDatabase}
      PreviewPage={PreviewPage}
      EarlyAccessModal={EarlyAccessModal}
    />
  );

  if (routedPage) {
    return routedPage;
  }

  return (
    <div className="landing-shell">
      <style>{appStyles}</style>

      <div className="landing-app">
        <LandingHeader
          onAbout={() => setActivePage("about")}
          onFeatures={() => setActivePage("features")}
          onPreview={handlePreviewNav}
          onPartners={() => setActivePage("partners")}
          onGooglePlay={() => setActivePage("google-play")}
          onAppleStore={() => setActivePage("apple-store")}
        />

        <AppHome
          openEarlyAccessModal={openEarlyAccessModal}
          setIsMailOpen={setIsMailOpen}
        />

        <AppFooter
          onPrivacy={() => setActivePage("privacy")}
          onTerms={() => setActivePage("terms")}
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