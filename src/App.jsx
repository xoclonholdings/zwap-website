import logo from "./assets/Zwap_logo_full.png";
import bang from "./assets/Zwap_bang_3d.png";

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
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.7L23 22h-6.1l-4.8-6.3L6.5 22H3.4l7.3-8.3L1.2 2h6.2l4.3 5.7L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.6 8.8c-1.5-.1-2.8-.9-3.6-2.1v7.6c0 3.2-2.6 5.7-5.7 5.7s-5.7-2.6-5.7-5.7 2.6-5.7 5.7-5.7c.3 0 .6 0 .9.1v3c-.3-.1-.6-.2-.9-.2-1.5 0-2.7 1.2-2.7 2.7S8.8 17 10.3 17s2.7-1.2 2.7-2.7V2h3c.2 1.8 1.7 3.2 3.6 3.4v3.4Z" />
    </svg>
  );
}

function Star({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        color: "#F8F9FF",
        fontSize: "18px",
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
          radial-gradient(circle at 78% 36%, rgba(84, 239, 238, 0.12), transparent 12%),
          radial-gradient(circle at 66% 34%, rgba(255, 171, 74, 0.10), transparent 10%),
          radial-gradient(circle at 70% 30%, rgba(207, 90, 255, 0.12), transparent 18%),
          radial-gradient(circle at 18% 80%, rgba(61, 205, 255, 0.06), transparent 18%),
          linear-gradient(180deg, #040409 0%, #080914 55%, #05060A 100%)
        `,
      }}
    >
      <style>{`
        @keyframes floatBang {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes pulseGlow {
          0% { opacity: 0.75; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.015); }
          100% { opacity: 0.75; transform: scale(1); }
        }

        @keyframes twinkle {
          0% { opacity: 0.45; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.08); }
          100% { opacity: 0.45; transform: scale(0.9); }
        }

        @keyframes shimmer {
          0% { box-shadow: 0 0 18px rgba(115, 88, 255, 0.28), 0 0 28px rgba(226, 74, 255, 0.10); }
          50% { box-shadow: 0 0 26px rgba(115, 88, 255, 0.38), 0 0 38px rgba(226, 74, 255, 0.18); }
          100% { box-shadow: 0 0 18px rgba(115, 88, 255, 0.28), 0 0 28px rgba(226, 74, 255, 0.10); }
        }
      `}</style>

      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "0 42px",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "28px 0 18px",
          }}
        >
          <img
            src={logo}
            alt="ZWAP!"
            style={{
              width: "118px",
              height: "auto",
              objectFit: "contain",
            }}
          />

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "34px",
              fontSize: "18px",
              fontWeight: 500,
              letterSpacing: "-0.2px",
            }}
          >
            <a href="#" style={{ color: "#F5F7FF", textDecoration: "none" }}>
              About
            </a>
            <a href="#" style={{ color: "#F5F7FF", textDecoration: "none" }}>
              Download
            </a>
            <a href="#" style={{ color: "#F5F7FF", textDecoration: "none" }}>
              Contact
            </a>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "13px 22px",
                borderRadius: "999px",
                border: "1px solid rgba(174, 132, 255, 0.42)",
                background: "rgba(255,255,255,0.025)",
                color: "#FFFFFF",
                cursor: "pointer",
                fontSize: "17px",
                fontWeight: 500,
              }}
            >
              <GooglePlayIcon />
              Google Play
            </button>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "13px 22px",
                borderRadius: "999px",
                border: "1px solid rgba(174, 132, 255, 0.42)",
                background: "rgba(255,255,255,0.025)",
                color: "#FFFFFF",
                cursor: "pointer",
                fontSize: "17px",
                fontWeight: 500,
              }}
            >
              <AppleIcon />
              App Store
            </button>
          </nav>
        </header>

        <main
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            alignItems: "center",
            gap: "30px",
            padding: "8px 0 26px",
          }}
        >
          <section
            style={{
              maxWidth: "545px",
              paddingTop: "6px",
              zIndex: 2,
            }}
          >
            <h1
              style={{
                margin: "0 0 22px 0",
                fontSize: "58px",
                lineHeight: "1.06",
                fontWeight: 400,
                letterSpacing: "-1.4px",
                color: "#F7F8FF",
              }}
            >
              Most apps waste your time.
              <br />
              <span style={{ fontWeight: 700 }}>ZWAP!</span> turns it into rewards.
            </h1>

            <p
              style={{
                margin: "0 0 30px 0",
                maxWidth: "430px",
                fontSize: "18px",
                lineHeight: "1.58",
                color: "rgba(235, 239, 255, 0.74)",
              }}
            >
              Earn from steps, games, and daily activity.
            </p>

            <button
              style={{
                padding: "17px 34px",
                borderRadius: "999px",
                border: "1px solid rgba(165, 103, 255, 0.72)",
                background:
                  "linear-gradient(180deg, rgba(13,15,30,0.92) 0%, rgba(8,10,22,0.96) 100%)",
                color: "#F9FAFF",
                fontSize: "17px",
                fontWeight: 500,
                cursor: "pointer",
                animation: "shimmer 3s ease-in-out infinite",
              }}
            >
              Get Early Access
            </button>

            <div
              style={{
                marginTop: "24px",
                display: "flex",
                alignItems: "center",
                gap: "18px",
                color: "rgba(245,247,255,0.94)",
              }}
            >
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  border: "1px solid rgba(174, 132, 255, 0.22)",
                  background: "rgba(255,255,255,0.02)",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <XIcon />
              </a>

              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  border: "1px solid rgba(174, 132, 255, 0.22)",
                  background: "rgba(255,255,255,0.02)",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <TikTokIcon />
              </a>
            </div>
          </section>

          <section
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "640px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "620px",
                height: "620px",
                borderRadius: "50%",
                background:
                  "conic-gradient(from 210deg, #FFB056 0deg, #D24DFF 130deg, #63F3FF 275deg, #FFB056 360deg)",
                WebkitMask:
                  "radial-gradient(circle, transparent 71%, black 72%, black 75%, transparent 76%)",
                mask:
                  "radial-gradient(circle, transparent 71%, black 72%, black 75%, transparent 76%)",
                opacity: 0.98,
                animation: "pulseGlow 4.2s ease-in-out infinite",
                filter: "blur(0.2px)",
              }}
            />

            <div
              style={{
                position: "absolute",
                width: "560px",
                height: "560px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(203, 89, 255, 0.16) 0%, rgba(86, 221, 255, 0.10) 42%, transparent 72%)",
                filter: "blur(24px)",
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "116px",
                width: "700px",
                height: "4px",
                background:
                  "linear-gradient(90deg, rgba(222, 78, 255, 0.82) 0%, rgba(255, 183, 92, 0.92) 28%, rgba(90, 241, 255, 0.88) 100%)",
                boxShadow:
                  "0 0 26px rgba(212, 82, 255, 0.24), 0 0 24px rgba(92, 240, 255, 0.18)",
                opacity: 0.85,
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: "18px",
                width: "520px",
                height: "160px",
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse at center, rgba(192, 86, 255, 0.18) 0%, rgba(88, 240, 255, 0.10) 34%, transparent 72%)",
                transform: "rotateX(72deg)",
                filter: "blur(18px)",
                opacity: 0.75,
              }}
            />

            <Star style={{ top: "88px", left: "110px", fontSize: "16px" }} />
            <Star style={{ top: "160px", right: "122px", fontSize: "18px" }} />
            <Star style={{ bottom: "196px", left: "132px", fontSize: "20px" }} />
            <Star style={{ bottom: "216px", right: "164px", fontSize: "16px" }} />
            <Star style={{ top: "252px", left: "188px", fontSize: "14px" }} />

            <img
              src={bang}
              alt="ZWAP! bang"
              style={{
                width: "360px",
                maxWidth: "100%",
                height: "auto",
                position: "relative",
                zIndex: 2,
                animation: "floatBang 4.6s ease-in-out infinite",
                filter:
                  "drop-shadow(0 0 22px rgba(113, 111, 255, 0.30)) drop-shadow(0 0 32px rgba(214, 92, 255, 0.16))",
              }}
            />
          </section>
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
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Contact
            </a>
          </div>

          <div>© ZWAP!</div>
        </footer>
      </div>
    </div>
  );
}