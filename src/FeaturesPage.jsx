import React, { useState } from "react";

const coreModes = [
  { id: "move", label: "MOVE" },
  { id: "play", label: "PLAY" },
  { id: "swap", label: "SWAP" },
  { id: "shop", label: "SHOP" },
];

const systemModes = [
  { id: "world", label: "WORLD" },
  { id: "profile", label: "PROFILE" },
  { id: "audio", label: "AUDIO" },
  { id: "learn", label: "LEARN" },
];

const modeContent = {
  move: {
    title: "MOVE",
    description: "Turn real-world movement into rewards. Build streaks. Earn daily.",
  },
  play: {
    title: "PLAY",
    description: "Play games. Earn ZWAP. Submit your own.",
  },
  swap: {
    title: "SWAP",
    description: "Exchange assets seamlessly through integrated liquidity.",
  },
  shop: {
    title: "SHOP",
    description: "Spend rewards on digital and real-world items.",
  },
  world: {
    title: "WORLD",
    description: "See live activity. Feel presence. React in real time.",
  },
  profile: {
    title: "PROFILE",
    description: "Your identity. Your badges. Your progression.",
  },
  audio: {
    title: "AUDIO",
    description: "Soundtrack your experience. Connect and control playback.",
  },
  learn: {
    title: "LEARN",
    description: "Understand the system. Unlock deeper value.",
  },
};

export default function FeaturesPage({ onBack }) {
  const [activeMode, setActiveMode] = useState("move");

  return (
    <div style={styles.page}>
      <button onClick={onBack} style={styles.back}>
        ← Back
      </button>

      <h1 style={styles.title}>Features</h1>

      {/* DESKTOP */}
      <div style={styles.desktopLayout}>
        {/* LEFT (SYSTEM) */}
        <div style={styles.leftRail}>
          {systemModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              style={{
                ...styles.button,
                ...(activeMode === mode.id ? styles.active : {}),
              }}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* CENTER PANEL */}
        <div style={styles.panel}>
          <div style={styles.overlay}>
            <h2 style={styles.overlayTitle}>
              {modeContent[activeMode].title}
            </h2>
            <p style={styles.overlayText}>
              {modeContent[activeMode].description}
            </p>
          </div>
        </div>

        {/* RIGHT (CORE) */}
        <div style={styles.rightRail}>
          {coreModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              style={{
                ...styles.button,
                ...(activeMode === mode.id ? styles.active : {}),
              }}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* MOBILE */}
      <div style={styles.mobileLayout}>
        {/* TOP (SYSTEM) */}
        <div style={styles.row}>
          {systemModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              style={{
                ...styles.button,
                ...(activeMode === mode.id ? styles.active : {}),
              }}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* CENTER */}
        <div style={styles.panel}>
          <div style={styles.overlay}>
            <h2 style={styles.overlayTitle}>
              {modeContent[activeMode].title}
            </h2>
            <p style={styles.overlayText}>
              {modeContent[activeMode].description}
            </p>
          </div>
        </div>

        {/* BOTTOM (CORE) */}
        <div style={styles.row}>
          {coreModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              style={{
                ...styles.button,
                ...(activeMode === mode.id ? styles.active : {}),
              }}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    padding: 20,
    color: "white",
    minHeight: "100vh",
  },

  back: {
    marginBottom: 10,
  },

  title: {
    marginBottom: 20,
  },

  desktopLayout: {
    display: "none",
  },

  mobileLayout: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },

  leftRail: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  rightRail: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
  },

  button: {
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.2)",
    background: "transparent",
    color: "white",
    cursor: "pointer",
    flex: 1,
  },

  active: {
    background: "rgba(120, 90, 255, 0.4)",
    border: "1px solid rgba(120, 90, 255, 0.8)",
  },

  panel: {
    height: 220,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  overlay: {
    textAlign: "center",
    padding: 20,
  },

  overlayTitle: {
    marginBottom: 10,
  },

  overlayText: {
    opacity: 0.8,
  },
};

/* ---------------- RESPONSIVE ---------------- */

if (typeof window !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerHTML = `
    @media (min-width: 768px) {
      .desktopLayout {
        display: grid !important;
        grid-template-columns: 120px 1fr 120px;
        gap: 20px;
        align-items: center;
      }

      .mobileLayout {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(styleSheet);
}