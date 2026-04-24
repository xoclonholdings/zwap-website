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

  /* ---------- NEW SECTION ---------- */

  .gradient-zwap {
    font-weight: 800;
    background: linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .landing-latest {
    width: 100%;
    margin-top: 28px;
    padding: 22px 14px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }

  .landing-latest-head {
    text-align: center;
    max-width: 520px;
  }

  .landing-latest-eyebrow {
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(245,247,255,0.52);
    margin-bottom: 8px;
  }

  .landing-latest-title {
    font-size: clamp(22px, 6vw, 32px);
    font-weight: 900;
    letter-spacing: -0.03em;
    margin: 0 0 8px;
  }

  .landing-latest-sub {
    font-size: 14px;
    color: rgba(235,239,255,0.72);
    line-height: 1.6;
  }

  .landing-latest-grid {
    width: 100%;
    display: grid;
    gap: 14px;
  }

  .landing-latest-card {
    border-radius: 22px;
    border: 1px solid rgba(255,255,255,0.08);
    background:
      radial-gradient(circle at top right, rgba(180,134,255,0.12), transparent 30%),
      rgba(255,255,255,0.03);
    padding: 16px;
    text-align: left;
  }

  .landing-latest-card.is-featured {
    border-color: rgba(103,242,255,0.22);
  }

  .landing-latest-card h3 {
    margin: 0 0 8px;
    font-size: 18px;
    font-weight: 900;
  }

  .landing-latest-card p {
    font-size: 13px;
    color: rgba(235,239,255,0.72);
  }

  .landing-latest-meta {
    margin-top: 10px;
    font-size: 11px;
    color: rgba(235,239,255,0.55);
    display: flex;
    gap: 6px;
  }

  .landing-latest-actions {
    display: flex;
    gap: 12px;
  }

  .landing-latest-actions button {
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.12);
    background: rgba(255,255,255,0.04);
    color: #F8FAFF;
    padding: 10px 16px;
    font-weight: 800;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .landing-latest-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1100px) {
    .landing-latest-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default appStyles;