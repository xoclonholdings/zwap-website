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

function GradientZwapLogo() {
  return <span className="ios-beta-logo-text">ZWAP!</span>;
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
      <div className="ios-beta-orb ios-beta-orb-one" />
      <div className="ios-beta-orb ios-beta-orb-two" />

      <div className="ios-beta-container">
        <div className="ios-beta-card">
          <div className="ios-beta-logo-wrap">
            <div className="ios-beta-logo-mark">
              <GradientZwapLogo />
            </div>

            <div className="ios-beta-access-pill">
              Private Preview
            </div>
          </div>

          <h1 className="ios-beta-title">ZWAP! Early Access</h1>

          <p className="ios-beta-sub">
            Help shape the future of movement, progression, and digital utility.
          </p>

          <p className="ios-beta-intro">
            Early members gain access to evolving systems, limited unlocks, and
            future ecosystem expansion as ZWAP! prepares for broader rollout.
          </p>

          <InstallSteps />

          <button
            className="ios-beta-button"
            onClick={() => {
              window.location.href = "https://app.zwap.online";
            }}
          >
            Enter Early Access
          </button>

          <div className="ios-beta-preview-mode">
            <strong>Access Status</strong>
            <span>You’re early.</span>
            <span>
              Some features remain locked while ZWAP! finalizes progression,
              Shop utility, and launch systems.
            </span>
            <span>Move. Play. Progress.</span>
            <span>More unlocks as the ecosystem opens.</span>
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
          background:
            radial-gradient(circle at 50% 0%, rgba(168,85,247,0.16), transparent 34%),
            radial-gradient(circle at 12% 28%, rgba(34,211,238,0.10), transparent 28%),
            radial-gradient(circle at 90% 72%, rgba(255,103,212,0.09), transparent 30%),
            linear-gradient(180deg, #000 0%, #030306 54%, #000 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        .ios-beta-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: radial-gradient(circle at center, black, transparent 72%);
          pointer-events: none;
        }

        .ios-beta-orb {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 999px;
          filter: blur(42px);
          opacity: 0.28;
          pointer-events: none;
        }

        .ios-beta-orb-one {
          top: -60px;
          right: -70px;
          background: rgba(168,85,247,0.52);
        }

        .ios-beta-orb-two {
          bottom: -80px;
          left: -70px;
          background: rgba(34,211,238,0.42);
        }

        .ios-beta-container {
          width: 100%;
          max-width: 380px;
          position: relative;
          z-index: 1;
        }

        .ios-beta-card {
          border-radius: 32px;
          padding: 26px 20px 24px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.065), rgba(255,255,255,0.028)),
            rgba(0,0,0,0.82);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow:
            0 0 0 1px rgba(103,242,255,0.035),
            0 24px 80px rgba(0,0,0,0.66),
            0 0 54px rgba(168,85,247,0.13);
          text-align: center;
          color: white;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          backdrop-filter: blur(18px);
        }

        .ios-beta-logo-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .ios-beta-logo-mark {
          min-width: 118px;
          min-height: 48px;
          padding: 10px 18px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.12);
          background:
            radial-gradient(circle at top left, rgba(34,211,238,0.12), transparent 42%),
            radial-gradient(circle at bottom right, rgba(255,103,212,0.13), transparent 46%),
            rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 0 24px rgba(103,242,255,0.08);
        }

        .ios-beta-logo-text {
          font-size: 24px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.04em;
          background: linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ios-beta-access-pill {
          border-radius: 999px;
          border: 1px solid rgba(103,242,255,0.18);
          background: rgba(103,242,255,0.055);
          color: rgba(235,249,255,0.78);
          padding: 6px 12px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .ios-beta-title {
          font-size: 30px;
          line-height: 1.04;
          margin: 0 0 10px;
          letter-spacing: -0.04em;
          font-weight: 900;
          color: #F8FAFF;
        }

        .ios-beta-sub {
          font-size: 15px;
          line-height: 1.5;
          color: rgba(245,247,255,0.78);
          margin: 0 auto 10px;
          max-width: 310px;
        }

        .ios-beta-intro {
          margin: 0 auto 20px;
          max-width: 318px;
          font-size: 13px;
          line-height: 1.55;
          color: rgba(235,239,255,0.62);
        }

        .ios-beta-steps {
          text-align: left;
          font-size: 13px;
          line-height: 1.6;
          margin-bottom: 18px;
          padding: 14px 14px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.032);
          color: rgba(245,247,255,0.76);
        }

        .ios-beta-steps strong {
          color: rgba(255,255,255,0.94);
        }

        .ios-beta-steps ol {
          padding-left: 18px;
          margin: 6px 0 0;
        }

        .ios-beta-steps li + li {
          margin-top: 2px;
        }

        .ios-beta-button {
          display: block;
          width: 100%;
          margin-top: 16px;
          padding: 14px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            #66F2FF 0%,
            #7FD9FF 22%,
            #B486FF 58%,
            #FF67D4 100%
          );
          color: #030306;
          font-size: 15px;
          font-weight: 900;
          letter-spacing: 0.02em;
          text-align: center;
          border: none;
          cursor: pointer;
          box-shadow:
            0 0 24px rgba(34,211,238,0.26),
            0 0 34px rgba(168,85,247,0.22);
        }

        .ios-beta-preview-mode {
          margin-top: 18px;
          border-radius: 22px;
          border: 1px solid rgba(180,134,255,0.16);
          background:
            radial-gradient(circle at top right, rgba(180,134,255,0.10), transparent 42%),
            rgba(255,255,255,0.035);
          padding: 15px 14px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          font-size: 12px;
          line-height: 1.45;
          color: rgba(255,255,255,0.68);
        }

        .ios-beta-preview-mode strong {
          color: rgba(255,255,255,0.94);
          font-size: 13px;
          margin-bottom: 2px;
        }

        .ios-beta-note {
          margin-top: 16px;
          font-size: 12px;
          line-height: 1.45;
          color: rgba(255,255,255,0.46);
        }

        .ios-beta-back {
          margin-top: 18px;
          font-size: 13px;
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.58);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}