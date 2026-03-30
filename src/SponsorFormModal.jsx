import React from "react";

export default function SponsorFormModal({
  isOpen,
  onClose,
  isDesktop,
  children,
}) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(3, 4, 10, 0.82)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isDesktop ? "24px" : "16px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "920px",
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
        {/* Close Button */}
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

        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
            paddingTop: "6px",
          }}
        >
          <div
            style={{
              fontSize: isDesktop ? "40px" : "24px",
              lineHeight: 1.08,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              marginBottom: "10px",
              color: "#F8FAFF",
            }}
          >
            Interested in partnering?
          </div>

          <p
            style={{
              margin: "0 auto",
              maxWidth: isDesktop ? "760px" : "310px",
              fontSize: isDesktop ? "18px" : "15px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            Tell us who you are, what you represent, and how you want to
            plug into the ZWAP ecosystem.
          </p>
        </div>

        {/* Form injected here */}
        {children}
      </div>
    </div>
  );
}