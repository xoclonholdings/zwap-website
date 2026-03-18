import logo from "./assets/Zwap_logo_full.png";
import bang from "./assets/Zwap_bang_3d.png";

export default function App() {
  return (
    <div
      style={{
        background: "#050505",
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
          padding: "24px 40px",
        }}
      >
        <div>
          <img
            src={logo}
            alt="ZWAP logo"
            style={{ width: "150px", height: "auto" }}
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
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          alignItems: "center",
          minHeight: "calc(100vh - 90px)",
          padding: "20px 40px 60px",
          gap: "20px",
        }}
      >
        <section style={{ maxWidth: "560px" }}>
          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.05",
              margin: "0 0 20px 0",
              fontWeight: 700,
            }}
          >
            Most apps waste your time.
            <br />
            ZWAP turns it into rewards.
          </h1>

          <p
            style={{
              fontSize: "22px",
              opacity: 0.85,
              margin: "0 0 14px 0",
            }}
          >
            Move. Play. Swap. Shop.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.5",
              opacity: 0.65,
              marginBottom: "28px",
              maxWidth: "480px",
            }}
          >
            Earn from steps, games, and daily activity.
          </p>

          <button
            style={{
              padding: "16px 28px",
              borderRadius: "14px",
              border: "none",
              background: "white",
              color: "black",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              marginBottom: "24px",
            }}
          >
            Get Early Access
          </button>

          <div style={{ display: "flex", gap: "16px", opacity: 0.8 }}>
            <span>X</span>
            <span>TikTok</span>
          </div>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={bang}
            alt="ZWAP bang symbol"
            style={{
              width: "360px",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </section>
      </main>
    </div>
  );
}