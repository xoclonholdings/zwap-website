import React from "react";
import breakerzLogo from "../assets/games/breakerz_game_logo.PNG";
import pulzeLogo from "../assets/games/pulze_game_logo.PNG";
import stackzLogo from "../assets/games/stackz_game_logo.PNG";
import zapManLogo from "../assets/games/zap_man_logo.PNG";

const PLAY_LOGOS = {
  breakerz: breakerzLogo,
  pulze: pulzeLogo,
  stackz: stackzLogo,
  zapman: zapManLogo,
  "zap-man": zapManLogo,
};

export default function PreviewPlayStage({ game }) {
  const accent = game?.accent || "#B486FF";
  const glow = game?.glow || "rgba(180,134,255,0.22)";
  const logoSrc = PLAY_LOGOS[game?.id] || PLAY_LOGOS[game?.logoKey];

  return (
    <>
      <div
        style={{
          borderRadius: "22px",
          border: "1px solid rgba(255,255,255,0.08)",
          background:
            "linear-gradient(180deg, rgba(10,12,26,0.94) 0%, rgba(7,9,20,0.98) 100%)",
          padding: "16px",
          marginBottom: "16px",
          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.03), 0 0 18px ${glow}`,
          minHeight: "170px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "16px",
            gap: "12px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(245,247,255,0.52)",
                marginBottom: "6px",
              }}
            >
              Live Session
            </div>

            <div
              style={{
                fontSize: "22px",
                fontWeight: 900,
                lineHeight: 1,
                color: "#F8FAFF",
              }}
            >
              {game?.label}
            </div>
          </div>

          <div
            style={{
              fontSize: "13px",
              fontWeight: 900,
              color: accent,
              whiteSpace: "nowrap",
            }}
          >
            {game?.reward}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.06)",
            background:
              "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.04), transparent 42%), rgba(255,255,255,0.02)",
            padding: "14px",
          }}
        >
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={game?.label}
              style={{
                width: "100%",
                maxWidth: "150px",
                maxHeight: "56px",
                objectFit: "contain",
                display: "block",
                filter: `drop-shadow(0 0 16px ${glow})`,
              }}
            />
          ) : (
            <div
              style={{
                fontSize: "24px",
                fontWeight: 900,
                color: accent,
              }}
            >
              {game?.label}
            </div>
          )}
        </div>
      </div>

      <div style={{ display: "grid", gap: "10px" }}>
        <div
          style={{
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.025)",
            padding: "12px 14px",
            fontSize: "14px",
            color: "rgba(235,239,255,0.82)",
          }}
        >
          {game?.statA}
        </div>

        <div
          style={{
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.025)",
            padding: "12px 14px",
            fontSize: "14px",
            color: "rgba(235,239,255,0.82)",
          }}
        >
          {game?.statB}
        </div>
      </div>
    </>
  );
}