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
          position: "relative",
          width: "100%",
          maxWidth: "780px",
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

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "18px",
            marginBottom: "18px",
            paddingRight: "36px",
          }}
        >
          <img
            src={bang}
            alt="ZWAP!"
            style={{
              width: "108px",
              height: "auto",
              display: "block",
              flexShrink: 0,
              filter: "drop-shadow(0 0 22px rgba(130, 88, 255, 0.5))",
            }}
          />

          <div
            style={{
              flex: 1,
              paddingTop: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "42px",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: "1.05",
                marginBottom: "10px",
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
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "17px",
                lineHeight: "1.55",
                color: "rgba(235,239,255,0.72)",
                maxWidth: "500px",
              }}
            >
              Earn rewards from steps, games, and daily activity.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              padding: "20px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: "20px",
                marginBottom: "8px",
                textAlign: "center",
              }}
            >
              Quick Access
            </div>

            <div
              style={{
                fontSize: "14px",
                marginBottom: "14px",
                color: "rgba(235,239,255,0.7)",
                textAlign: "center",
                lineHeight: "1.5",
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
                boxSizing: "border-box",
                display: "block",
                borderRadius: "999px",
                padding: "14px 18px",
                marginBottom: "12px",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(0,0,0,0.22)",
                color: "#fff",
                outline: "none",
                fontSize: "15px",
                lineHeight: 1.2,
              }}
            />

            <button
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "14px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(165, 103, 255, 0.45)",
                background:
                  "linear-gradient(180deg, rgba(24,26,48,1) 0%, rgba(11,13,28,1) 100%)",
                color: "#fff",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 20px rgba(0,0,0,0.28)",
              }}
            >
              Send Access Link
            </button>
          </div>

          <div
            style={{
              padding: "20px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: "20px",
                marginBottom: "8px",
                textAlign: "center",
              }}
            >
              Instant Access
            </div>

            <div
              style={{
                fontSize: "14px",
                marginBottom: "14px",
                color: "rgba(235,239,255,0.7)",
                textAlign: "center",
                lineHeight: "1.5",
              }}
            >
              Post on X to unlock instantly
            </div>

            <div style={{ height: "48px" }} />

            <button
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "14px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(165, 103, 255, 0.45)",
                background:
                  "linear-gradient(180deg, rgba(24,26,48,1) 0%, rgba(11,13,28,1) 100%)",
                color: "#fff",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 20px rgba(0,0,0,0.28)",
              }}
            >
              Post on X
            </button>
          </div>
        </div>

        <div
          style={{
            marginTop: "22px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 900,
            letterSpacing: "-0.02em",
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