import logo from "./assets/Zwap_logo_full.png";
import bang from "./assets/Zwap_bang_3d.png";

export default function App() {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle at 70% 40%, rgba(90, 50, 180, 0.16), transparent 28%), #050505",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "26px 48px",
        }}
      >
        <div>
          <img
            src={logo}
            alt="ZWAP logo"
            style={{ width: "170px", height: "auto" }}
          />
        </div>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            fontSize: "16px",
          }}
        >
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Download
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>

          <button
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.25)",
              background: "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            Google Play
          </button>

          <button
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.25)",
              background: "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            Apple
          </button>
        </nav>
      </header>

      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 96px)",
          padding: "0 24px 64px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            gap: "40px",
          }}
        >
          <section
            style={{
              maxWidth: "520px",
            }}
          >
            <h1
              style={{
                fontSize: "56px",
                lineHeight: "1.08",
                margin: "0 0 20px 0",
                fontWeight: 700,
                color: "rgba(255,255,255,0.92)",
                letterSpacing: "-1px",
              }}
            >
              Most apps waste your time.
              <br />
              ZWAP turns it into rewards.
            </h1>

            <p
              style={{
                fontSize: "20px",
                opacity: 0.9,
                margin: "0 0 10px 0",
              }}
            >
              Move. Play. Swap. Shop.
            </p>

            <p
              style={{
                fontSize: "16px",
                opacity: 0.65,
                marginBottom: "26px",
                lineHeight: "1.5",
              }}
            >
              Earn from steps, games, and daily activity.
            </p>

            <button
              style={{
                padding: "14px 24px",
                borderRadius: "12px",
                border: "none",
                background: "white",
                color: "black",
                fontWeight: 600,
                cursor: "pointer",
                marginBottom: "20px",
              }}
            >
              Get Early Access
            </button>

            <div style={{ display: "flex", gap: "14px", opacity: 0.7 }}>
              <span>X</span>
              <span>TikTok</span>
            </div>
          </section>

          <section
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={bang}
              alt="ZWAP bang"
              style={{
                width: "460px",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </section>
        </div>
      </main>
    </div>
  );
}