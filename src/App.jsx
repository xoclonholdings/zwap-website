import logo from "./assets/Zwap_logo_full.png";

export default function App() {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img
        src={logo}
        alt="ZWAP logo"
        style={{ width: "220px", marginBottom: "20px" }}
      />

      <p style={{ fontSize: "20px", marginTop: "10px", opacity: 0.8 }}>
        Move. Play. Swap. Shop.
      </p>

      <p style={{ marginTop: "20px", maxWidth: "420px", opacity: 0.65 }}>
        Most apps waste your time. ZWAP turns it into rewards.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "15px 25px",
          fontSize: "16px",
          background: "white",
          color: "black",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          width: "fit-content",
        }}
      >
        Enter App
      </button>
    </div>
  );
}