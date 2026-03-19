import logo from "./assets/Zwap_logo_full.png";
import heroPhoneMockup from "./assets/hero_phone_mockup.png";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#05060F", color: "#fff", fontFamily: "Inter, sans-serif" }}>

      {/* HEADER */}
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 40px 10px" }}>
        
        {/* LOGO */}
        <img src={logo} style={{ width: 110 }} />

        {/* NAV */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <span>ABOUT</span>
          <span>FEATURES</span>
          <span>DOWNLOAD</span>

          {/* GOOGLE */}
          <button style={btnStyle}>
            <span style={{ fontSize: 18 }}>▶</span>
            Google Play
          </button>

          {/* APPLE */}
          <button style={btnStyle}>
            <span style={{ fontSize: 18 }}></span>
            App Store
          </button>
        </div>
      </header>

      {/* HEADER LINE (FIXED START) */}
      <div
        style={{
          height: 2,
          marginLeft: 150, // 👈 THIS IS THE FIX
          marginRight: 40,
          background: "linear-gradient(90deg,#ff4fd8,#6cf0ff)",
          opacity: 0.6,
        }}
      />

      {/* MAIN */}
      <div style={{ display: "flex", alignItems: "center", padding: "60px 40px" }}>

        {/* LEFT */}
        <div style={{ flex: 1, maxWidth: 520 }}>

          {/* HEADLINE */}
          <h1 style={{
            fontSize: 48,
            lineHeight: 1.15,
            fontWeight: 400,
            letterSpacing: "-0.5px"
          }}>
            Most apps waste your time.
            <br />
            <span style={{
              fontWeight: 700,
              background: "linear-gradient(90deg,#66F2FF,#B486FF,#FF67D4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              ZWAP!
            </span>{" "}
            turns it into rewards.
          </h1>

          {/* SUBTEXT */}
          <p style={{ opacity: 0.7, marginTop: 16 }}>
            It’s giving...smarter not harder.
          </p>

          {/* CTA */}
          <button style={{
            marginTop: 24,
            padding: "16px 36px",
            borderRadius: 999,
            border: "2px solid rgba(180,120,255,0.8)",
            background: "rgba(20,20,40,0.9)",
            fontWeight: 600,
            letterSpacing: "0.05em",
            boxShadow: "0 0 20px rgba(150,100,255,0.25)"
          }}>
            Lock In. Early.
          </button>

          {/* SOCIAL ICONS (FINALLY CORRECT 😄) */}
          <div style={{
            display: "flex",
            gap: 20,
            marginTop: 18,
            alignItems: "center"
          }}>
            <span style={iconStyle}>X</span>
            <span style={iconStyle}>♪</span>
            <span style={iconStyle}>✉</span>
          </div>

        </div>

        {/* RIGHT HERO */}
        <div style={{
          flex: 1,
          display: "flex",
          justifyContent: "center"
        }}>
          <img
            src={heroPhoneMockup}
            style={{
              width: 900, // 👈 BIGGER (2x feel)
              maxWidth: "100%",
              filter: "drop-shadow(0 0 30px rgba(120,80,255,0.3))"
            }}
          />
        </div>

      </div>

      {/* FOOTER */}
      <footer style={{
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        opacity: 0.6
      }}>
        <div>Privacy Policy • Terms</div>
        <div>© 2026 ZWAP!™</div>
      </footer>

    </div>
  );
}

const btnStyle = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "10px 18px",
  borderRadius: 999,
  border: "1px solid rgba(180,120,255,0.5)",
  background: "rgba(255,255,255,0.05)",
  cursor: "pointer"
};

const iconStyle = {
  fontSize: 18,
  opacity: 0.85,
  cursor: "pointer"
};