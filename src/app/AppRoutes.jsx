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
  isAdminAuthenticated,
}) {
  const footerNav = {
    onPrivacy: () => setActivePage("privacy"),
    onTerms: () => setActivePage("terms"),
    onSitemap: () => setActivePage("sitemap"),
    onNews: () => setActivePage("news"),
    onBlog: () => setActivePage("blog"),
    onAbout: () => setActivePage("about"),
    onFeatures: () => setActivePage("features"),
    onPartners: () => setActivePage("partners"),
    onDevelopers: () => setActivePage("developer-portal"),
    onEnterprise: () => setActivePage("enterprise-wellness"),
    onContact: () => setActivePage("contact"),
    onFAQ: () => setActivePage("faq"),
    onHowItWorks: () => setActivePage("how-it-works"),
  };

  if (activePage === "about") {
    return (
      <>
        <AboutPage
          onBack={() => setActivePage("home")}
          onLockIn={() => openEarlyAccessModal("preview")}
          onPrivacy={footerNav.onPrivacy}
          onTerms={footerNav.onTerms}
          onSitemap={footerNav.onSitemap}
          onNews={footerNav.onNews}
          onBlog={footerNav.onBlog}
          onFeatures={footerNav.onFeatures}
          onPartners={footerNav.onPartners}
          onDevelopers={footerNav.onDevelopers}
          onEnterprise={footerNav.onEnterprise}
          onContact={footerNav.onContact}
          onFAQ={footerNav.onFAQ}
          onHowItWorks={footerNav.onHowItWorks}
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
        onPrivacy={footerNav.onPrivacy}
        onTerms={footerNav.onTerms}
        onSitemap={footerNav.onSitemap}
        onNews={footerNav.onNews}
        onBlog={footerNav.onBlog}
        onAbout={footerNav.onAbout}
        onPartners={footerNav.onPartners}
        onDevelopers={footerNav.onDevelopers}
        onEnterprise={footerNav.onEnterprise}
        onContact={footerNav.onContact}
        onFAQ={footerNav.onFAQ}
        onHowItWorks={footerNav.onHowItWorks}
      />
    );
  }

  if (activePage === "partners") {
    return (
      <PartnersPage
        onBack={() => setActivePage("home")}
        onPrivacy={footerNav.onPrivacy}
        onTerms={footerNav.onTerms}
        onSitemap={footerNav.onSitemap}
        onNews={footerNav.onNews}
        onBlog={footerNav.onBlog}
        onAbout={footerNav.onAbout}
        onFeatures={footerNav.onFeatures}
        onDevelopers={footerNav.onDevelopers}
        onEnterprise={footerNav.onEnterprise}
        onContact={footerNav.onContact}
        onFAQ={footerNav.onFAQ}
        onHowItWorks={footerNav.onHowItWorks}
      />
    );
  }

  if (activePage === "enterprise-wellness") {
    return (
      <EnterprisePage
        onBack={() => setActivePage("home")}
        onPrivacy={footerNav.onPrivacy}
        onTerms={footerNav.onTerms}
        onSitemap={footerNav.onSitemap}
        onNews={footerNav.onNews}
        onBlog={footerNav.onBlog}
        onAbout={footerNav.onAbout}
        onFeatures={footerNav.onFeatures}
        onPartners={footerNav.onPartners}
        onDevelopers={footerNav.onDevelopers}
        onContact={footerNav.onContact}
        onFAQ={footerNav.onFAQ}
        onHowItWorks={footerNav.onHowItWorks}
      />
    );
  }

  if (activePage === "developer-portal") {
    return (
      <DevelopersPage
        onBack={() => setActivePage("home")}
        onPrivacy={footerNav.onPrivacy}
        onTerms={footerNav.onTerms}
        onSitemap={footerNav.onSitemap}
        onNews={footerNav.onNews}
        onBlog={footerNav.onBlog}
        onAbout={footerNav.onAbout}
        onFeatures={footerNav.onFeatures}
        onPartners={footerNav.onPartners}
        onEnterprise={footerNav.onEnterprise}
        onContact={footerNav.onContact}
        onFAQ={footerNav.onFAQ}
        onHowItWorks={footerNav.onHowItWorks}
      />
    );
  }

  if (activePage === "news") {
    return (
      <NewsBlogPage
        initialTab="news"
        onBack={() => setActivePage("home")}
        onPrivacy={footerNav.onPrivacy}
        onTerms={footerNav.onTerms}
        onSitemap={footerNav.onSitemap}
        onAdmin={() => setActivePage("admin")}
        onNews={footerNav.onNews}
        onBlog={footerNav.onBlog}
        onAbout={footerNav.onAbout}
        onFeatures={footerNav.onFeatures}
        onPartners={footerNav.onPartners}
        onDevelopers={footerNav.onDevelopers}
        onEnterprise={footerNav.onEnterprise}
        onContact={footerNav.onContact}
        onFAQ={footerNav.onFAQ}
        onHowItWorks={footerNav.onHowItWorks}
      />
    );
  }

  if (activePage === "blog") {
    return (
      <NewsBlogPage
        initialTab="blog"
        onBack={() => setActivePage("home")}
        onPrivacy={footerNav.onPrivacy}
        onTerms={footerNav.onTerms}
        onSitemap={footerNav.onSitemap}
        onAdmin={() => setActivePage("admin")}
        onNews={footerNav.onNews}
        onBlog={footerNav.onBlog}
        onAbout={footerNav.onAbout}
        onFeatures={footerNav.onFeatures}
        onPartners={footerNav.onPartners}
        onDevelopers={footerNav.onDevelopers}
        onEnterprise={footerNav.onEnterprise}
        onContact={footerNav.onContact}
        onFAQ={footerNav.onFAQ}
        onHowItWorks={footerNav.onHowItWorks}
      />
    );
  }

  if (activePage === "admin") {
    return (
      <AdminPage
        onBack={() => setActivePage("blog")}
        onPrivacy={footerNav.onPrivacy}
        onTerms={footerNav.onTerms}
        onSitemap={footerNav.onSitemap}
        isAdminAuthenticated={isAdminAuthenticated}
      />
    );
  }

  if (activePage === "contact") {
    return (
      <ContactPage
        onBack={() => setActivePage("home")}
        onPrivacy={footerNav.onPrivacy}
        onTerms={footerNav.onTerms}
        onSitemap={footerNav.onSitemap}
        onNews={footerNav.onNews}
        onBlog={footerNav.onBlog}
        onAbout={footerNav.onAbout}
        onFeatures={footerNav.onFeatures}
        onPartners={footerNav.onPartners}
        onDevelopers={footerNav.onDevelopers}
        onEnterprise={footerNav.onEnterprise}
        onContact={footerNav.onContact}
        onFAQ={footerNav.onFAQ}
        onHowItWorks={footerNav.onHowItWorks}
      />
    );
  }

  if (activePage === "faq") {
    return (
      <FAQPage
        onBack={() => setActivePage("home")}
        onPrivacy={footerNav.onPrivacy}
        onTerms={footerNav.onTerms}
        onSitemap={footerNav.onSitemap}
        onContact={footerNav.onContact}
        onNews={footerNav.onNews}
        onBlog={footerNav.onBlog}
        onAbout={footerNav.onAbout}
        onFeatures={footerNav.onFeatures}
        onPartners={footerNav.onPartners}
        onDevelopers={footerNav.onDevelopers}
        onEnterprise={footerNav.onEnterprise}
        onFAQ={footerNav.onFAQ}
        onHowItWorks={footerNav.onHowItWorks}
      />
    );
  }

  if (activePage === "how-it-works") {
    return (
      <HowItWorksPage
        onBack={() => setActivePage("home")}
        onPrivacy={footerNav.onPrivacy}
        onTerms={footerNav.onTerms}
        onSitemap={footerNav.onSitemap}
        onContact={footerNav.onContact}
        onNews={footerNav.onNews}
        onBlog={footerNav.onBlog}
        onAbout={footerNav.onAbout}
        onFeatures={footerNav.onFeatures}
        onPartners={footerNav.onPartners}
        onDevelopers={footerNav.onDevelopers}
        onEnterprise={footerNav.onEnterprise}
        onFAQ={footerNav.onFAQ}
        onHowItWorks={footerNav.onHowItWorks}
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
      <>
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
          onPrivacy={footerNav.onPrivacy}
          onTerms={footerNav.onTerms}
          onSitemap={footerNav.onSitemap}
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