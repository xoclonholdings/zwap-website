import React from "react";

function GhostCard({ top, left, width, height, rotate = 0, border }) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
        borderRadius: "20px",
        border: `1px solid ${border}`,
        transform: `rotate(${rotate}deg)`,
        background: "rgba(255,255,255,0.012)",
        backdropFilter: "blur(2px)",
        pointerEvents: "none",
      }}
    />
  );
}

function GhostLine({ top, left, width, color, rotate = 0, opacity = 0.7 }) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width,
        height: "1px",
        background: color,
        opacity,
        transform: `rotate(${rotate}deg)`,
        pointerEvents: "none",
      }}
    />
  );
}

function WorldVisual({ theme }) {
  return (
    <>
      <GhostCard top="11%" left="10%" width="24%" height="18%" border={theme.border} />
      <GhostCard top="18%" left="59%" width="22%" height="15%" border={theme.border} rotate={-3} />
      <GhostCard top="42%" left="18%" width="18%" height="13%" border={theme.border} rotate={2} />
      <GhostCard top="37%" left="57%" width="25%" height="16%" border={theme.border} />
      <GhostLine top="27%" left="30%" width="34%" color={theme.border} rotate={8} />
      <GhostLine top="46%" left="36%" width="23%" color={theme.border} rotate={-10} />
      <div
        style={{
          position: "absolute",
          top: "16%",
          left: "14%",
          width: "8px",
          height: "8px",
          borderRadius: "999px",
          background: theme.accent,
          boxShadow: `0 0 18px ${theme.glow}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "72%",
          width: "8px",
          height: "8px",
          borderRadius: "999px",
          background: theme.accent,
          boxShadow: `0 0 18px ${theme.glow}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "46%",
          left: "48%",
          width: "9px",
          height: "9px",
          borderRadius: "999px",
          background: theme.accent,
          boxShadow: `0 0 20px ${theme.glow}`,
        }}
      />
    </>
  );
}

function MoveVisual({ theme }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "9%",
          width: "24%",
          height: "24%",
          borderRadius: "999px",
          border: `1px solid ${theme.border}`,
          boxShadow: `0 0 24px ${theme.glow}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "12%",
          width: "18%",
          height: "18%",
          borderRadius: "999px",
          border: `1px solid ${theme.accentSoft}`,
        }}
      />
      <GhostLine top="29%" left="36%" width="22%" color={theme.border} rotate={-18} />
      <GhostLine top="33%" left="46%" width="18%" color={theme.border} rotate={12} />
      <GhostCard top="14%" left="58%" width="19%" height="12%" border={theme.border} />
      <GhostCard top="31%" left="62%" width="16%" height="10%" border={theme.border} />
      <GhostCard top="46%" left="54%" width="24%" height="14%" border={theme.border} />
    </>
  );
}

function PlayVisual({ theme }) {
  return (
    <>
      <GhostCard top="12%" left="11%" width="19%" height="14%" border={theme.border} />
      <GhostCard top="12%" left="35%" width="19%" height="14%" border={theme.border} />
      <GhostCard top="12%" left="59%" width="19%" height="14%" border={theme.border} />
      <GhostCard top="33%" left="20%" width="17%" height="12%" border={theme.border} rotate={-2} />
      <GhostCard top="33%" left="43%" width="17%" height="12%" border={theme.border} />
      <GhostCard top="33%" left="66%" width="17%" height="12%" border={theme.border} rotate={2} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "16%",
          fontSize: "clamp(16px, 2vw, 22px)",
          fontWeight: 900,
          letterSpacing: "0.18em",
          color: "rgba(255,255,255,0.08)",
        }}
      >
        SCORE + COMBO + LEVEL
      </div>
    </>
  );
}

function SwapVisual({ theme }) {
  return (
    <>
      <GhostCard top="14%" left="11%" width="18%" height="14%" border={theme.border} />
      <GhostCard top="14%" left="70%" width="18%" height="14%" border={theme.border} />
      <GhostLine top="22%" left="30%" width="18%" color={theme.border} />
      <GhostLine top="22%" left="52%" width="18%" color={theme.border} />
      <div
        style={{
          position: "absolute",
          top: "19%",
          left: "47%",
          color: theme.accent,
          fontWeight: 900,
          fontSize: "clamp(18px, 2vw, 24px)",
        }}
      >
        →
      </div>
      <GhostCard top="39%" left="22%" width="56%" height="18%" border={theme.border} />
      <GhostLine top="47%" left="28%" width="44%" color={theme.accentSoft} />
    </>
  );
}

function ShopVisual({ theme }) {
  return (
    <>
      <GhostCard top="15%" left="14%" width="22%" height="18%" border={theme.border} />
      <GhostCard top="15%" left="40%" width="22%" height="18%" border={theme.border} />
      <GhostCard top="15%" left="66%" width="22%" height="18%" border={theme.border} />
      <GhostCard top="38%" left="26%" width="18%" height="15%" border={theme.border} />
      <GhostCard top="38%" left="52%" width="18%" height="15%" border={theme.border} />
      <div
        style={{
          position: "absolute",
          top: "57%",
          left: "30%",
          width: "40%",
          height: "1px",
          background: theme.border,
        }}
      />
    </>
  );
}

function ProfileVisual({ theme }) {
  return (
    <>
      <GhostCard top="14%" left="18%" width="24%" height="18%" border={theme.border} />
      <GhostCard top="20%" left="48%" width="30%" height="12%" border={theme.border} />
      <GhostCard top="38%" left="18%" width="60%" height="18%" border={theme.border} />
      <GhostLine top="44%" left="24%" width="42%" color={theme.accentSoft} />
      <GhostLine top="49%" left="24%" width="36%" color={theme.accentSoft} />
      <GhostLine top="54%" left="24%" width="30%" color={theme.accentSoft} />
    </>
  );
}

function AudioVisual({ theme }) {
  return (
    <>
      {Array.from({ length: 11 }).map((_, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            bottom: "42%",
            left: `${16 + index * 5.6}%`,
            width: "8px",
            height: `${20 + ((index % 5) * 10)}px`,
            borderRadius: "999px",
            background: index % 2 === 0 ? theme.accentSoft : theme.border,
            boxShadow: `0 0 10px ${theme.glow}`,
          }}
        />
      ))}
      <GhostCard top="15%" left="58%" width="20%" height="12%" border={theme.border} />
    </>
  );
}

function LearnVisual({ theme }) {
  return (
    <>
      <GhostCard top="14%" left="14%" width="26%" height="14%" border={theme.border} />
      <GhostCard top="14%" left="46%" width="30%" height="14%" border={theme.border} />
      <GhostCard top="35%" left="24%" width="52%" height="18%" border={theme.border} />
      <GhostLine top="25%" left="41%" width="6%" color={theme.border} rotate={90} />
      <GhostLine top="32%" left="50%" width="8%" color={theme.border} rotate={90} />
      <GhostLine top="55%" left="34%" width="24%" color={theme.accentSoft} />
    </>
  );
}

function DefaultVisual({ theme }) {
  return (
    <>
      <GhostCard top="16%" left="18%" width="24%" height="16%" border={theme.border} />
      <GhostCard top="22%" left="50%" width="22%" height="12%" border={theme.border} />
      <GhostCard top="42%" left="28%" width="42%" height="18%" border={theme.border} />
    </>
  );
}

export function ModeVisual({ mode, theme }) {
  switch (mode) {
    case "world":
      return <WorldVisual theme={theme} />;
    case "move":
      return <MoveVisual theme={theme} />;
    case "play":
      return <PlayVisual theme={theme} />;
    case "swap":
      return <SwapVisual theme={theme} />;
    case "shop":
      return <ShopVisual theme={theme} />;
    case "profile":
      return <ProfileVisual theme={theme} />;
    case "audio":
      return <AudioVisual theme={theme} />;
    case "learn":
      return <LearnVisual theme={theme} />;
    default:
      return <DefaultVisual theme={theme} />;
  }
}