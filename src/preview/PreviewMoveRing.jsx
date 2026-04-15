import React from "react";

export default function PreviewMoveRing({
  percent = 0,
  steps = 3240,
  stepGoal = 5000,
  accent,
  glow,
}) {
  const ring = `conic-gradient(${accent} 0% ${percent}%, rgba(255,255,255,0.08) ${percent}% 100%)`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "18px",
      }}
    >
      <div
        style={{
          width: "178px",
          height: "178px",
          borderRadius: "50%",
          padding: "10px",
          background: ring,
          boxShadow: `0 0 26px ${glow}`,
          transition: "background 700ms ease, box-shadow 700ms ease",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.06), transparent 38%), linear-gradient(180deg, rgba(8,10,22,0.96) 0%, rgba(5,7,16,0.98) 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "18px",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(245,247,255,0.56)",
              marginBottom: "8px",
            }}
          >
            MOVE
          </div>

          <div
            style={{
              fontSize: "34px",
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "#F8FAFF",
              marginBottom: "6px",
            }}
          >
            {Number(steps).toLocaleString()}
          </div>

          <div
            style={{
              fontSize: "13px",
              color: "rgba(235,239,255,0.74)",
            }}
          >
            / {Number(stepGoal).toLocaleString()} steps
          </div>
        </div>
      </div>
    </div>
  );
}