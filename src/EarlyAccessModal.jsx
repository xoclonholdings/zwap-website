export default function EarlyAccessModal({
  isOpen,
  onClose,
  email,
  setEmail,
  bang,
}) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(3, 4, 10, 0.82)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "760px",
          borderRadius: "28px",
          padding: "30px",
          background: `
            radial-gradient(circle at 72% 34%, rgba(204, 91, 255, 0.10), transparent 16%),
            radial-gradient(circle at 82% 30%, rgba(88, 240, 255, 0.08), transparent 14%),
            radial-gradient(circle at 60% 36%, rgba(255, 176, 86, 0.06), transparent 12%),
            linear-gradient(180deg, #030308 0%, #080913 58%, #04050A 100%)
          `,
          border: "1px solid rgba(165, 103, 255, 0.24)",
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.45), 0 0 30px rgba(138, 90, 255, 0.12)",
          color: "#F9FAFF",
        }}
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "18px",
            right: "22px",
            border: "none",
            background: "transparent",
            color: "rgba(245,247,255,0.7)",
            fontSize: "28px",
            cursor: "pointer",
          }}
        >
          ×
        </button>

        {/* A — BIG CENTERED BANG */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "14px",
          }}
        >
          <img
            src={bang}
            alt="ZWAP!"
            style={{
              width: "88px",
              height: "auto",
              filter: "drop-shadow(0 0 22px rgba(130, 88, 255, 0.5))",
            }}
          />
        </div>

        {/* B — TITLE */}
        <h2
          style={{
            margin: 0,
            fontSize: "34px",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            textAlign: "center",
          }}
        >
          What is{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ZWAP!
          </span>
          ?
        </h2>

        {/* C — CLEAN SINGLE LINE */}
        <p
          style={{
            margin: "12px 0 26px",
            fontSize: "16px",
            textAlign: "center",
            color: "rgba(235,239,255,0.72)",
          }}
        >
          Earn rewards from steps, games, and daily activity.
        </p>

        {/* TWO COLUMN */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px",
          }}
        >
          {/* QUICK */}
          <div
            style={{
              padding: "20px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: "8px" }}>
              Quick Access
            </div>

            <div
              style={{
                fontSize: "14px",
                marginBottom: "14px",
                color: "rgba(235,239,255,0.7)",
              }}
            >
              Get a private preview link
            </div>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              style={{
                width: "100%",
                borderRadius: "999px",
                padding: "14px",
                marginBottom: "10px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(0,0,0,0.22)",
                color: "#fff",
              }}
            />

            <button
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "999px",
                border: "1px solid rgba(165, 103, 255, 0.45)",
                background:
                  "linear-gradient(180deg, rgba(24,26,48,1) 0%, rgba(11,13,28,1) 100%)",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Send Access Link
            </button>
          </div>

          {/* INSTANT */}
          <div
            style={{
              padding: "20px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: "8px" }}>
              Instant Access
            </div>

            <div
              style={{
                fontSize: "14px",
                marginBottom: "14px",
                color: "rgba(235,239,255,0.7)",
              }}
            >
              Post on X to unlock instantly
            </div>

            <button
              style={{
                width: "100%",
                marginTop: "42px",
                padding: "14px",
                borderRadius: "999px",
                border: "1px solid rgba(165, 103, 255, 0.45)",
                background:
                  "linear-gradient(180deg, rgba(24,26,48,1) 0%, rgba(11,13,28,1) 100%)",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              Post on X
            </button>
          </div>
        </div>

        {/* D — BIGGER ACTION LINE */}
        <div
          style={{
            marginTop: "24px",
            textAlign: "center",
            fontSize: "22px",
            fontWeight: 900,
          }}
        >
          Want to see{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ZWAP!
          </span>{" "}
          in action?
        </div>
      </div>
    </div>
  );
}