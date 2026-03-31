import React from "react";
import ModeButton from "./ModeButton";

export default function ModeRail({
  modes = [],
  activeMode,
  setActiveMode,
  direction = "vertical",
}) {
  const isVertical = direction === "vertical";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isVertical ? "column" : "row",
        gap: isVertical ? 14 : 12,
        justifyContent: isVertical ? "center" : "space-between",
        width: "100%",
        height: isVertical ? "100%" : "auto",
      }}
    >
      {modes.map((mode) => (
        <ModeButton
          key={mode.id}
          label={mode.label}
          active={activeMode === mode.id}
          onClick={() => setActiveMode(mode.id)}
          fullWidth={!isVertical}
        />
      ))}
    </div>
  );
}