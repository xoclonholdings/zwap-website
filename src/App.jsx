import logo from "./assets/Zwap_logo_full.png";

export default function App() {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "500px",
        }}
      >
        <img
          src={logo}
          alt="ZWAP logo"
          style={{
            width: "180px",
            marginBottom: "20px",
          }}
        />

        <h2
          style={{
            fontSize: "20px",
            opacity: 0.8,
            marginBottom: "10px",
          }}
        >
          Move. Play. Swap. Shop.
        </h2>

        <p
          style={{
            opacity: 0.6,
            lineHeight: "1.5",
          }}
        >
          Most apps waste your time. ZWAP turns it into rewards.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "15px 30px",
            fontSize: "16px",
            background: "white",
            color: "black",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          Enter App
        </button>
      </div>
    </div>
  );
}