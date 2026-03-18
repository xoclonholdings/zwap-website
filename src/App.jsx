import logo from "./assets/Zwap_logo_full.png";
import bang from "./assets/Zwap_bang_3d.png";

function GooglePlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 2L14.5 12L3 22L3 2Z" fill="#00D1FF" />
      <path d="M14.5 12L18 8.8L21 10.4C22 10.95 22 12.05 21 12.6L18 14.2L14.5 12Z" fill="#7C5CFF" />
      <path d="M3 2L11.2 10.2L14.5 12L3 2Z" fill="#3DFF8F" />
      <path d="M3 22L11.2 13.8L14.5 12L3 22Z" fill="#FF4FD8" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.7 12.9c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.7-1.7-3.2-1.7-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 6.9 1.1 9 .7 1 1.6 2.2 2.8 2.1 1.1 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-.1 2.7-1.1.8-1 1.2-2 1.2-2.1-.1 0-2.3-.9-2.3-5.1ZM14.5 6.4c.6-.7 1-1.7.9-2.6-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.6-1 2.5 1 .1 2-.5 2.7-1.2Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.7L23 22h-6.1l-4.8-6.3L6.5 22H3.4l7.3-8.3L1.2 2h6.2l4.3 5.7L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.6 8.8c-1.5-.1-2.8-.9-3.6-2.1v7.6c0 3.2-2.6 5.7-5.7 5.7s-5.7-2.6-5.7-5.7 2.6-5.7 5.7-5.7c.3 0 .6 0 .9.1v3c-.3-.1-.6-.2-.9-.2-1.5 0-2.7 1.2-2.7 2.7S8.8 17 10.3 17s2.7-1.2 2.7-2.7V2h3c.2 1.8 1.7 3.2 3.6 3.4v3.4Z" />
    </svg>
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
          radial-gradient(circle at 72% 42%, rgba(88, 100, 255, 0.22), transparent 16%),
          radial-gradient(circle at 70% 42%, rgba(206, 81, 255, 0.14), transparent 26%),
          radial-gradient(circle at 24% 82%, rgba(84, 224, 255, 0.08), transparent 18%),
          linear-gradient(180deg, #07070B 0%, #090B12 45%, #06060A 100%)
        `,
      }}
    >
      <div
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "0 32px",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 0",
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
              gap: "24px",
              fontSize: "18px",
              fontWeight: 600,
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
                gap: "8px",
                padding: "11px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(138, 146, 255, 0.32)",
                background: "rgba(255,255,255,0.03)",
                color: "#FFFFFF",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: 600,
                boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset",
              }}
            >
              <GooglePlayIcon />
              Google Play
            </button>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(138, 146, 255, 0.32)",
                background: "rgba(255,255,255,0.03)",
                color: "#FFFFFF",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: 600,
                boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset",
              }}
            >
              <AppleIcon />
              Apple
            </button>
          </nav>
        </header>

        <main
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1.02fr 0.98fr",
            alignItems: "center",
            gap: "28px",
            padding: "16px 0 56px",
          }}
        >
          <section style={{ maxWidth: "590px" }}>
            <h1
              style={{
                margin: "0 0 18px 0",
                fontSize: "68px",
                lineHeight: "1.02",
                fontWeight: 800,
                letterSpacing: "-2px",
                color: "#F7F8FF",
                textShadow: "0 0 28px rgba(110, 122, 255, 0.08)",
              }}
            >
              Most apps waste your time.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, #DDE4FF 40%, #F6F7FF 100%)",
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
                margin: "0 0 10px 0",
                fontSize: "26px",
                fontWeight: 700,
                color: "#F5F7FF",
              }}
            >
              Move. Play. Swap. Shop.
            </p>

            <p
              style={{
                margin: "0 0 28px 0",
                maxWidth: "470px",
                fontSize: "18px",
                lineHeight: "1.55",
                color: "rgba(235, 239, 255, 0.72)",
              }}
            >
              Earn from steps, games, and daily activity.
            </p>

            <button
              style={{
                padding: "15px 26px",
                borderRadius: "14px",
                border: "1px solid rgba(152, 106, 255, 0.45)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(236,240,255,0.94) 100%)",
                color: "#090B12",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow:
                  "0 12px 30px rgba(106, 91, 255, 0.18), 0 0 24px rgba(208, 89, 255, 0.12)",
              }}
            >
              Get Early Access
            </button>

            <div
              style={{
                marginTop: "22px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                color: "rgba(245,247,255,0.82)",
              }}
            >
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                <XIcon />
                X
              </a>

              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                <TikTokIcon />
                TikTok
              </a>
            </div>
          </section>

          <section
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "540px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "420px",
                height: "420px",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(88, 109, 255, 0.16) 0%, rgba(201, 92, 255, 0.08) 38%, transparent 72%)",
                filter: "blur(10px)",
              }}
            />
            <img
              src={bang}
              alt="ZWAP! bang"
              style={{
                width: "460px",
                maxWidth: "100%",
                height: "auto",
                position: "relative",
                zIndex: 1,
                filter: "drop-shadow(0 0 28px rgba(113, 111, 255, 0.22))",
              }}
            />
          </section>
        </main>

        <footer
          style={{
            padding: "18px 0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "rgba(236, 240, 255, 0.58)",
            fontSize: "14px",
          }}
        >
          <div style={{ display: "flex", gap: "18px" }}>
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

          <div>© ZWAP!LLC </div>
        </footer>
      </div>
    </div>
  );
}