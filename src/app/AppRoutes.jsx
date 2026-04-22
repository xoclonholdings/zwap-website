import AboutPage from "../pages/AboutPage";
import FeaturesPage from "../pages/FeaturesPage";
import PartnersPage from "../pages/PartnersPage";
import PrivacyPage from "../pages/PrivacyPage";
import TermsPage from "../pages/TermsPage";
import GooglePlay from "../pages/GooglePlay";
import AppleStore from "../pages/AppleStore";
import SitemapPage from "../pages/SitemapPage";

import MailingListDatabase from "../components/MailingListDatabase";
import EarlyAccessModal from "../components/EarlyAccessModal";

import PreviewPage from "../preview/PreviewPage";
import PreviewUnlockRedirect from "./PreviewUnlockRedirect";

export default function AppRoutes({
  activePage,
  setActivePage,
  previewUnlocked,
  openEarlyAccessModal,
  closeEarlyAccessModal,
  unlockPreview,
  isModalOpen,
  email,
  setEmail,
  bang,
  pendingPage,
  referralCode,
  onSendInvite,
}) {
  if (activePage === "about") {
    return (
      <>
        <AboutPage
          onBack={() => setActivePage("home")}
          onLockIn={() => openEarlyAccessModal("preview")}
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
      </>
    );
  }

  if (activePage === "features") {
    return <FeaturesPage onBack={() => setActivePage("home")} />;
  }

  if (activePage === "partners") {
    return <PartnersPage onBack={() => setActivePage("home")} />;
  }

  if (activePage === "privacy") {
    return <PrivacyPage onBack={() => setActivePage("home")} />;
  }

  if (activePage === "terms") {
    return <TermsPage onBack={() => setActivePage("home")} />;
  }

  if (activePage === "google-play") {
    return <GooglePlay onBack={() => setActivePage("home")} />;
  }

  if (activePage === "apple-store") {
    return <AppleStore onBack={() => setActivePage("home")} />;
  }

  if (activePage === "mailing-list") {
    return (
      <MailingListDatabase
        onBack={() => setActivePage("home")}
        email={email}
        setEmail={setEmail}
        onSubmitAccess={unlockPreview}
      />
    );
  }
  
  if (activePage === "sitemap") {
    return (
      <SitemapPage
        onBack={() => setActivePage("home")}
        onPrivacy={() => setActivePage("privacy")}
        onTerms={() => setActivePage("terms")}
      />
    );
  }

  if (activePage === "preview") {
    if (!previewUnlocked) {
      return (
        <>
          <PreviewUnlockRedirect
            onOpen={() => openEarlyAccessModal("preview")}
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
        </>
      );
    }

    return (
      <>
        <PreviewPage
          onBack={() => setActivePage("home")}
          onPrivacy={() => setActivePage("privacy")}
          onTerms={() => setActivePage("terms")}
          referralCode={referralCode}
          onSendInvite={onSendInvite}
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
      </>
    );
  }

  return null;
}