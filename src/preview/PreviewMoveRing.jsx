import React, { useMemo } from "react";

export default function PreviewMoveRing({
  percent = 0,
  steps = 3240,
  stepGoal = 5000,
  isLive = true,
  pace = "Steady",
}) {
  const ringStyle = useMemo(() => {
    const safePercent = Math.max(0, Math.min(100, Number(percent || 0)));
    const degrees = safePercent * 3.6;

    return {
      background: `conic-gradient(
        from 180deg,
        rgba(34,211,238,1) 0deg,
        rgba(45,212,191,1) ${degrees * 0.65}deg,
        rgba(168,85,247,1) ${degrees}deg,
        rgba(255,255,255,0.08) ${degrees}deg,
        rgba(255,255,255,0.08) 360deg
      )`,
    };
  }, [percent]);

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
          width: "222px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              borderRadius: "16px",
              border: "1px solid rgba(34,211,238,0.15)",
              background:
                "linear-gradient(180deg, rgba(18,40,56,0.92), rgba(10,22,32,0.95))",
              padding: "10px 12px",
              boxShadow: "0 0 18px rgba(34,211,238,0.08)",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(186,230,253,0.55)",
                marginBottom: "4px",
              }}
            >
              Status
            </div>

            <div
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: isLive ? "#86efac" : "rgba(255,255,255,0.75)",
              }}
            >
              {isLive ? "Active" : "Idle"}
            </div>
          </div>

          <div
            style={{
              borderRadius: "16px",
              border: "1px solid rgba(34,211,238,0.15)",
              background:
                "linear-gradient(180deg, rgba(18,40,56,0.92), rgba(10,22,32,0.95))",
              padding: "10px 12px",
              boxShadow: "0 0 18px rgba(34,211,238,0.08)",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(186,230,253,0.55)",
                marginBottom: "4px",
              }}
            >
              Pace
            </div>

            <div
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#67F2FF",
              }}
            >
              {pace}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "188px",
              height: "188px",
              borderRadius: "50%",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                padding: "10px",
                ...ringStyle,
                boxShadow: isLive
                  ? "0 0 60px rgba(34,211,238,0.24)"
                  : "0 0 40px rgba(34,211,238,0.14)",
                transition: "all 300ms ease",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at top, rgba(34,211,238,0.10), rgba(8,23,22,1) 55%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.05)",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(245,247,255,0.56)",
                    marginBottom: "8px",
                  }}
                >
                  Live Steps
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
                  / {Number(stepGoal).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}