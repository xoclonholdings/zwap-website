import React, { useEffect, useMemo, useState } from "react";
import PreviewMoveRing from "./PreviewMoveRing";
import PreviewPlayCarousel from "./PreviewPlayCarousel";
import PreviewPlayStage from "./PreviewPlayStage";

const DEFAULT_PLAY_GAMES = [
  {
    id: "stackz",
    label: "STACKZ",
    reward: "+18 zPts",
    statA: "Precision streak x4",
    statB: "1 run complete",
    accent: "#67F2FF",
    glow: "rgba(103,242,255,0.22)",
  },
  {
    id: "breakerz",
    label: "BREAKERZ",
    reward: "+22 zPts",
    statA: "Wall cleared",
    statB: "Combo chain active",
    accent: "#FF8A66",
    glow: "rgba(255,138,102,0.22)",
  },
  {
    id: "pulze",
    label: "PULZE",
    reward: "+20 zPts",
    statA: "Pulse streak x6",
    statB: "Timing locked in",
    accent: "#B486FF",
    glow: "rgba(180,134,255,0.22)",
  },
  {
    id: "zapman",
    label: "ZAP-MAN",
    reward: "+26 zPts",
    statA: "Maze cleared",
    statB: "Bonus path found",
    accent: "#FFE066",
    glow: "rgba(255,224,102,0.22)",
  },
];

export default function PreviewConsoleCard({
  data,
  progressAnimated,
  onLockIn,
}) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [activeGameId, setActiveGameId] = useState(
    data?.games?.[0]?.id || DEFAULT_PLAY_GAMES[0].id
  );

  const isMove = data?.id === "move";
  const isPlay = data?.id === "play";

  const moveFrames = data?.frames || [];
  const hasMoveFrames = isMove && moveFrames.length > 0;

  useEffect(() => {
    if (!hasMoveFrames) return;

    const timer = setInterval(() => {
      setFrameIndex((current) => (current + 1) % moveFrames.length);
    }, 1800);

    return () => clearInterval(timer);
  }, [hasMoveFrames, moveFrames.length]);

  useEffect(() => {
    if (isPlay) {
      setActiveGameId(data?.games?.[0]?.id || DEFAULT_PLAY_GAMES[0].id);
    }
  }, [isPlay, data]);

  const activeMoveFrame = hasMoveFrames
    ? moveFrames[frameIndex]
    : {
        steps: data?.steps || 3240,
        percent: parseInt(data?.bar, 10) || 72,
        reward: data?.reward || "+42 zPts",
        statA: data?.statA || "3,240 steps",
        statB: data?.statB || "Daily streak active",
        stepGoal: data?.stepGoal || 5000,
        pace: data?.pace || "Steady",
      };

  const playGames = useMemo(() => {
    if (Array.isArray(data?.games) && data.games.length > 0) {
      return data.games;
    }
    return DEFAULT_PLAY_GAMES;
  }, [data]);

  const activeGame =
    playGames.find((game) => game.id === activeGameId) || playGames[0];

  const playAccent = activeGame?.accent || data?.accent || "#B486FF";
  const playGlow = activeGame?.glow || data?.glow || "rgba(180,134,255,0.22)";

  const shellAccent = isPlay ? playAccent : data.accent;
  const shellGlow = isPlay ? playGlow : data.glow;

  return (
    <section
      style={{
        flex: 1,
        borderRadius: "28px",
        border: `1px solid ${shellGlow.replace("0.22", "0.34")}`,
        background: `
          radial-gradient(circle at 18% 22%, ${shellGlow}, transparent 24%),
          radial-gradient(circle at 82% 18%, rgba(255,255,255,0.05), transparent 20%),
          linear-gradient(180deg, rgba(8,10,22,0.88) 0%, rgba(6,8,18,0.98) 100%)
        `,
        boxShadow: `0 0 30px ${shellGlow}`,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "440px",
        marginBottom: "16px",
      }}
    >
      <div style={{ padding: "20px 18px 8px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 900,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: shellAccent,
            marginBottom: "12px",
          }}
        >
          V1 Preview
        </div>

        <div
          style={{
            fontSize: "clamp(28px, 8vw, 40px)",
            lineHeight: 0.96,
            fontWeight: 900,
            letterSpacing: "-0.05em",
            color: "rgba(255,255,255,0.14)",
            textTransform: "uppercase",
            maxWidth: "85%",
            marginBottom: "18px",
          }}
        >
          {data.label}
        </div>

        <div
          style={{
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            padding: "16px",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          {isMove ? (
            <>
              <PreviewMoveRing
                percent={progressAnimated ? activeMoveFrame.percent : 0}
                steps={activeMoveFrame.steps}
                stepGoal={activeMoveFrame.stepGoal || data.stepGoal || 5000}
                isLive
                pace={activeMoveFrame.pace || "Steady"}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 800,
                    color: "rgba(245,247,255,0.76)",
                  }}
                >
                  Daily Progress
                </div>

                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 900,
                    color: data.accent,
                  }}
                >
                  {activeMoveFrame.reward}
                </div>
              </div>

              <div
                style={{
                  height: "12px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.08)",
                  overflow: "hidden",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: `${progressAnimated ? activeMoveFrame.percent : 0}%`,
                    height: "100%",
                    borderRadius: "999px",
                    background: `linear-gradient(90deg, ${data.accent} 0%, rgba(255,255,255,0.95) 100%)`,
                    boxShadow: `0 0 18px ${data.glow}`,
                    transition: "width 700ms ease",
                  }}
                />
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
                  {activeMoveFrame.statA}
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
                  {activeMoveFrame.statB}
                </div>
              </div>
            </>
          ) : (
            <>
              <PreviewPlayCarousel
                games={playGames}
                activeGameId={activeGame.id}
                onSelect={setActiveGameId}
              />

              <PreviewPlayStage game={activeGame} />
            </>
          )}
        </div>
      </div>

      <div
        style={{
          padding: "18px 16px",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          background:
            "linear-gradient(180deg, rgba(10,10,20,0.20), rgba(10,10,20,0.90))",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            lineHeight: 1.06,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "#F8FAFF",
            marginBottom: "8px",
          }}
        >
          {data.headline}
        </div>

        <p
          style={{
            margin: "0 auto 16px",
            maxWidth: "320px",
            fontSize: "15px",
            lineHeight: 1.6,
            color: "rgba(235,239,255,0.78)",
          }}
        >
          {data.description}
        </p>

        <button
          onClick={onLockIn}
          style={{
            width: "100%",
            maxWidth: "260px",
            padding: "14px 18px",
            borderRadius: "999px",
            border: "2px solid rgba(165, 103, 255, 0.78)",
            background:
              "linear-gradient(180deg, rgba(14,16,30,0.94) 0%, rgba(8,10,22,0.98) 100%)",
            color: "#F9FAFF",
            fontSize: "16px",
            fontWeight: 800,
            letterSpacing: "0.02em",
            cursor: "pointer",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 26px rgba(73, 44, 162, 0.28)",
          }}
        >
          Lock In. Early.
        </button>
      </div>
    </section>
  );
}