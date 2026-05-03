import React from "react";

export default function IOSBetaPage({ onBack }) {
  return (
    <div className="ios-beta-shell">
      <div className="ios-beta-container">
        <div className="ios-beta-card">
          <h1 className="ios-beta-title">ZWAP!</h1>
          <p className="ios-beta-sub">iPhone Beta Access</p>

          <div className="ios-beta-steps">
            <strong>Install:</strong>
            <ol>
              <li>Open this page in <b>Safari</b></li>
              <li>Tap the <b>Share</b> button</li>
              <li>Tap <b>Add to Home Screen</b></li>
              <li>Launch ZWAP! from your home screen</li>
            </ol>
          </div>

          <a href="/v1" className="ios-beta-button">
            Open ZWAP!
          </a>

          <p className="ios-beta-note">
            Browser-based preview.<br />
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
          margin-bottom: 4px;
        }

        .ios-beta-sub {
          font-size: 13px;
          opacity: 0.7;
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
          margin-top: 12px;
          padding: 12px;
          border-radius: 16px;
          background: linear-gradient(90deg, #22d3ee, #a855f7);
          color: black;
          font-weight: 600;
          text-decoration: none;
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