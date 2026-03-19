import logo from "./assets/Zwap_logo_full.png";
import heroPhoneMockup from "./assets/hero_phone_mockup.png";

function GooglePlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 2L14.5 12L3 22L3 2Z" fill="#00D1FF" />
      <path d="M14.5 12L18 8.8L21 10.4C22 10.95 22 12.05 21 12.6L18 14.2L14.5 12Z" fill="#7C5CFF" />
      <path d="M3 2L11.2 10.2L14.5 12L3 2Z" fill="#3DFF8F" />
      <path d="M3 22L11.2 13.8L14.5 12L3 22Z" fill="#FF4FD8" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.7 12.9c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.7-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 6.9 1.1 9 .7 1 1.6 2.2 2.8 2.1 1.1 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-.1 2.7-1.1.8-1 1.2-2 1.2-2.1-.1 0-2.3-.9-2.3-5.1ZM14.5 6.4c.6-.7 1-1.7.9-2.6-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.6-1 2.5 1 .1 2-.5 2.7-1.2Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.7L23 22h-6.1l-4.8-6.3L6.5 22H3.4l7.3-8.3L1.2 2h6.2l4.3 5.7L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.6 8.8c-1.5-.1-2.8-.9-3.6-2.1v7.6c0 3.2-2.6 5.7-5.7 5.7s-5.7-2.6-5.7-5.7 2.6-5.7 5.7-5.7c.3 0 .6 0 .9.1v3c-.3-.1-.6-.2-.9-.2-1.5 0-2.7 1.2-2.7 2.7S8.8 17 10.3 17s2.7-1.2 2.7-2.7V2h3c.2 1.8 1.7 3.2 3.6 3.4v3.4Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      aria-hidden="true"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 8 8 6 8-6" />
    </svg>
  );
}

function Star({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        color: "#F8F9FF",
        fontSize: "16px",
        lineHeight: 1,
        textShadow: "0 0 14px rgba(255,255,255,0.95)",
        animation: "twinkle 3.2s ease-in-out infinite",
        ...style,
      }}
    >
      ✦
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        color: "#F5F7FF",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: `
          radial-gradient(circle at 74% 28%, rgba(214, 92, 255, 0.11), transparent 16%),
          radial-gradient(circle at 84% 30%, rgba(88, 240, 255, 0.10), transparent 14%),
          radial-gradient(circle at 64% 36%, rgba(255, 176, 86, 0.08), transparent 12%),
          linear-gradient(180deg, #030308 0%, #080913 58%, #04050A 100%)
        `,
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
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "0 42px",
          boxSizing: "border-box",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "28px 0 12px",
            position: "relative",
            zIndex: 3,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "132px",
              height: "58px",
            }}
          >
            <img
              src={logo}
              alt="ZWAP!"
              style={{
                width: "132px",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
            <Star style={{ top: "-2px", left: "8px", fontSize: "12px" }} />
            <Star style={{ top: "8px", right: "10px", fontSize: "10px", animationDelay: "0.8s" }} />
            <Star style={{ bottom: "8px", right: "2px", fontSize: "12px", animationDelay: "1.4s" }} />
          </div>

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "38px",
              fontSize: "17px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <a href="#" style={{ color: "#F5F7FF", textDecoration: "none" }}>
              About
            </a>
            <a href="#" style={{ color: "#F5F7FF", textDecoration: "none" }}>
              Features
            </a>
            <a href="#" style={{ color: "#F5F7FF", textDecoration: "none" }}>
              Download
            </a>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "11px",
                padding: "13px 24px",
                borderRadius: "999px",
                border: "1px solid rgba(174, 132, 255, 0.42)",
                background: "rgba(255,255,255,0.025)",
                color: "#FFFFFF",
                cursor: "pointer",
                fontSize: "17px",
                fontWeight: 500,
                boxShadow: "0 0 24px rgba(110, 90, 255, 0.08)",
              }}
            >
              <GooglePlayIcon />
              Google Play
            </button>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "11px",
                padding: "13px 24px",
                borderRadius: "999px",
                border: "1px solid rgba(174, 132, 255, 0.42)",
                background: "rgba(255,255,255,0.025)",
                color: "#FFFFFF",
                cursor: "pointer",
                fontSize: "17px",
                fontWeight: 500,
                boxShadow: "0 0 24px rgba(110, 90, 255, 0.08)",
              }}
            >
              <AppleIcon />
              App Store
            </button>
          </nav>
        </header>

        <div
          style={{
            height: "2px",
            width: "100%",
            margin: "0 0 10px 0",
            background:
              "linear-gradient(90deg, rgba(222, 78, 255, 0.38) 0%, rgba(255, 183, 92, 0.48) 28%, rgba(90, 241, 255, 0.46) 100%)",
            boxShadow:
              "0 0 16px rgba(212, 82, 255, 0.14), 0 0 14px rgba(92, 240, 255, 0.10)",
            opacity: 0.72,
          }}
        />

        <main
          style={{
            flex: 1,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            padding: "12px 0 22px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `
                  radial-gradient(circle at 72% 32%, rgba(204, 91, 255, 0.10), transparent 16%),
                  radial-gradient(circle at 82% 30%, rgba(88, 240, 255, 0.08), transparent 14%),
                  radial-gradient(circle at 60% 36%, rgba(255, 176, 86, 0.07), transparent 12%),
                  linear-gradient(180deg, rgba(4,4,9,0) 0%, rgba(8,9,19,0.08) 100%)
                `,
              }}
            />
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "grid",
              gridTemplateColumns: "0.92fr 1.08fr",
              alignItems: "center",
              gap: "24px",
              width: "100%",
            }}
          >
            <section
              style={{
                maxWidth: "520px",
                paddingTop: "6px",
                paddingLeft: "12px",
              }}
            >
              <h1
                style={{
                  margin: "0 0 18px 0",
                  fontSize: "56px",
                  lineHeight: "1.08",
                  fontWeight: 400,
                  letterSpacing: "-1.3px",
                  color: "#F7F8FF",
                }}
              >
                Most apps waste your time.
                <br />
                <span
                  style={{
                    fontWeight: 700,
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
                  margin: "0 0 24px 0",
                  maxWidth: "420px",
                  fontSize: "18px",
                  lineHeight: "1.55",
                  color: "rgba(235, 239, 255, 0.74)",
                }}
              >
                It's giving...smarter not harder. 
              </p>

              <button
                style={{
                  padding: "16px 34px",
                  borderRadius: "999px",
                  border: "1px solid rgba(165, 103, 255, 0.72)",
                  background:
                    "linear-gradient(180deg, rgba(14,16,30,0.92) 0%, rgba(8,10,22,0.96) 100%)",
                  color: "#F9FAFF",
                  fontSize: "17px",
                  fontWeight: 500,
                  cursor: "pointer",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              >
                Lock In. Early
              </button>

              <div
                style={{
                  marginTop: "18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  color: "rgba(245,247,255,0.94)",
                }}
              >
                <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                  <XIcon />
                </a>
                <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                  <TikTokIcon />
                </a>
                <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                  <MailIcon />
                </a>
              </div>
            </section>

            <section
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "650px",
                position: "relative",
              }}
            >
              <img
                src={heroPhoneMockup}
                alt="ZWAP! app hero mockup"
                style={{
                  width: "760px",
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                  animation: "floatMockup 5.2s ease-in-out infinite",
                  filter: "drop-shadow(0 0 26px rgba(130, 88, 255, 0.12))",
                }}
              />
            </section>
          </div>
        </main>

        <footer
          style={{
            padding: "18px 0 26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "rgba(236, 240, 255, 0.72)",
            fontSize: "15px",
          }}
        >
          <div style={{ display: "flex", gap: "22px" }}>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Terms of Service
            </a>
          </div>

          <div>© 2026 ZWAP!™. All rights reserved. Owned by ZWAP LLC.</div>
        </footer>
      </div>
    </div>
  );
}