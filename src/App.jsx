import React, { useState } from "react";
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

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [activePage, setActivePage] = useState("home");

  if (activePage === "about") {
    return (
      <AboutPage
        onBack={() => setActivePage("home")}
        onLockIn={() => setIsModalOpen(true)}
      />
    );
  }

  if (activePage === "features") {
    return <FeaturesPage onBack={() => setActivePage("home")} />;
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
    return <MailingListDatabase onBack={() => setActivePage("home")} />;
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

        .landing-title {
          margin: 0 0 16px 0;
          font-size: clamp(42px, 14vw, 72px);
          line-height: 0.98;
          font-weight: 300;
          letter-spacing: -0.04em;
          color: #F7F8FF;
          max-width: 100%;
        }

        .landing-title-accent {
          font-weight: 800;
          background: linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .landing-sub {
          margin: 0 0 22px 0;
          max-width: 320px;
          font-size: clamp(16px, 4.4vw, 19px);
          line-height: 1.45;
          color: rgba(235, 239, 255, 0.74);
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
          width: 100%;
          color: rgba(245,247,255,0.94);
        }

        .landing-socials a {
          color: inherit;
          text-decoration: none;
          display: inline-flex;
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

        @keyframes twinkle {
          0% { opacity: 0.35; transform: scale(0.92); }
          50% { opacity: 1; transform: scale(1.08); }
          100% { opacity: 0.35; transform: scale(0.92); }
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

          .landing-title {
            font-size: clamp(54px, 9vw, 84px);
            max-width: 720px;
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
            align-items: flex-start;
            text-align: left;
          }

          .landing-title {
            font-size: clamp(64px, 6.6vw, 112px);
            max-width: 680px;
          }

          .landing-sub {
            max-width: 460px;
            font-size: 22px;
          }

          .landing-cta {
            max-width: 320px;
            font-size: 21px;
          }

          .landing-socials {
            justify-content: flex-start;
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
          onDownload={() => setActivePage("download")}
          onPartners={() => setActivePage("partners")}
          onGooglePlay={() => setActivePage("google-play")}
          onAppleStore={() => setActivePage("apple-store")}
        />

        <main className="landing-main">
          <section className="landing-copy">
            <h1 className="landing-title">
              Most apps waste your time.
              <br />
              <span className="landing-title-accent">ZWAP!</span> turns it into rewards.
            </h1>

            <p className="landing-sub">It’s giving...earn smarter not harder.</p>

            <button
              className="landing-cta"
              onClick={() => setIsModalOpen(true)}
            >
              Lock In. Early.
            </button>

            <div className="landing-socials">
              <a href="#" aria-label="X">
                <XIcon />
              </a>
              <a href="#" aria-label="TikTok">
                <TikTokIcon />
              </a>
              <a href="#" aria-label="Email">
                <MailIcon />
              </a>
            </div>
          </section>

          <section className="landing-visual">
            <img
              src={heroPhoneMockup}
              alt="ZWAP! app hero mockup"
            />
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
          onClose={() => setIsModalOpen(false)}
          email={email}
          setEmail={setEmail}
          bang={bang}
        />
      </div>
    </div>
  );
}