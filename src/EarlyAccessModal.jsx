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
          padding: "30px 30px 28px",
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
        <div
          style={{
            position: "relative",
            marginBottom: "18px",
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
              border: "none",
              background: "transparent",
              color: "rgba(245,247,255,0.7)",
              fontSize: "28px",
              lineHeight: 1,
              cursor: "pointer",
            }}
          >
            ×
          </button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "10px",
              paddingRight: "40px",
            }}
          >
            <img
              src={bang}
              alt="ZWAP!"
              style={{
                width: "58px",
                height: "auto",
                display: "block",
                filter: "drop-shadow(0 0 18px rgba(130, 88, 255, 0.45))",
              }}
            />

            <div
              style={{
                fontSize: "32px",
                fontWeight: 900,
                letterSpacing: "-0.02em",
                background:
                  "linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ZWAP!
            </div>
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "32px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: "1.08",
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

          <p
            style={{
              margin: "12px 0 0 0",
              fontSize: "16px",
              lineHeight: "1.6",
              color: "rgba(235,239,255,0.72)",
              maxWidth: "560px",
            }}
          >
            Earn rewards from steps, games, and daily activity.
            <br />
            No gambling. No fluff. Just participation.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              padding: "20px 18px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: 800,
                marginBottom: "8px",
              }}
            >
              Quick Access
            </div>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.55",
                color: "rgba(235,239,255,0.7)",
                marginBottom: "16px",
              }}
            >
              Drop your email and we’ll send a private preview link.
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                style={{
                  width: "100%",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(0,0,0,0.22)",
                  color: "#F9FAFF",
                  padding: "14px 18px",
                  fontSize: "15px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />

              <button
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "999px",
                  border: "1px solid rgba(165, 103, 255, 0.45)",
                  background:
                    "linear-gradient(180deg, rgba(24,26,48,1) 0%, rgba(11,13,28,1) 100%)",
                  color: "#F9FAFF",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 20px rgba(0,0,0,0.28)",
                }}
              >
                Send Access Link
              </button>
            </div>
          </div>

          <div
            style={{
              padding: "20px 18px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: 800,
                marginBottom: "8px",
              }}
            >
              Instant Access
            </div>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.55",
                color: "rgba(235,239,255,0.7)",
                marginBottom: "16px",
              }}
            >
              Skip the wait. Post on X and unlock the preview instantly.
            </div>

            <button
              style={{
                width: "100%",
                marginTop: "44px",
                padding: "14px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(165, 103, 255, 0.45)",
                background:
                  "linear-gradient(180deg, rgba(24,26,48,1) 0%, rgba(11,13,28,1) 100%)",
                color: "#F9FAFF",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 20px rgba(0,0,0,0.28)",
              }}
            >
              Post on X to Unlock Preview
            </button>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontSize: "20px",
            fontWeight: 800,
            letterSpacing: "-0.01em",
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