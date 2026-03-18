import logo from "./assets/Zwap_logo_full.png";
import bang from "./assets/Zwap_bang_3d.png";

function GooglePlayIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 2L14.5 12L3 22L3 2Z" fill="#00D1FF" />
      <path d="M14.5 12L18 8.8L21 10.4C22 10.95 22 12.05 21 12.6L18 14.2L14.5 12Z" fill="#7C5CFF" />
      <path d="M3 2L11.2 10.2L14.5 12L3 2Z" fill="#3DFF8F" />
      <path d="M3 22L11.2 13.8L14.5 12L3 22Z" fill="#FF4FD8" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
        textShadow: "0 0 12px rgba(255,255,255,0.85)",
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
          radial-gradient(circle at 77% 38%, rgba(92, 235, 236, 0.16), transparent 12%),
          radial-gradient(circle at 64% 34%, rgba(255, 147, 72, 0.18), transparent 10%),
          radial-gradient(circle at 70% 32%, rgba(207, 90, 255, 0.18), transparent 18%),
          radial-gradient(circle at 70% 72%, rgba(80, 214, 255, 0.08), transparent 18%),
          linear-gradient(180deg, #040409 0%, #080914 55%, #05060A 100%)
        `,
      }}
    >
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
              width: "120px",
              height: "auto",
              objectFit: "contain",
            }}
          />

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "34px",
              fontSize: "17px",
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
                gap: "9px",
                padding: "12px 20px",
                borderRadius: "999px",
                border: "1px solid rgba(174, 132, 255, 0.38)",
                background: "rgba(255,255,255,0.02)",
                color: "#FFFFFF",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: 500,
                boxShadow: "0 0 0 1px rgba(255,255,255,0.03) inset",
              }}
            >
              <GooglePlayIcon />
              Google Play
            </button>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                padding: "12px 20px",
                borderRadius: "999px",
                border: "1px solid rgba(174, 132, 255, 0.38)",
                background: "rgba(255,255,255,0.02)",
                color: "#FFFFFF",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: 500,
                boxShadow: "0 0 0 1px rgba(255,255,255,0.03) inset",
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
            gap: "28px",
            padding: "8px 0 30px",
          }}
        >
          <section
            style={{
              maxWidth: "560px",
              paddingTop: "8px",
              zIndex: 2,
            }}
          >
            <h1
              style={{
                margin: "0 0 20px 0",
                fontSize: "60px",
                lineHeight: "1.06",
                fontWeight: 400,
                letterSpacing: "-1.5px",
                color: "#F7F8FF",
              }}
            >
              Most apps waste your time.
              <br />
              <span style={{ fontWeight: 700 }}>ZWAP</span> turns it into rewards.
            </h1>

            <p
              style={{
                margin: "0 0 34px 0",
                maxWidth: "450px",
                fontSize: "18px",
                lineHeight: "1.58",
                color: "rgba(235, 239, 255, 0.74)",
              }}
            >
              Earn from steps, games, and daily activity.
            </p>

            <button
              style={{
                padding: "16px 34px",
                borderRadius: "999px",
                border: "1px solid rgba(170, 106, 255, 0.65)",
                background:
                  "linear-gradient(180deg, rgba(16,17,28,0.9) 0%, rgba(8,9,18,0.95) 100%)",
                color: "#F9FAFF",
                fontSize: "18px",
                fontWeight: 500,
                cursor: "pointer",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.04) inset, 0 0 24px rgba(115, 88, 255, 0.35), 0 0 36px rgba(226, 74, 255, 0.16)",
              }}
            >
              Get Early Access
            </button>

            <div
              style={{
                marginTop: "22px",
                display: "flex",
                alignItems: "center",
                gap: "18px",
                color: "rgba(245,247,255,0.9)",
              }}
            >
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "14px",
                  border: "1px solid rgba(174, 132, 255, 0.18)",
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
                  width: "44px",
                  height: "44px",
                  borderRadius: "14px",
                  border: "1px solid rgba(174, 132, 255, 0.18)",
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
              minHeight: "620px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "620px",
                height: "620px",
                borderRadius: "999px",
                border: "3px solid transparent",
                background:
                  "linear-gradient(#0000, #0000) padding-box, linear-gradient(135deg, #FFAC4A 0%, #D447FF 42%, #58F0FF 100%) border-box",
                filter: "blur(0.2px)",
                opacity: 0.95,
              }}
            />

            <div
              style={{
                position: "absolute",
                width: "660px",
                height: "220px",
                bottom: "40px",
                background:
                  "radial-gradient(ellipse at center, rgba(179, 84, 255, 0.22) 0%, rgba(88, 240, 255, 0.14) 34%, transparent 72%)",
                filter: "blur(14px)",
              }}
            />

            <div
              style={{
                position: "absolute",
                width: "700px",
                height: "2px",
                bottom: "110px",
                background:
                  "linear-gradient(90deg, rgba(221, 74, 255, 0.75) 0%, rgba(255, 177, 86, 0.92) 26%, rgba(92, 240, 255, 0.86) 100%)",
                opacity: 0.85,
                boxShadow:
                  "0 0 24px rgba(212, 82, 255, 0.24), 0 0 22px rgba(92, 240, 255, 0.18)",
              }}
            />

            <div
              style={{
                position: "absolute",
                width: "560px",
                height: "560px",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(201, 92, 255, 0.14) 0%, rgba(88, 109, 255, 0.09) 42%, transparent 72%)",
                filter: "blur(24px)",
              }}
            />

            <Star style={{ top: "88px", left: "120px", fontSize: "16px" }} />
            <Star style={{ top: "148px", right: "128px", fontSize: "18px" }} />
            <Star style={{ bottom: "182px", left: "140px", fontSize: "20px" }} />
            <Star style={{ bottom: "210px", right: "170px", fontSize: "16px" }} />
            <Star style={{ top: "240px", left: "188px", fontSize: "14px" }} />

            <img
              src={bang}
              alt="ZWAP! bang"
              style={{
                width: "360px",
                maxWidth: "100%",
                height: "auto",
                position: "relative",
                zIndex: 2,
                filter:
                  "drop-shadow(0 0 22px rgba(113, 111, 255, 0.32)) drop-shadow(0 0 32px rgba(214, 92, 255, 0.14))",
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
            color: "rgba(236, 240, 255, 0.68)",
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