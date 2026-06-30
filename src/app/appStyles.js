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

  .landing-hero-eyebrow {
    margin-bottom: 18px;
    font-size: clamp(13px, 3.45vw, 15px);
    line-height: 1.45;
    font-weight: 900;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(103,242,255,0.88);
  }

  .landing-title-top {
    margin: 0;
    font-size: clamp(33px, 10.4vw, 56px);
    line-height: 1.02;
    font-weight: 600;
    letter-spacing: -0.045em;
    color: #F7F8FF;
  }

  .landing-title-category {
    display: block;
    margin-top: 10px;
    width: 100%;
    white-space: nowrap;
    font-size: clamp(43px, 11.4vw, 74px);
    line-height: 0.94;
    font-weight: 950;
    letter-spacing: -0.035em;
    text-transform: uppercase;
    background: linear-gradient(90deg, #FFD77D 0%, #FFBFA4 28%, #EEA7D7 62%, #B7B4FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .landing-title-top strong {
    font-weight: 900;
  }

  .landing-title-bottom {
    display: none;
  }

  .landing-feature-list {
    width: min(100%, 360px);
    margin: 28px auto 0;
    display: grid;
    gap: 16px;
    text-align: left;
  }

  .landing-feature-item {
    display: grid;
    grid-template-columns: 54px 1fr;
    align-items: center;
    gap: 14px;
    font-size: clamp(18px, 5vw, 24px);
    line-height: 1.18;
    font-weight: 600;
    letter-spacing: -0.03em;
    color: rgba(247,248,255,0.76);
  }

  .landing-feature-icon {
    width: 54px;
    height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: rgba(103,242,255,0.92);
    filter: saturate(0) sepia(1) hue-rotate(135deg) saturate(5) brightness(1.25);
  }

  .landing-title-accent {
    font-weight: 800;
    background: linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .landing-sub {
    margin: 18px 0 0 0;
    max-width: 360px;
    font-size: clamp(16px, 4.4vw, 19px);
    line-height: 1.45;
    color: rgba(235, 239, 255, 0.74);
    font-style: italic;
  }

  .landing-sub-anchor {
    max-width: 430px;
    margin-top: 30px;
    font-size: clamp(25px, 7.1vw, 40px);
    line-height: 1.12;
    font-weight: 900;
    letter-spacing: -0.045em;
    color: #F8FAFF;
    font-style: normal;
  }

  .landing-sub + .landing-sub {
    margin-top: 12px;
    margin-bottom: 22px;
    color: rgba(235, 239, 255, 0.62);
  }

  .landing-cta-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .landing-cta-group > div:not(.landing-socials) {
    display: none !important;
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

  .gradient-zwap {
    font-weight: 800;
    background: linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .landing-powered {
    display: none !important;
  }

  .landing-trust {
    width: 100%;
    margin: 26px auto 0;
    padding: 18px 16px;
    border-radius: 24px;
    border: 1px solid rgba(103,242,255,0.16);
    background:
      radial-gradient(circle at top right, rgba(102,242,255,0.10), transparent 34%),
      radial-gradient(circle at bottom left, rgba(180,134,255,0.10), transparent 36%),
      rgba(255,255,255,0.035);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.06),
      0 16px 34px rgba(0,0,0,0.22);
    text-align: left;
  }

  .landing-trust-eyebrow,
  .landing-powered-eyebrow {
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(103,242,255,0.70);
  }

  .landing-powered-eyebrow {
    color: rgba(255,103,212,0.72);
  }

  .landing-trust-title,
  .landing-powered-title {
    margin: 0 0 8px;
    font-size: clamp(20px, 5.5vw, 28px);
    line-height: 1.08;
    font-weight: 900;
    letter-spacing: -0.03em;
    color: #F8FAFF;
  }

  .landing-trust-title-spaced {
    margin-top: 16px;
  }

  .landing-trust-copy,
  .landing-powered-copy {
    margin: 0;
    font-size: 14px;
    line-height: 1.62;
    color: rgba(235,239,255,0.72);
  }

  .landing-trust-points {
    margin: 14px 0 0;
    padding: 0;
    display: grid;
    gap: 10px;
    list-style: none;
  }

  .landing-trust-points li {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    font-size: 13px;
    line-height: 1.45;
    color: rgba(235,239,255,0.74);
  }

  .landing-trust-points li::before {
    content: "";
    width: 7px;
    height: 7px;
    margin-top: 6px;
    flex: 0 0 auto;
    border-radius: 999px;
    background: linear-gradient(90deg, #66F2FF, #B486FF, #FF67D4);
    box-shadow: 0 0 12px rgba(103,242,255,0.40);
  }

  .landing-powered-grid {
    margin-top: 14px;
    display: grid;
    gap: 10px;
  }

  .landing-powered-card {
    padding: 13px 13px 12px;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.032);
  }

  .landing-powered-card h3 {
    margin: 0 0 6px;
    font-size: 14px;
    line-height: 1.15;
    font-weight: 900;
    color: #F8FAFF;
  }

  .landing-powered-card p {
    margin: 0;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(235,239,255,0.68);
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
    .landing-trust {
      max-width: 680px;
      padding: 22px 20px;
    }

    .landing-trust-points,
    .landing-powered-grid {
      grid-template-columns: repeat(3, 1fr);
    }

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
