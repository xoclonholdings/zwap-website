export default function EarlyAccessModal({
  isOpen,
  onClose,
  email,
  setEmail,
  bang,
  onSubmitAccess,
  onInstantAccess,
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
    if (onSubmitAccess) onSubmitAccess();
  };

  const handleInstantAccess = () => {
    if (onInstantAccess) onInstantAccess();
  };

  const titleText =
    pendingPage === "preview" ? "Unlock Preview" : "Lock In Early";

  const subtitleText =
    pendingPage === "preview"
      ? "Enter early and step into the first live preview of ZWAP."
      : "Secure your spot before the system opens.";

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
          aria-label="Close early access modal"
        >
          ×
        </button>

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
              marginTop: isDesktop ? "0" : "6px",
            }}
          >
            <img
              src={bang}
              alt="ZWAP!"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "drop-shadow(0 0 22px rgba(130, 88, 255, 0.5))",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: isDesktop ? "22px" : "18px",
              padding: isDesktop ? "0 36px" : "0 6px",
              width: "100%",
            }}
          >
            <div
              style={{
                fontSize: isDesktop ? "44px" : "clamp(34px, 10vw, 42px)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: "1.02",
                marginBottom: "10px",
                color: "#F8FAFF",
                textShadow: "0 4px 20px rgba(0,0,0,0.35)",
              }}
            >
              {titleText}
            </div>

            <p
              style={{
                margin: "0 0 10px 0",
                fontSize: isDesktop ? "17px" : "16px",
                lineHeight: "1.55",
                color: "rgba(235,239,255,0.82)",
                maxWidth: "520px",
                marginInline: "auto",
                textShadow: "0 2px 10px rgba(0,0,0,0.25)",
              }}
            >
              {subtitleText}
            </p>

            <div
              style={{
                fontSize: isDesktop ? "15px" : "14px",
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(235,239,255,0.72)",
              }}
            >
              Move. Play. Earn Today.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
            gap: isDesktop ? "18px" : "14px",
            marginTop: "6px",
          }}
        >
          <div
            style={{
              padding: isDesktop ? "20px" : "18px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: isDesktop ? "22px" : "20px",
                marginBottom: "8px",
                textAlign: "center",
                textShadow: "0 2px 10px rgba(0,0,0,0.28)",
              }}
            >
              Early Access
            </div>

            <div
              style={{
                fontSize: "14px",
                marginBottom: "14px",
                color: "rgba(235,239,255,0.78)",
                textAlign: "center",
                lineHeight: "1.5",
              }}
            >
              Enter your email to unlock V1 preview access
            </div>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              type="email"
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
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            />

            <button
              onClick={handleEmailAccess}
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
              Unlock Preview
            </button>
          </div>

          <div
            style={{
              padding: isDesktop ? "20px" : "18px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: isDesktop ? "22px" : "20px",
                marginBottom: "8px",
                textAlign: "center",
                textShadow: "0 2px 10px rgba(0,0,0,0.28)",
              }}
            >
              Instant Access
            </div>

            <div
              style={{
                fontSize: "14px",
                marginBottom: "14px",
                color: "rgba(235,239,255,0.78)",
                textAlign: "center",
                lineHeight: "1.5",
              }}
            >
              Post on X and open the preview immediately
            </div>

            <div style={{ height: isDesktop ? "48px" : "0px" }} />

            <a
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleInstantAccess}
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
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Post on X
            </a>
          </div>
        </div>

        <div
          style={{
            marginTop: isDesktop ? "22px" : "18px",
            textAlign: "center",
            fontSize: isDesktop ? "26px" : "clamp(24px, 7vw, 30px)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "#F8FAFF",
            textShadow: "0 4px 20px rgba(0,0,0,0.35)",
            padding: isDesktop ? "0" : "0 8px",
          }}
        >
          Ready to move, play, and earn today?
        </div>
      </div>
    </div>
  );
}