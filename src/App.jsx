import React, { useEffect, useMemo, useState } from "react";
import heroPhoneMockup from "./assets/hero_phone_mockup.png";
import EarlyAccessModal from "./EarlyAccessModal.jsx";
import LandingHeader from "./LandingHeader";
import bang from "./assets/Zwap_bang_3d.png";

import AboutPage from "./AboutPage";
import FeaturesPage from "./FeaturesPage";
import PartnersPage from "./PartnersPage";
import GooglePlay from "./GooglePlay";
import AppleStore from "./AppleStore";
import MailingListDatabase from "./MailingListDatabase";
import PreviewPage from "./preview/PreviewPage";

/* -------------------- HELPERS -------------------- */

function generateReferralCode() {
  return `ZWAP-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

function getStoredRecord() {
  try {
    return JSON.parse(localStorage.getItem("zwap_early_access_record") || "{}");
  } catch {
    return {};
  }
}

function saveRecord(record) {
  localStorage.setItem("zwap_early_access_record", JSON.stringify(record));
}

/* -------------------- ICONS -------------------- */

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-6.8 7.7L23 22h-6.1l-4.8-6.3L6.5 22H3.4l7.3-8.3L1.2 2h6.2l4.3 5.7L18.9 2Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.6 8.8c-1.5-.1-2.8-.9-3.6-2.1v7.6c0 3.2-2.6 5.7-5.7 5.7s-5.7-2.6-5.7-5.7 2.6-5.7 5.7-5.7c.3 0 .6 0 .9.1v3c-.3-.1-.6-.2-.9-.2-1.5 0-2.7 1.2-2.7 2.7S8.8 17 10.3 17s2.7-1.2 2.7-2.7V2h3c.2 1.8 1.7 3.2 3.6 3.4v3.4Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

/* -------------------- MAIN -------------------- */

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingPage, setPendingPage] = useState(null);

  const [email, setEmail] = useState("");
  const [previewUnlocked, setPreviewUnlocked] = useState(false);

  const [referralCode, setReferralCode] = useState("");
  const [referredBy, setReferredBy] = useState("");

  const [isMailOpen, setIsMailOpen] = useState(false);
  const [mailSubject, setMailSubject] = useState("Hello ZWAP!");
  const [mailMessage, setMailMessage] = useState("");

  /* -------------------- INIT -------------------- */

  useEffect(() => {
    const record = getStoredRecord();

    const storedCode =
      record.referral_code || localStorage.getItem("zwap_referral_code");

    const finalCode = storedCode || generateReferralCode();

    if (!storedCode) {
      localStorage.setItem("zwap_referral_code", finalCode);
    }

    setReferralCode(finalCode);
    setPreviewUnlocked(localStorage.getItem("zwap_preview_unlocked") === "true");
    setEmail(localStorage.getItem("zwap_early_access_email") || "");
    setReferredBy(localStorage.getItem("zwap_referred_by") || "");

    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");

    if (ref) {
      setReferredBy(ref);
      localStorage.setItem("zwap_referred_by", ref);
    }
  }, []);

  /* -------------------- CORE FLOW -------------------- */

  const openEarlyAccessModal = (targetPage = null) => {
    setPendingPage(targetPage);
    setIsModalOpen(true);
  };

  const closeEarlyAccessModal = () => {
    setIsModalOpen(false);
    setPendingPage(null);
  };

  const unlockPreview = () => {
    const record = getStoredRecord();

    const updated = {
      ...record,
      email: email.trim() || record.email || "",
      early_access: true,
      preview_unlocked: true,
      referral_code: referralCode,
      referred_by: referredBy || null,
      referral_count: record.referral_count || 0,
      pending_rewards: {
        referral_zwap: record?.pending_rewards?.referral_zwap || 0,
      },
      created_at: record.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    saveRecord(updated);

    if (updated.email) {
      localStorage.setItem("zwap_early_access_email", updated.email);
    }

    localStorage.setItem("zwap_preview_unlocked", "true");

    setPreviewUnlocked(true);
    setIsModalOpen(false);

    if (pendingPage === "preview") {
      setActivePage("preview");
    }

    setPendingPage(null);
  };

  /* -------------------- ROUTING -------------------- */

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
        />
      </>
    );
  }

  if (activePage === "features") {
    return <FeaturesPage onBack={() => setActivePage("home")} />;
  }

  if (activePage === "preview") {
    if (!previewUnlocked) {
      openEarlyAccessModal("preview");
      return null;
    }

    return (
      <>
        <PreviewPage
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
        />
      </>
    );
  }

  if (activePage === "partners") {
    return <PartnersPage onBack={() => setActivePage("home")} />;
  }

  if (activePage === "google-play") {
    return <GooglePlay />;
  }

  if (activePage === "apple-store") {
    return <AppleStore />;
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

  /* -------------------- HOME -------------------- */

  return (
    <div className="landing-shell">
      <div className="landing-app">
        <LandingHeader
          onAbout={() => setActivePage("about")}
          onFeatures={() => setActivePage("features")}
          onPreview={() =>
            previewUnlocked
              ? setActivePage("preview")
              : openEarlyAccessModal("preview")
          }
          onPartners={() => setActivePage("partners")}
          onGooglePlay={() => setActivePage("google-play")}
          onAppleStore={() => setActivePage("apple-store")}
        />

        <main className="landing-main">
          <section className="landing-copy">
            <h1>Most apps waste your time.</h1>
            <h2>
              <span>ZWAP!</span> turns it into rewards.
            </h2>

            <button onClick={() => openEarlyAccessModal("preview")}>
              Lock In. Early.
            </button>

            <div className="landing-socials">
              <a href="https://x.com/ZWAP_Online" target="_blank">
                <XIcon />
              </a>
              <a href="https://www.tiktok.com/@zwap_online" target="_blank">
                <TikTokIcon />
              </a>
              <button onClick={() => setIsMailOpen(true)}>
                <MailIcon />
              </button>
            </div>
          </section>

          <section className="landing-visual">
            <img src={heroPhoneMockup} alt="ZWAP preview" />
          </section>
        </main>

        <EarlyAccessModal
          isOpen={isModalOpen}
          onClose={closeEarlyAccessModal}
          email={email}
          setEmail={setEmail}
          bang={bang}
          onSubmitAccess={unlockPreview}
          onInstantAccess={unlockPreview}
        />
      </div>
    </div>
  );
}