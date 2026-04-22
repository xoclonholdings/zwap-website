import AboutPage from "../pages/AboutPage";
import FeaturesPage from "../pages/FeaturesPage";
import PartnersPage from "../pages/PartnersPage";
import PrivacyPage from "../pages/PrivacyPage";
import TermsPage from "../pages/TermsPage";
import GooglePlay from "../pages/GooglePlay";
import AppleStore from "../pages/AppleStore";
import NewsBlogPage from "../pages/NewsBlogPage";
import EnterprisePage from "../pages/EnterprisePage";
import DevelopersPage from "../pages/DevelopersPage";
import AdminPage from "../pages/newsblog/AdminPage";

import SitemapPage from "../pages/sitemap/SitemapPage";
import ContactPage from "../pages/sitemap/ContactPage";
import FAQPage from "../pages/sitemap/FAQPage";
import HowItWorksPage from "../pages/sitemap/HowItWorksPage";

import MailingListDatabase from "../components/MailingListDatabase";
import EarlyAccessModal from "../components/EarlyAccessModal";

import PreviewPage from "../preview/PreviewPage";
import PreviewUnlockRedirect from "./PreviewUnlockRedirect";

export default function AppRoutes({
  activePage,
  setActivePage,
  setIsMailOpen,
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
          onPrivacy={() => setActivePage("privacy")}
          onTerms={() => setActivePage("terms")}
          onSitemap={() => setActivePage("sitemap")}
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
    return (
      <FeaturesPage
        onBack={() => setActivePage("home")}
        onPrivacy={() => setActivePage("privacy")}
        onTerms={() => setActivePage("terms")}
        onSitemap={() => setActivePage("sitemap")}
      />
    );
  }

  if (activePage === "partners") {
    return (
      <PartnersPage
        onBack={() => setActivePage("home")}
        onPrivacy={() => setActivePage("privacy")}
        onTerms={() => setActivePage("terms")}
        onSitemap={() => setActivePage("sitemap")}
      />
    );
  }

  if (activePage === "enterprise-wellness") {
    return (
      <EnterprisePage
        onBack={() => setActivePage("home")}
        onPrivacy={() => setActivePage("privacy")}
        onTerms={() => setActivePage("terms")}
        onSitemap={() => setActivePage("sitemap")}
      />
    );
  }

  if (activePage === "developer-portal") {
    return (
      <DevelopersPage
        onBack={() => setActivePage("home")}
        onPrivacy={() => setActivePage("privacy")}
        onTerms={() => setActivePage("terms")}
        onSitemap={() => setActivePage("sitemap")}
      />
    );
  }

  if (activePage === "news") {
    return (
      <NewsBlogPage
        initialTab="news"
        onBack={() => setActivePage("home")}
        onPrivacy={() => setActivePage("privacy")}
        onTerms={() => setActivePage("terms")}
        onSitemap={() => setActivePage("sitemap")}
        onAdmin={() => setActivePage("admin")}
      />
    );
  }

  if (activePage === "blog") {
    return (
      <NewsBlogPage
        initialTab="blog"
        onBack={() => setActivePage("home")}
        onPrivacy={() => setActivePage("privacy")}
        onTerms={() => setActivePage("terms")}
        onSitemap={() => setActivePage("sitemap")}
        onAdmin={() => setActivePage("admin")}
      />
    );
  }

  if (activePage === "admin") {
    return (
      <AdminPage
        onBack={() => setActivePage("home")}
        onPrivacy={() => setActivePage("privacy")}
        onTerms={() => setActivePage("terms")}
        onSitemap={() => setActivePage("sitemap")}
      />
    );
  }

  if (activePage === "contact") {
    return (
      <ContactPage
        onBack={() => setActivePage("home")}
        onPrivacy={() => setActivePage("privacy")}
        onTerms={() => setActivePage("terms")}
        onSitemap={() => setActivePage("sitemap")}
        onContact={() => setActivePage("contact")}
      />
    );
  }

  if (activePage === "faq") {
    return (
      <FAQPage
        onBack={() => setActivePage("home")}
        onPrivacy={() => setActivePage("privacy")}
        onTerms={() => setActivePage("terms")}
        onSitemap={() => setActivePage("sitemap")}
        onContact={() => setActivePage("contact")}
      />
    );
  }

  if (activePage === "how-it-works") {
    return (
      <HowItWorksPage
        onBack={() => setActivePage("home")}
        onPrivacy={() => setActivePage("privacy")}
        onTerms={() => setActivePage("terms")}
        onSitemap={() => setActivePage("sitemap")}
        onContact={() => setActivePage("contact")}
      />
    );
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
        onNavigate={(routeKey) => {
          if (routeKey === "contact") {
            setActivePage("contact");
            return;
          }

          if (routeKey === "faq") {
            setActivePage("faq");
            return;
          }

          if (routeKey === "how-it-works") {
            setActivePage("how-it-works");
            return;
          }

          if (routeKey === "early-access") {
            openEarlyAccessModal("preview");
            return;
          }

          if (routeKey === "home") {
            setActivePage("home");
            return;
          }

          setActivePage(routeKey);
        }}
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
          onSitemap={() => setActivePage("sitemap")}
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