export default function EarlyAccessModal({
  isOpen,
  onClose,
  email,
  setEmail,
  bang,
  onUnlockPreview,
  pendingPage,
}) {
  if (!isOpen) return null;

  const tweetText = encodeURIComponent(
    "ZWAP! is live. Move. Play. Earn Today. https://zwap.online"
  );

  const tweetUrl = `https://x.com/intent/tweet?text=${tweetText}`;

  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 900 : false;

  const handleEmailAccess = () => {
    if (!email.trim()) return;

    if (pendingPage === "preview" && onUnlockPreview) {
      onUnlockPreview();
      return;
    }

    onClose();
  };

  const handleInstantAccess = () => {
    if (pendingPage === "preview" && onUnlockPreview) {
      onUnlockPreview();
    } else {
      onClose();
    }
  };

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
        padding: isDesktop ? "24px" : "16px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "780px",
          maxHeight: "92dvh",
          overflowY: "auto",
          borderRadius: "28px",
          padding: isDesktop ? "30px" : "22px 18px 24px",
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
            top: isDesktop ? "18px" : "14px",
            right: isDesktop ? "22px" : "18px",
            border: "none",
            background: "transparent",
            color: "rgba(245,247,255,0.7)",
            fontSize: isDesktop ? "28px" : "32px",
            cursor: "pointer",
            zIndex: 2,
          }}
        >
          ×
        </button>

        {/* HEADER */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: isDesktop ? "108px" : "88px",
              marginBottom: isDesktop ? "14px" : "16px",
            }}
          >
            <img
              src={bang}
              alt="ZWAP!"
              style={{
                width: "100%",
                filter: "drop-shadow(0 0 22px rgba(130, 88, 255, 0.5))",
              }}
            />
          </div>

          <div style={{ marginBottom: isDesktop ? "22px" : "18px" }}>
            <div
              style={{
                fontSize: isDesktop ? "44px" : "clamp(34px, 10vw, 42px)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
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
                fontSize: isDesktop ? "17px" : "16px",
                color: "rgba(235,239,255,0.82)",
              }}
            >
              Move. Play. Earn Today.
            </p>
          </div>
        </div>

        {/* OPTIONS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
            gap: isDesktop ? "18px" : "14px",
          }}
        >
          {/* EMAIL */}
          <div style={cardStyle(isDesktop)}>
            <div style={cardTitle(isDesktop)}>Early Access</div>

            <div style={cardSub}>
              Get early access to V1
            </div>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              style={inputStyle}
            />

            <button onClick={handleEmailAccess} style={buttonStyle}>
              Send Access Link
            </button>
          </div>

          {/* INSTANT */}
          <div style={cardStyle(isDesktop)}>
            <div style={cardTitle(isDesktop)}>Instant Access</div>

            <div style={cardSub}>
              Post on X to unlock V1 instantly
            </div>

            <div style={{ height: isDesktop ? "48px" : "0px" }} />

            <a
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleInstantAccess}
              style={{ ...buttonStyle, display: "flex", textDecoration: "none" }}
            >
              Post on X
            </a>
          </div>
        </div>

        {/* FOOT */}
        <div
          style={{
            marginTop: isDesktop ? "22px" : "18px",
            textAlign: "center",
            fontSize: isDesktop ? "26px" : "clamp(24px, 7vw, 30px)",
            fontWeight: 900,
          }}
        >
          Ready to move, play, and earn today?
        </div>
      </div>
    </div>
  );
}

/* ---------- styles ---------- */

const cardStyle = (isDesktop) => ({
  padding: isDesktop ? "20px" : "18px",
  borderRadius: "22px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
});

const cardTitle = (isDesktop) => ({
  fontWeight: 800,
  fontSize: isDesktop ? "22px" : "20px",
  marginBottom: "8px",
  textAlign: "center",
});

const cardSub = {
  fontSize: "14px",
  marginBottom: "14px",
  color: "rgba(235,239,255,0.78)",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  borderRadius: "999px",
  padding: "14px 18px",
  marginBottom: "12px",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(0,0,0,0.22)",
  color: "#fff",
  fontSize: "15px",
};

const buttonStyle = {
  width: "100%",
  padding: "14px 18px",
  borderRadius: "999px",
  border: "1px solid rgba(165, 103, 255, 0.45)",
  background:
    "linear-gradient(180deg, rgba(24,26,48,1) 0%, rgba(11,13,28,1) 100%)",
  color: "#fff",
  fontWeight: 700,
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
};