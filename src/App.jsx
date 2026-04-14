import React, { useEffect, useMemo, useState } from "react";
import heroPhoneMockup from "./assets/hero_phone_mockup.png";
import EarlyAccessModal from "./EarlyAccessModal.jsx";
import LandingHeader from "./LandingHeader";
import bang from "./assets/Zwap_bang_3d.png";

import AboutPage from "./AboutPage";
import FeaturesPage from "./FeaturesPage";
import PartnersPage from "./PartnersPage";
import DownloadPage from "./DownloadPage";
import GooglePlay from "./GooglePlay";
import AppleStore from "./AppleStore";
import MailingListDatabase from "./MailingListDatabase";
import PreviewPage from "./preview/PreviewPage";

function generateReferralCode() {
  return `ZWAP-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.7L23 22h-6.1l-4.8-6.3L6.5 22H3.4l7.3-8.3L1.2 2h6.2l4.3 5.7L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.6 8.8c-1.5-.1-2.8-.9-3.6-2.1v7.6c0 3.2-2.6 5.7-5.7 5.7s-5.7-2.6-5.7-5.7 2.6-5.7 5.7-5.7c.3 0 .6 0 .9.1v3c-.3-.1-.6-.2-.9-.2-1.5 0-2.7 1.2-2.7 2.7S8.8 17 10.3 17s2.7-1.2 2.7-2.7V2h3c.2 1.8 1.7 3.2 3.6 3.4v3.4Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function MailModal({
  isOpen,
  onClose,
  subject,
  setSubject,
  message,
  setMessage,
}) {
  const mailtoHref = useMemo(() => {
    const to = "app@zwap.online";
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(message);
    return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
  }, [subject, message]);

  if (!isOpen) return null;

  return (
    <div className="mail-modal-overlay" onClick={onClose}>
      <div
        className="mail-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Contact ZWAP"
      >
        <div className="mail-modal-head">
          <div className="mail-modal-title">Contact ZWAP!</div>
          <button className="mail-close" onClick={onClose} aria-label="Close email modal">
            ×
          </button>
        </div>

        <div className="mail-field">
          <label className="mail-label">To</label>
          <input className="mail-input readonly" value="app@zwap.online" readOnly />
        </div>

        <div className="mail-field">
          <label className="mail-label">Subject</label>
          <input
            className="mail-input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What can we help with?"
          />
        </div>

        <div className="mail-field">
          <label className="mail-label">Message</label>
          <textarea
            className="mail-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
          />
        </div>

        <div className="mail-actions">
          <button className="mail-secondary" onClick={onClose}>
            Cancel
          </button>
          <a className="mail-primary" href={mailtoHref}>
            Open Mail App
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [activePage, setActivePage] = useState("home");
  const [previewUnlocked, setPreviewUnlocked] = useState(false);
  const [pendingPage, setPendingPage] = useState(null);
  const [referralCode, setReferralCode] = useState("");
  const [referredBy, setReferredBy] = useState("");

  const [isMailOpen, setIsMailOpen] = useState(false);
  const [mailSubject, setMailSubject] = useState("Hello ZWAP!");
  const [mailMessage, setMailMessage] = useState("");

  const trackClick = (label) => {
    console.log("CLICK:", label);

    if (window.gtag) {
      window.gtag("event", "click", {
        event_category: "Landing Social",
        event_label: label,
      });
    }
  };

  useEffect(() => {
    const savedPreviewUnlocked =
      localStorage.getItem("zwap_preview_unlocked") === "true";
    const savedEmail = localStorage.getItem("zwap_early_access_email") || "";
    const savedReferralCode =
      localStorage.getItem("zwap_referral_code") || generateReferralCode();
    const savedReferredBy = localStorage.getItem("zwap_referred_by") || "";

    setPreviewUnlocked(savedPreviewUnlocked);
    setEmail(savedEmail);
    setReferralCode(savedReferralCode);
    setReferredBy(savedReferredBy);

    if (!localStorage.getItem("zwap_referral_code")) {
      localStorage.setItem("zwap_referral_code", savedReferralCode);
    }

    const params = new URLSearchParams(window.location.search);
    const incomingRef = params.get("ref");

    if (incomingRef) {
      setReferredBy(incomingRef);
      localStorage.setItem("zwap_referred_by", incomingRef);
    }
  }, []);

  const openEarlyAccessModal = (targetPage = null) => {
    setPendingPage(targetPage);
    setIsModalOpen(true);
  };

  const closeEarlyAccessModal = () => {
    setIsModalOpen(false);
    setPendingPage(null);
  };

  const handleEarlyAccessSubmit = () => {
    const cleanEmail = email.trim();

    if (!cleanEmail) return;

    const currentRecord = (() => {
      try {
        return JSON.parse(localStorage.getItem("zwap_early_access_record") || "{}");
      } catch {
        return {};
      }
    })();

    const nextRecord = {
      ...currentRecord,
      email: cleanEmail,
      early_access: true,
      preview_unlocked: true,
      referral_code: referralCode,
      referred_by: referredBy || null,
      referral_count: currentRecord.referral_count || 0,
      pending_rewards: {
        referral_zwap: currentRecord?.pending_rewards?.referral_zwap || 0,
      },
      created_at: currentRecord.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    localStorage.setItem("zwap_early_access_email", cleanEmail);
    localStorage.setItem("zwap_preview_unlocked", "true");
    localStorage.setItem("zwap_early_access", "true");
    localStorage.setItem("zwap_early_access_record", JSON.stringify(nextRecord));

    setPreviewUnlocked(true);
    setIsModalOpen(false);

    if (pendingPage === "preview") {
      setActivePage("preview");
    }

    setPendingPage(null);
  };

  const handleInstantPreviewUnlock = () => {
    const currentRecord = (() => {
      try {
        return JSON.parse(localStorage.getItem("zwap_early_access_record") || "{}");
      } catch {
        return {};
      }
    })();

    const nextRecord = {
      ...currentRecord,
      email: email.trim() || currentRecord.email || "",
      early_access: true,
      preview_unlocked: true,
      referral_code: referralCode,
      referred_by: referredBy || null,
      referral_count: currentRecord.referral_count || 0,
      pending_rewards: {
        referral_zwap: currentRecord?.pending_rewards?.referral_zwap || 0,
      },
      created_at: currentRecord.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    if (nextRecord.email) {
      localStorage.setItem("zwap_early_access_email", nextRecord.email);
    }

    localStorage.setItem("zwap_preview_unlocked", "true");
    localStorage.setItem("zwap_early_access", "true");
    localStorage.setItem("zwap_early_access_record", JSON.stringify(nextRecord));

    setPreviewUnlocked(true);
    setIsModalOpen(false);

    if (pendingPage === "preview") {
      setActivePage("preview");
    }

    setPendingPage(null);
  };

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
          onSubmitAccess={handleEarlyAccessSubmit}
          onInstantAccess={handleInstantPreviewUnlock}
          pendingPage={pendingPage}
        />
      </>
    );
  }

  if (activePage === "features") {
    return <FeaturesPage onBack={() => setActivePage("home")} />;
  }

  if (activePage === "preview") {
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
          onSubmitAccess={handleEarlyAccessSubmit}
          onInstantAccess={handleInstantPreviewUnlock}
          pendingPage={pendingPage}
        />
      </>
    );
  }

  if (activePage === "partners") {
    return <PartnersPage onBack={() => setActivePage("home")} />;
  }

  if (activePage === "download") {
    return <DownloadPage onBack={() => setActivePage("home")} />;
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
        onSubmitAccess={handleEarlyAccessSubmit}
      />
    );
  }

  return (
    <div className="landing-shell">
      <style>{`
        :root {
          color-scheme: dark;
        }

        * {
          box-sizing: border-box;
        }

        .landing-shell {
          min-height: 100dvh;
          width: 100%;
          display: flex;
          justify-content: center;
          color: #F5F7FF;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background:
            radial-gradient(circle at 72% 34%, rgba(204, 91, 255, 0.10), transparent 16%),
            radial-gradient(circle at 82% 30%, rgba(88, 240, 255, 0.08), transparent 14%),
            radial-gradient(circle at 60% 36%, rgba(255, 176, 86, 0.06), transparent 12%),
            linear-gradient(180deg, #030308 0%, #080913 58%, #04050A 100%);
        }

        .landing-app {
          width: 100%;
          max-width: 100%;
          min-height: 100dvh;
          padding:
            calc(env(safe-area-inset-top, 0px) + 14px)
            16px
            calc(env(safe-area-inset-bottom, 0px) + 24px);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .landing-main {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          gap: 28px;
          padding-top: 6px;
        }

        .landing-copy {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .landing-title-wrap {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .landing-title-top {
          margin: 0;
          font-size: clamp(36px, 11.5vw, 62px);
          line-height: 1.02;
          font-weight: 400;
          letter-spacing: -0.04em;
          color: #F7F8FF;
        }

        .landing-title-bottom {
          margin: 12px 0 0 0;
          font-size: clamp(42px, 13vw, 68px);
          line-height: 1.02;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: #F7F8FF;
        }

        .landing-title-accent {
          font-weight: 800;
          background: linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .landing-sub {
          margin: 18px 0 22px 0;
          max-width: 360px;
          font-size: clamp(16px, 4.4vw, 19px);
          line-height: 1.45;
          color: rgba(235, 239, 255, 0.74);
          font-style: italic;
        }

        .landing-cta-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .landing-cta {
          width: 100%;
          max-width: 290px;
          padding: 16px 28px;
          border-radius: 999px;
          border: 2px solid rgba(165, 103, 255, 0.78);
          background: linear-gradient(180deg, rgba(14,16,30,0.94) 0%, rgba(8,10,22,0.98) 100%);
          color: #F9FAFF;
          font-size: clamp(17px, 4.8vw, 20px);
          font-weight: 800;
          letter-spacing: 0.02em;
          cursor: pointer;
          animation: shimmer 3s ease-in-out infinite;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 10px 26px rgba(73, 44, 162, 0.28);
        }

        .landing-socials {
          margin-top: 16px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 26px;
          width: auto;
          color: rgba(245,247,255,0.94);
        }

        .landing-socials a,
        .landing-socials button {
          color: inherit;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .landing-visual {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 8px;
          margin-bottom: 10px;
        }

        .landing-visual img {
          width: 100%;
          max-width: 365px;
          height: auto;
          display: block;
          animation: floatMockup 5.2s ease-in-out infinite;
          filter: drop-shadow(0 0 26px rgba(130, 88, 255, 0.14));
        }

        .landing-footer {
          margin-top: 8px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.06);
          color: rgba(236, 240, 255, 0.72);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          text-align: center;
        }

        .landing-footer-links {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          justify-content: center;
          font-size: 14px;
        }

        .landing-footer-links a {
          color: inherit;
          text-decoration: none;
        }

        .landing-footer-copy {
          font-size: 14px;
          line-height: 1.5;
          max-width: 280px;
        }

        .mail-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(1, 2, 8, 0.76);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 9999;
        }

        .mail-modal-card {
          width: 100%;
          max-width: 460px;
          border-radius: 24px;
          border: 1px solid rgba(174, 132, 255, 0.24);
          background:
            radial-gradient(circle at 72% 24%, rgba(122, 91, 255, 0.10), transparent 24%),
            linear-gradient(180deg, rgba(12,14,28,0.96) 0%, rgba(8,10,20,0.98) 100%);
          box-shadow:
            0 20px 60px rgba(0,0,0,0.42),
            0 0 30px rgba(103, 78, 255, 0.12);
          padding: 20px;
        }

        .mail-modal-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }

        .mail-modal-title {
          font-size: 24px;
          line-height: 1.05;
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #F7F8FF;
        }

        .mail-close {
          border: none;
          background: transparent;
          color: rgba(245,247,255,0.82);
          font-size: 32px;
          line-height: 1;
          cursor: pointer;
          padding: 0;
        }

        .mail-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 14px;
        }

        .mail-label {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(245,247,255,0.62);
        }

        .mail-input,
        .mail-textarea {
          width: 100%;
          border-radius: 16px;
          border: 1px solid rgba(174, 132, 255, 0.24);
          background: rgba(255,255,255,0.04);
          color: #F5F7FF;
          padding: 14px 16px;
          font-size: 15px;
          outline: none;
        }

        .mail-input.readonly {
          color: rgba(245,247,255,0.88);
        }

        .mail-textarea {
          min-height: 120px;
          resize: vertical;
          line-height: 1.5;
        }

        .mail-actions {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }

        .mail-secondary,
        .mail-primary {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 800;
          text-decoration: none;
          cursor: pointer;
        }

        .mail-secondary {
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          color: rgba(245,247,255,0.88);
        }

        .mail-primary {
          border: 2px solid rgba(165, 103, 255, 0.78);
          background: linear-gradient(180deg, rgba(14,16,30,0.94) 0%, rgba(8,10,22,0.98) 100%);
          color: #F9FAFF;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 10px 26px rgba(73, 44, 162, 0.28);
        }

        @keyframes shimmer {
          0% { box-shadow: 0 0 18px rgba(115, 88, 255, 0.25), 0 0 28px rgba(226, 74, 255, 0.10); }
          50% { box-shadow: 0 0 26px rgba(115, 88, 255, 0.35), 0 0 40px rgba(226, 74, 255, 0.16); }
          100% { box-shadow: 0 0 18px rgba(115, 88, 255, 0.25), 0 0 28px rgba(226, 74, 255, 0.10); }
        }

        @keyframes floatMockup {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }

        @media (min-width: 768px) {
          .landing-app {
            max-width: 900px;
            padding:
              calc(env(safe-area-inset-top, 0px) + 18px)
              24px
              calc(env(safe-area-inset-bottom, 0px) + 28px);
          }

          .landing-main {
            gap: 34px;
          }

          .landing-title-top {
            font-size: clamp(48px, 7.8vw, 74px);
          }

          .landing-title-bottom {
            font-size: clamp(54px, 8.6vw, 84px);
            margin-top: 18px;
          }

          .landing-sub {
            max-width: 420px;
            font-size: 19px;
          }

          .landing-visual img {
            max-width: 500px;
          }

          .landing-footer-copy {
            max-width: 420px;
          }
        }

        @media (min-width: 1100px) {
          .landing-app {
            max-width: 1200px;
            padding:
              calc(env(safe-area-inset-top, 0px) + 24px)
              32px
              calc(env(safe-area-inset-bottom, 0px) + 28px);
          }

          .landing-main {
            grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
            gap: 44px;
            padding-top: 18px;
          }

          .landing-copy {
            align-items: center;
            text-align: center;
          }

          .landing-title-wrap {
            align-items: center;
          }

          .landing-title-top {
            font-size: clamp(56px, 5.2vw, 84px);
          }

          .landing-title-bottom {
            font-size: clamp(64px, 6vw, 96px);
            margin-top: 24px;
            max-width: 760px;
          }

          .landing-sub {
            max-width: 500px;
            font-size: 22px;
          }

          .landing-cta {
            max-width: 320px;
            font-size: 21px;
          }

          .landing-cta-group {
            align-items: center;
          }

          .landing-socials {
            justify-content: center;
          }

          .landing-visual {
            margin-top: 0;
            margin-bottom: 0;
          }

          .landing-visual img {
            max-width: 620px;
          }

          .landing-footer {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
          }

          .landing-footer-copy {
            text-align: right;
          }
        }
      `}</style>

      <div className="landing-app">
        <LandingHeader
          onAbout={() => setActivePage("about")}
          onFeatures={() => setActivePage("features")}
          onPreview={() => {
            if (previewUnlocked) {
              setActivePage("preview");
            } else {
              openEarlyAccessModal("preview");
            }
          }}
          onPartners={() => setActivePage("partners")}
          onGooglePlay={() => setActivePage("google-play")}
          onAppleStore={() => setActivePage("apple-store")}
        />

        <main className="landing-main">
          <section className="landing-copy">
            <div className="landing-title-wrap">
              <h1 className="landing-title-top">Most apps waste your time.</h1>
              <h2 className="landing-title-bottom">
                <span className="landing-title-accent">ZWAP!</span> turns it into rewards.
              </h2>
            </div>

            <p className="landing-sub">It’s giving...earn smarter not harder.</p>

            <div className="landing-cta-group">
              <button
                className="landing-cta"
                onClick={() => openEarlyAccessModal("preview")}
              >
                Lock In. Early.
              </button>

              <div className="landing-socials">
                <a
                  href="https://x.com/ZWAP_Online"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  onClick={() => trackClick("X")}
                >
                  <XIcon />
                </a>

                <a
                  href="https://www.tiktok.com/@zwap_online?_t=ZS-8xkQk1Fq1gV&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  onClick={() => trackClick("TikTok")}
                >
                  <TikTokIcon />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    trackClick("Email");
                    setIsMailOpen(true);
                  }}
                  aria-label="Email"
                >
                  <MailIcon />
                </button>
              </div>
            </div>
          </section>

          <section className="landing-visual">
            <img src={heroPhoneMockup} alt="ZWAP! app hero mockup" />
          </section>
        </main>

        <footer className="landing-footer">
          <div className="landing-footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>

          <div className="landing-footer-copy">
            © 2026 ZWAP!™ owned by ZWAP LLC. All rights reserved.
          </div>
        </footer>

        <EarlyAccessModal
          isOpen={isModalOpen}
          onClose={closeEarlyAccessModal}
          email={email}
          setEmail={setEmail}
          bang={bang}
          onSubmitAccess={handleEarlyAccessSubmit}
          onInstantAccess={handleInstantPreviewUnlock}
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