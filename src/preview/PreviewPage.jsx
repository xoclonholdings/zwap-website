import React, { useMemo, useState } from "react";
import {
  previewModes,
  movePreview,
  playPreview,
} from "./PreviewData";
import PreviewModeTabs from "./PreviewModeTabs";
import PreviewConsoleCard from "./PreviewConsoleCard";
import PreviewFooter from "./PreviewFooter";

export default function PreviewPage({ onBack, onLockIn }) {
  const [activeMode, setActiveMode] = useState("move");
  const [progressAnimated, setProgressAnimated] = useState(true);

  const activePreview = useMemo(() => {
    if (activeMode === "play") {
      return playPreview;
    }

    return movePreview;
  }, [activeMode]);

  const handleModeChange = (modeId) => {
    setActiveMode(modeId);
    setProgressAnimated(false);
    requestAnimationFrame(() => setProgressAnimated(true));
  };

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: `
          radial-gradient(circle at 72% 22%, rgba(204, 91, 255, 0.10), transparent 16%),
          radial-gradient(circle at 18% 28%, rgba(88, 240, 255, 0.08), transparent 14%),
          radial-gradient(circle at 55% 62%, rgba(255, 176, 86, 0.05), transparent 12%),
          linear-gradient(180deg, #030308 0%, #080913 58%, #04050A 100%)
        `,
        color: "#F5F7FF",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          minHeight: "100dvh",
          padding:
            "calc(env(safe-area-inset-top, 0px) + 14px) 16px calc(env(safe-area-inset-bottom, 0px) + 28px)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "18px",
          }}
        >
          <button
            onClick={onBack}
            style={{
              border: "none",
              background: "transparent",
              color: "rgba(245,247,255,0.76)",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              padding: 0,
            }}
          >
            ← Back
          </button>

          <div
            style={{
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(245,247,255,0.56)",
            }}
          >
            Preview
          </div>

          <div style={{ width: "48px" }} />
        </div>

        <section
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <h1
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(34px, 10vw, 46px)",
              lineHeight: 1.02,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#F9FBFF",
            }}
          >
            Feel{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ZWAP!
            </span>{" "}
            before it drops.
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "320px",
              fontSize: "15px",
              lineHeight: 1.65,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            A lightweight first look at the V1 loop. Tap between MOVE and PLAY
            to experience how progression begins.
          </p>
        </section>

        <PreviewModeTabs
          modes={previewModes}
          activeMode={activeMode}
          onChange={handleModeChange}
        />

        <PreviewConsoleCard
          data={activePreview}
          progressAnimated={progressAnimated}
          onLockIn={onLockIn}
        />

        <PreviewFooter />
      </div>
    </div>
  );
}