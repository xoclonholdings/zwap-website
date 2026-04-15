const appStyles = `
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

  .landing-footer-links button {
    color: inherit;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font: inherit;
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
`;

export default appStyles;