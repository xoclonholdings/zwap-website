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
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background:
      radial-gradient(circle at 22% 18%, rgba(103, 242, 255, 0.08), transparent 20%),
      radial-gradient(circle at 82% 22%, rgba(180, 134, 255, 0.11), transparent 18%),
      radial-gradient(circle at 72% 74%, rgba(255, 103, 212, 0.08), transparent 20%),
      linear-gradient(180deg, #030308 0%, #070812 52%, #03040A 100%);
  }

  .landing-app {
    width: 100%;
    max-width: 100%;
    min-height: 100dvh;
    padding:
      calc(env(safe-area-inset-top, 0px) + 8px)
      16px
      calc(env(safe-area-inset-bottom, 0px) + 24px);
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .landing-app::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(180deg, rgba(255,255,255,0.018) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: linear-gradient(180deg, rgba(0,0,0,0.6), transparent 62%);
    opacity: 0.22;
  }

  .landing-main {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 20px;
    padding-top: 8px;
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
    margin-bottom: 20px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    font-size: clamp(11px, 3.05vw, 14px);
    line-height: 1.45;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(103,242,255,0.92);
    text-shadow: 0 0 18px rgba(103,242,255,0.18);
  }

  .landing-title-top {
    width: 100%;
    margin: 0;
    color: #F7F8FF;
  }

  .landing-title-kicker {
    display: block;
    font-family: "Avenir Next", "Helvetica Neue", Inter, ui-sans-serif, system-ui, sans-serif;
    font-size: clamp(34px, 9.8vw, 56px);
    line-height: 0.98;
    font-weight: 700;
    letter-spacing: -0.064em;
  }

  .landing-title-category {
    display: block;
    margin: 9px auto 0;
    width: 100%;
    max-width: 690px;
    white-space: nowrap;
    font-family: "Avenir Next Condensed", "HelveticaNeue-CondensedBlack", "Arial Narrow", "Helvetica Neue", Inter, sans-serif;
    font-size: clamp(42px, 11.3vw, 86px);
    line-height: 0.9;
    font-weight: 900;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    background: linear-gradient(92deg, #FFD36E 0%, #FFC4A4 31%, #EFA2D4 61%, #B7B7FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .landing-title-bottom {
    display: none;
  }

  .landing-feature-list {
    width: min(100%, 324px);
    margin: 38px auto 0;
    display: grid;
    gap: 18px;
    text-align: left;
    transform: translateX(22px);
  }

  .landing-feature-item {
    display: grid;
    grid-template-columns: 38px 1fr;
    align-items: center;
    gap: 15px;
    font-family: "Avenir Next", "Helvetica Neue", Inter, ui-sans-serif, system-ui, sans-serif;
    font-size: clamp(18px, 4.9vw, 24px);
    line-height: 1.08;
    font-weight: 600;
    letter-spacing: -0.045em;
    color: rgba(247,248,255,0.72);
  }

  .landing-feature-icon {
    width: 38px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: rgba(103,242,255,0.92);
  }

  .landing-feature-icon svg {
    width: 36px;
    height: 36px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2.35;
    stroke-linecap: round;
    stroke-linejoin: round;
    filter: drop-shadow(0 0 8px rgba(103,242,255,0.30));
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
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(16px, 4.4vw, 19px);
    line-height: 1.42;
    color: rgba(235, 239, 255, 0.66);
    font-style: italic;
  }

  .landing-sub-anchor {
    max-width: 430px;
    margin-top: 34px;
    font-family: "Avenir Next", "Helvetica Neue", Inter, ui-sans-serif, system-ui, sans-serif;
    font-size: clamp(27px, 7.4vw, 42px);
    line-height: 1.04;
    font-weight: 850;
    letter-spacing: -0.058em;
    color: #F8FAFF;
    font-style: normal;
  }

  .landing-sub-reflection {
    margin-top: 18px;
    margin-bottom: 30px;
    max-width: 385px;
    color: rgba(235, 239, 255, 0.60);
  }

  .landing-sub + .landing-sub {
    margin-bottom: 30px;
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
    max-width: 304px;
    padding: 16px 28px;
    border-radius: 999px;
    border: 2px solid rgba(165, 103, 255, 0.82);
    background: linear-gradient(180deg, rgba(14,16,30,0.94) 0%, rgba(8,10,22,0.98) 100%);
    color: #F9FAFF;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    font-size: clamp(17px, 4.8vw, 20px);
    font-weight: 850;
    letter-spacing: 0.015em;
    cursor: pointer;
    animation: shimmer 3s ease-in-out infinite;
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.08),
      0 0 0 1px rgba(255,255,255,0.04),
      0 12px 32px rgba(126, 78, 255, 0.30);
  }

  .landing-socials {
    margin-top: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    width: auto;
    color: rgba(245,247,255,0.88);
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
    margin-top: 34px;
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
    font-weight: 900;
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
    margin: 30px auto 0;
    padding: 22px 18px;
    border-radius: 28px;
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
    margin-bottom: 10px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: rgba(103,242,255,0.76);
  }

  .landing-powered-eyebrow {
    color: rgba(255,103,212,0.72);
  }

  .landing-trust-title,
  .landing-powered-title {
    margin: 0 0 10px;
    font-family: "Avenir Next", "Helvetica Neue", Inter, ui-sans-serif, system-ui, sans-serif;
    font-size: clamp(22px, 6vw, 30px);
    line-height: 1.02;
    font-weight: 900;
    letter-spacing: -0.055em;
    color: #F8FAFF;
  }

  .landing-trust-title-spaced {
    margin-top: 22px;
  }

  .landing-trust-copy,
  .landing-powered-copy {
    margin: 0;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    font-size: 14px;
    line-height: 1.64;
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
    margin-top: 34px;
    padding: 24px 14px 10px;
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
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(245,247,255,0.52);
    margin-bottom: 8px;
  }

  .landing-latest-title {
    font-family: "Avenir Next", "Helvetica Neue", Inter, ui-sans-serif, system-ui, sans-serif;
    font-size: clamp(22px, 6vw, 32px);
    font-weight: 900;
    letter-spacing: -0.05em;
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

  @media (max-width: 380px) {
    .landing-feature-list {
      width: min(100%, 310px);
      transform: translateX(12px);
    }
  }

  @media (min-width: 768px) {
    .landing-trust {
      max-width: 680px;
      padding: 24px 22px;
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
