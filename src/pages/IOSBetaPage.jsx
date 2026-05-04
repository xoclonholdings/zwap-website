import React from "react";

function getDeviceType() {
  const userAgent =
    typeof navigator !== "undefined" ? navigator.userAgent || "" : "";

  const isAndroid = /Android/i.test(userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);

  if (isAndroid) return "android";
  if (isIOS) return "ios";

  return "desktop";
}

function InstallSteps() {
  const deviceType = getDeviceType();

  if (deviceType === "android") {
    return (
      <div className="ios-beta-steps">
        <strong>Install:</strong>
        <ol>
          <li>
            Open this page in <b>Chrome</b>
          </li>
          <li>
            Tap the <b>menu</b> button
          </li>
          <li>
            Tap <b>Install app</b> or <b>Add to Home Screen</b>
          </li>
          <li>Launch ZWAP! from your home screen</li>
        </ol>
      </div>
    );
  }

  if (deviceType === "ios") {
    return (
      <div className="ios-beta-steps">
        <strong>Install:</strong>
        <ol>
          <li>
            Open this page in <b>Safari</b>
          </li>
          <li>
            Tap the <b>Share</b> button
          </li>
          <li>
            Tap <b>Add to Home Screen</b>
          </li>
          <li>Launch ZWAP! from your home screen</li>
        </ol>
      </div>
    );
  }

  return (
    <div className="ios-beta-steps">
      <strong>Preview:</strong>
      <ol>
        <li>Open ZWAP! in your browser</li>
        <li>For the best preview, use a mobile device</li>
        <li>Install from Safari on iPhone or Chrome on Android</li>
      </ol>
    </div>
  );
}

export default function IOSBetaPage({ onBack }) {
  return (
    <div className="ios-beta-shell">
      <div className="ios-beta-container">
        <div className="ios-beta-card">
          <h1 className="ios-beta-title">ZWAP!</h1>
          <p className="ios-beta-sub">Preview Access</p>

          <InstallSteps />

          <button
            className="ios-beta-button"
            onClick={() => {
              window.location.href = "https://app.zwap.online";
            }}
          >
            Open ZWAP!
          </button>

          <div className="ios-beta-preview-mode">
            <strong>Preview Mode</strong>
            <span>You’re early.</span>
            <span>
              Some features are still locked while we finalize the system.
            </span>
            <span>Move. Play. Explore.</span>
            <span>More unlocks at launch.</span>
          </div>

          <p className="ios-beta-note">
            Browser-based preview.
            <br />
            Full app experience coming soon.
          </p>

          <button className="ios-beta-back" onClick={onBack}>
            Back
          </button>
        </div>
      </div>

      <style>{`
        .ios-beta-shell {
          min-height: 100vh;
          background: radial-gradient(
            circle at center,
            rgba(34,211,238,0.18),
            rgba(8,10,22,0.96) 60%,
            #000
          );
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .ios-beta-container {
          width: 100%;
          max-width: 360px;
        }

        .ios-beta-card {
          border-radius: 28px;
          padding: 28px 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 0 60px rgba(34,211,238,0.08);
          text-align: center;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .ios-beta-title {
          font-size: 28px;
          margin-bottom: 6px;
          letter-spacing: 0.6px;
          background: linear-gradient(90deg, #22d3ee, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ios-beta-sub {
          font-size: 13px;
          opacity: 0.75;
          margin-bottom: 20px;
        }

        .ios-beta-steps {
          text-align: left;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .ios-beta-steps ol {
          padding-left: 18px;
          margin-top: 6px;
        }

        .ios-beta-button {
          display: block;
          width: 100%;
          margin-top: 16px;
          padding: 12px;
          border-radius: 16px;
          background: linear-gradient(
            90deg,
            #22d3ee 10%,
            #60a5fa 50%,
            #a855f7 90%
          );
          color: black;
          font-weight: 600;
          text-align: center;
          border: none;
          cursor: pointer;
          box-shadow:
            0 0 20px rgba(34,211,238,0.35),
            0 0 30px rgba(168,85,247,0.25);
        }

        .ios-beta-preview-mode {
          margin-top: 18px;
          border-radius: 20px;
          border: 1px solid rgba(34,211,238,0.14);
          background: rgba(34,211,238,0.045);
          padding: 14px 14px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          font-size: 12px;
          line-height: 1.45;
          color: rgba(255,255,255,0.72);
        }

        .ios-beta-preview-mode strong {
          color: rgba(255,255,255,0.92);
          font-size: 13px;
          margin-bottom: 2px;
        }

        .ios-beta-note {
          margin-top: 16px;
          font-size: 12px;
          opacity: 0.6;
        }

        .ios-beta-back {
          margin-top: 18px;
          font-size: 13px;
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.6);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}