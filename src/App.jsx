import logo from "./assets/Zwap_logo_full.png";
import googlePlayLogo from "./assets/google_play_logo.png";
import heroPhoneMockup from "./assets/hero_phone_mockup.png";

/* ---------- ICONS ---------- */

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.7 12.9c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.7-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 6.9 1.1 9 .7 1 1.6 2.2 2.8 2.1 1.1 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-.1 2.7-1.1.8-1 1.2-2 1.2-2.1-.1 0-2.3-.9-2.3-5.1ZM14.5 6.4c.6-.7 1-1.7.9-2.6-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.6-1 2.5 1 .1 2-.5 2.7-1.2Z" />
    </svg>
  );
}

/* ---------- BUTTON STYLE (REAL 3D) ---------- */

const button3D = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "12px 22px",
  borderRadius: "999px",
  fontWeight: 600,
  fontSize: "16px",
  color: "#F9FAFF",
  cursor: "pointer",

  background:
    "linear-gradient(180deg, #1d2147 0%, #0c0f25 100%)",

  border: "2px solid rgba(150,120,255,0.7)",

  boxShadow: `
    0 6px 18px rgba(0,0,0,0.6),
    0 0 14px rgba(130,90,255,0.25),
    inset 0 1px 0 rgba(255,255,255,0.18),
    inset 0 -3px 6px rgba(0,0,0,0.7)
  `,

  transition: "all 0.15s ease",
};

/* ---------- APP ---------- */

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        color: "#F5F7FF",
        fontFamily: "Inter, system-ui, sans-serif",
        background:
          "linear-gradient(180deg, #030308 0%, #080913 60%, #04050A 100%)",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "28px 40px 10px",
        }}
      >
        <img src={logo} style={{ width: 120 }} />

        <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
          <span>ABOUT</span>
          <span>FEATURES</span>
          <span>DOWNLOAD</span>

          {/* GOOGLE */}
          <button
            style={button3D}
            onMouseDown={(e) => press(e)}
            onMouseUp={(e) => release(e)}
            onMouseLeave={(e) => release(e)}
          >
            <img
              src={googlePlayLogo}
              style={{ width: 22, height: 22 }}
            />
            Google Play
          </button>

          {/* APPLE */}
          <button
            style={button3D}
            onMouseDown={(e) => press(e)}
            onMouseUp={(e) => release(e)}
            onMouseLeave={(e) => release(e)}
          >
            <AppleIcon />
            App Store
          </button>
        </nav>
      </header>

      {/* LINE */}
      <div
        style={{
          height: 2,
          marginLeft: 150,
          marginRight: 40,
          background: "linear-gradient(90deg,#ff4fd8,#6cf0ff)",
          opacity: 0.6,
        }}
      />

      {/* MAIN */}
      <div style={{ display: "flex", padding: "60px 40px" }}>
        {/* LEFT */}
        <div style={{ maxWidth: 520 }}>
          <h1 style={{ fontSize: 50, fontWeight: 300 }}>
            Most apps waste your time.
            <br />
            <span
              style={{
                fontWeight: 700,
                background:
                  "linear-gradient(90deg,#66F2FF,#B486FF,#FF67D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ZWAP!
            </span>{" "}
            turns it into rewards.
          </h1>

          <p style={{ opacity: 0.7, marginTop: 16 }}>
            It’s giving...smarter not harder.
          </p>

          {/* CTA */}
          <div style={{ marginTop: 24 }}>
            <button
              style={{
                ...button3D,
                padding: "16px 34px",
                fontSize: "18px",
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background:
                  "linear-gradient(180deg,#2a2f75 0%,#0d1030 100%)",
                boxShadow: `
                  0 8px 22px rgba(0,0,0,0.7),
                  0 0 18px rgba(150,100,255,0.35),
                  inset 0 2px 0 rgba(255,255,255,0.25),
                  inset 0 -4px 8px rgba(0,0,0,0.8)
                `,
              }}
              onMouseDown={(e) => press(e)}
              onMouseUp={(e) => release(e)}
              onMouseLeave={(e) => release(e)}
            >
              Lock In. Early.
            </button>

            {/* SOCIAL */}
            <div style={{ display: "flex", gap: 24, marginTop: 16 }}>
              <span style={{ fontSize: 22 }}>X</span>
              <span style={{ fontSize: 22 }}>♪</span>
              <span style={{ fontSize: 22 }}>✉</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={heroPhoneMockup}
            style={{
              width: 1000,
              marginTop: -30,
              marginBottom: -30,
            }}
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- BUTTON PRESS ---------- */

function press(e) {
  e.currentTarget.style.transform = "translateY(2px)";
  e.currentTarget.style.boxShadow =
    "inset 0 3px 8px rgba(0,0,0,0.9)";
}

function release(e) {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = button3D.boxShadow;
}