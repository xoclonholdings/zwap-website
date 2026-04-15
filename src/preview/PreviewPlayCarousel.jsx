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

export default function PreviewPlayCarousel({
  games = [],
  activeGameId,
  onSelect,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        overflowX: "auto",
        paddingBottom: "4px",
        marginBottom: "16px",
        scrollbarWidth: "none",
      }}
    >
      {games.map((game) => {
        const isActive = game.id === activeGameId;
        const logoSrc = PLAY_LOGOS[game.id] || PLAY_LOGOS[game.logoKey];

        return (
          <button
            key={game.id}
            onClick={() => onSelect(game.id)}
            style={{
              minWidth: "96px",
              borderRadius: "18px",
              border: isActive
                ? `1px solid ${game.accent || "rgba(255,255,255,0.28)"}`
                : "1px solid rgba(255,255,255,0.08)",
              background: isActive
                ? "linear-gradient(180deg, rgba(24,26,48,0.95) 0%, rgba(12,14,28,0.98) 100%)"
                : "rgba(255,255,255,0.025)",
              boxShadow: isActive
                ? `0 0 18px ${game.glow || "rgba(255,255,255,0.12)"}`
                : "none",
              padding: "10px 12px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 220ms ease",
            }}
          >
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={game.label}
                style={{
                  width: "100%",
                  maxWidth: isActive ? "104px" : "92px",
                  maxHeight: isActive ? "40px" : "34px",
                  objectFit: "contain",
                  display: "block",
                  margin: "0 auto",
                  filter: isActive
                    ? `drop-shadow(0 0 16px ${game.glow})`
                    : "opacity(0.82)",
                  transition: "all 180ms ease",
                }}
              />
            ) : (
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  color: isActive ? "#FFFFFF" : "rgba(245,247,255,0.7)",
                }}
              >
                {game.label}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}