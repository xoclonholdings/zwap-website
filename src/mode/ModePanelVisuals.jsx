import React from "react";

import moveAsset from "../assets/features/feature-move.PNG";
import playAsset from "../assets/features/feature-play.PNG";
import gardenAsset from "../assets/features/feature-garden.PNG";
import shopAsset from "../assets/features/feature-shop.PNG";
import worldAsset from "../assets/features/feature-world.PNG";
import profileAsset from "../assets/features/feature-profile.PNG";
import audioAsset from "../assets/features/feature-audio.PNG";
import learnAsset from "../assets/features/feature-learn.PNG";

const MODE_ASSETS = {
  move: moveAsset,
  play: playAsset,
  garden: gardenAsset,
  shop: shopAsset,
  world: worldAsset,
  profile: profileAsset,
  audio: audioAsset,
  learn: learnAsset,
};

function AssetVisual({ mode, theme }) {
  const asset = MODE_ASSETS[mode];

  if (!asset) {
    return null;
  }

  return (
    <>
      <img
        src={asset}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.18,
          filter: "blur(18px) saturate(1.2) contrast(1.05)",
          transform: "scale(1.08)",
          pointerEvents: "none",
        }}
      />

      <img
        src={asset}
        alt={`${mode} feature visual`}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
          opacity: 0.96,
          filter: "saturate(1.08) contrast(1.04)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(circle at 50% 34%, transparent 0%, rgba(0,0,0,0.06) 42%, rgba(0,0,0,0.32) 100%),
            linear-gradient(180deg, rgba(3,3,10,0.02) 0%, rgba(3,3,10,0.10) 52%, rgba(3,3,10,0.34) 100%)
          `,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          boxShadow: `inset 0 0 38px ${theme.glow}, inset 0 0 0 1px rgba(255,255,255,0.04)`,
          pointerEvents: "none",
        }}
      />
    </>
  );
}

export function ModeVisual({ mode, theme }) {
  return <AssetVisual mode={mode} theme={theme} />;
}