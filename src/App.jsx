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
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          alignItems: "center",
          minHeight: "calc(100vh - 96px)",
          padding: "0 48px 64px",
          gap: "24px",
        }}
      >
        {/* LEFT */}
        <section
          style={{
            maxWidth: "540px",
            paddingTop: "20px",
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
              fontWeight: 500,
            }}
          >
            Move. Play. Swap. Shop.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.5",
              opacity: 0.65,
              marginBottom: "26px",
              maxWidth: "440px",
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
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              marginBottom: "22px",
            }}
          >
            Get Early Access
          </button>

          <div style={{ display: "flex", gap: "14px", opacity: 0.7 }}>
            <span>X</span>
            <span>TikTok</span>
          </div>
        </section>

        {/* RIGHT */}
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
              width: "420px",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </section>
      </main>
    </div>
  );
}