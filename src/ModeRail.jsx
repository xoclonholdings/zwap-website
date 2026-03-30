import React from "react";
import ModeButton from "./ModeButton";

export default function ModeRail({
  modes = [],
  activeMode,
  setActiveMode,
  direction = "vertical", // "vertical" | "horizontal"
}) {
  const isVertical = direction === "vertical";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isVertical ? "column" : "row",
        gap: 10,
        justifyContent: isVertical ? "flex-start" : "space-between",
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