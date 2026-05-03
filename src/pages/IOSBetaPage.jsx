import React from "react";

export default function IOSBetaPage({ onBack }) {
  return (
    <div className="ios-beta-shell">
      <div className="ios-beta-card">
        <h1 className="ios-beta-title">ZWAP!</h1>
        <p className="ios-beta-sub">iPhone Beta</p>

        <div className="ios-beta-steps">
          <div>Open in <b>Safari</b></div>
          <div>Tap <b>Share</b></div>
          <div><b>Add to Home Screen</b></div>
        </div>

        <a href="/v1" className="ios-beta-button">
          Open ZWAP!
        </a>

        <p className="ios-beta-note">Preview build</p>

        <button className="ios-beta-back" onClick={onBack}>
          Back
        </button>
      </div>

      <style>{`
        .ios-beta-shell {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(600px circle at 50% 40%, rgba(34,211,238,0.12), transparent 60%),
            radial-gradient(500px circle at 60% 60%, rgba(168,85,247,0.10), transparent 65%),
            #02040a;
          padding: 16px;
        }

        .ios-beta-card {
          width: 100%;
          max-width: 340px;
          padding: 24px 18px;
          border-radius: 24px;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(34,211,238,0.15);
          box-shadow:
            0 0 40px rgba(34,211,238,0.08),
            inset 0 0 20px rgba(168,85,247,0.05);
          backdrop-filter: blur(12px);
          text-align: center;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .ios-beta-title {
          font-size: 26px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .ios-beta-sub {
          font-size: 12px;
          opacity: 0.65;
          margin-bottom: 18px;
        }

        .ios-beta-steps {
          text-align: left;
          font-size: 13px;
          line-height: 1.6;
          margin-bottom: 18px;
          opacity: 0.9;
        }

        .ios-beta-steps div {
          margin-bottom: 4px;
        }

        .ios-beta-button {
          display: block;
          width: 100%;
          padding: 12px;
          border-radius: 14px;
          background: linear-gradient(90deg, #22d3ee, #a855f7);
          color: black;
          font-weight: 700;
          text-decoration: none;
          box-shadow:
            0 0 18px rgba(34,211,238,0.35),
            0 0 28px rgba(168,85,247,0.25);
        }

        .ios-beta-note {
          margin-top: 14px;
          font-size: 11px;
          opacity: 0.5;
        }

        .ios-beta-back {
          margin-top: 16px;
          font-size: 12px;
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}