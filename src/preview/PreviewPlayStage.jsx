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
  const logoSrc = PLAY_LOGOS[game.id] || PLAY_LOGOS[game.logoKey];

  return (
    <div
      style={{
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.06)",
        background:
          "linear-gradient(180deg, rgba(5,8,20,0.98) 0%, rgba(7,10,24,0.96) 100%)",
        padding: "18px",
        boxShadow: `0 0 36px ${game.glow}`,
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "18px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 900,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(245,247,255,0.5)",
              marginBottom: "10px",
            }}
          >
            Live Session
          </div>

          <div
            style={{
              fontSize: "24px",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#F8FAFF",
              lineHeight: 1,
            }}
          >
            {game.label}
          </div>
        </div>

        <div
          style={{
            fontSize: "16px",
            fontWeight: 900,
            color: game.accent,
            textShadow: `0 0 18px ${game.glow}`,
          }}
        >
          {game.reward}
        </div>
      </div>

      <div
        style={{
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.06)",
          background: `
            radial-gradient(circle at 50% 50%, ${game.glow}, transparent 58%),
            linear-gradient(180deg, rgba(10,12,28,0.96) 0%, rgba(6,8,18,0.98) 100%)
          `,
          minHeight: "170px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "18px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04), transparent 65%)",
          }}
        />

        {logoSrc && (
          <img
            src={logoSrc}
            alt={game.label}
            style={{
              width: "100%",
              maxWidth: "180px",
              maxHeight: "88px",
              objectFit: "contain",
              position: "relative",
              zIndex: 2,
              filter: `drop-shadow(0 0 28px ${game.glow})`,
            }}
          />
        )}
      </div>

      <div
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        <div
          style={{
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.025)",
            padding: "14px 16px",
            fontSize: "14px",
            fontWeight: 700,
            color: "rgba(235,239,255,0.84)",
            textAlign: "center",
          }}
        >
          {game.statA}
        </div>

        <div
          style={{
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.025)",
            padding: "14px 16px",
            fontSize: "14px",
            fontWeight: 700,
            color: "rgba(235,239,255,0.84)",
            textAlign: "center",
          }}
        >
          {game.statB}
        </div>
      </div>
    </div>
  );
}