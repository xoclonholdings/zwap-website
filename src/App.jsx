import React, { useState } from "react";
import heroPhoneMockup from "./assets/hero_phone_mockup.png";
import EarlyAccessModal from "./EarlyAccessModal.jsx";
import LandingHeader from "./LandingHeader";
import bang from "./assets/Zwap_bang_3d.png";

import AboutPage from "./AboutPage";
import FeaturesPage from "./FeaturesPage";
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
    <div
      style={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: `
          radial-gradient(circle at 72% 34%, rgba(204, 91, 255, 0.10), transparent 16%),
          radial-gradient(circle at 82% 30%, rgba(88, 240, 255, 0.08), transparent 14%),
          radial-gradient(circle at 60% 36%, rgba(255, 176, 86, 0.06), transparent 12%),
          linear-gradient(180deg, #030308 0%, #080913 58%, #04050A 100%)
        `,
        color: "#F5F7FF",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
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
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          minHeight: "100dvh",
          padding:
            "calc(env(safe-area-inset-top, 0px) + 14px) 16px calc(env(safe-area-inset-bottom, 0px) + 24px)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <LandingHeader />

        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            paddingTop: "4px",
          }}
        >
          <section
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                margin: "0 0 16px 0",
                fontSize: "clamp(44px, 15vw, 72px)",
                lineHeight: 0.98,
                fontWeight: 300,
                letterSpacing: "-0.04em",
                color: "#F7F8FF",
                maxWidth: "100%",
              }}
            >
              Most apps waste your time.
              <br />
              <span
                style={{
                  fontWeight: 800,
                  background:
                    "linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ZWAP!
              </span>{" "}
              turns it into rewards.
            </h1>

            <p
              style={{
                margin: "0 0 22px 0",
                fontSize: "clamp(16px, 4.4vw, 19px)",
                lineHeight: 1.45,
                color: "rgba(235, 239, 255, 0.74)",
                maxWidth: "320px",
              }}
            >
              It’s giving...smarter not harder.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                padding: "16px 28px",
                borderRadius: "999px",
                border: "2px solid rgba(165, 103, 255, 0.78)",
                background:
                  "linear-gradient(180deg, rgba(14,16,30,0.94) 0%, rgba(8,10,22,0.98) 100%)",
                color: "#F9FAFF",
                fontSize: "clamp(17px, 4.8vw, 20px)",
                fontWeight: 800,
                letterSpacing: "0.02em",
                cursor: "pointer",
                animation: "shimmer 3s ease-in-out infinite",
                width: "100%",
                maxWidth: "290px",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 26px rgba(73, 44, 162, 0.28)",
              }}
            >
              Lock In. Early.
            </button>

            <div
              style={{
                marginTop: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "26px",
                width: "100%",
                color: "rgba(245,247,255,0.94)",
              }}
            >
              <a
                href="#"
                style={{ color: "inherit", textDecoration: "none", display: "inline-flex" }}
              >
                <XIcon />
              </a>
              <a
                href="#"
                style={{ color: "inherit", textDecoration: "none", display: "inline-flex" }}
              >
                <TikTokIcon />
              </a>
              <a
                href="#"
                style={{ color: "inherit", textDecoration: "none", display: "inline-flex" }}
              >
                <MailIcon />
              </a>
            </div>
          </section>

          <section
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "28px",
              marginBottom: "10px",
            }}
          >
            <img
              src={heroPhoneMockup}
              alt="ZWAP! app hero mockup"
              style={{
                width: "100%",
                maxWidth: "365px",
                height: "auto",
                display: "block",
                animation: "floatMockup 5.2s ease-in-out infinite",
                filter: "drop-shadow(0 0 26px rgba(130, 88, 255, 0.14))",
              }}
            />
          </section>
        </main>

        <footer
          style={{
            marginTop: "8px",
            paddingTop: "18px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "rgba(236, 240, 255, 0.72)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              justifyContent: "center",
              fontSize: "14px",
            }}
          >
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Terms of Service
            </a>
          </div>

          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.5,
              maxWidth: "280px",
            }}
          >
            © 2026 ZWAP!™. All rights reserved. Owned by ZWAP LLC.
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