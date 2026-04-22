import React, { useEffect, useState } from "react";
import bang from "../assets/Zwap_bang_3d.png";
import zwapCoin from "../assets/zwap_bang_coin.PNG";
import zPtsCoin from "../assets/zpts_z_coin.PNG";
import GlobalFooterLinks from "../components/GlobalFooterLinks";

function GradientText({ children }) {
  return (
    <span
      style={{
        background:
          "linear-gradient(90deg, #66F2FF 0%, #7FD9FF 18%, #B486FF 55%, #FF67D4 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

function SectionEyebrow({ children }) {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "13px",
        fontWeight: 900,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "rgba(245,247,255,0.56)",
        marginBottom: "14px",
      }}
    >
      {children}
    </div>
  );
}

function GlassCard({ children, style = {} }) {
  return (
    <div
      style={{
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "radial-gradient(circle at 80% 18%, rgba(180,134,255,0.12), transparent 28%), rgba(255,255,255,0.035)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.02) inset, 0 12px 36px rgba(0,0,0,0.18)",
        padding: "22px 20px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function CurrencyCard({
  title,
  desc,
  accent,
  coinSrc,
  coinAlt,
  reverse = false,
  isDesktop = false,
}) {
  const background = reverse
    ? "linear-gradient(135deg, rgba(255,103,212,0.10) 0%, rgba(180,134,255,0.10) 48%, rgba(102,242,255,0.08) 100%)"
    : "linear-gradient(135deg, rgba(102,242,255,0.10) 0%, rgba(121,175,255,0.10) 48%, rgba(180,134,255,0.08) 100%)";

  return (
    <div
      style={{
        borderRadius: "26px",
        border: `1px solid ${accent.border}`,
        background,
        boxShadow: `0 0 28px ${accent.glow}`,
        padding: isDesktop ? "24px 22px" : "22px 18px",
        minHeight: isDesktop ? "100%" : "unset",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: isDesktop ? "108px" : "92px",
          height: isDesktop ? "108px" : "92px",
          borderRadius: "999px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "14px",
          background: "rgba(255,255,255,0.04)",
          boxShadow: `0 0 26px ${accent.glow}`,
          flexShrink: 0,
        }}
      >
        <img
          src={coinSrc}
          alt={coinAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: reverse
              ? "drop-shadow(0 0 18px rgba(255,103,212,0.22))"
              : "drop-shadow(0 0 18px rgba(103,242,255,0.22))",
          }}
        />
      </div>

      <div
        style={{
          fontSize: isDesktop ? "30px" : "26px",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          marginBottom: "10px",
          color: accent.text,
          lineHeight: 1.05,
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: isDesktop ? "17px" : "15px",
          lineHeight: 1.7,
          color: "rgba(235,239,255,0.82)",
          maxWidth: "34rem",
        }}
      >
        {desc}
      </div>
    </div>
  );
}

export default function AboutPage({
  onBack,
  onLockIn,
  onPrivacy,
  onTerms,
  onSitemap,
}) {
  const [activeModeIndex, setActiveModeIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModeIndex((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const accents = {
    cyan: {
      text: "#67F2FF",
      border: "rgba(103,242,255,0.24)",
      glow: "rgba(103,242,255,0.10)",
    },
    purple: {
      text: "#B486FF",
      border: "rgba(180,134,255,0.24)",
      glow: "rgba(180,134,255,0.10)",
    },
    blue: {
      text: "#79AFFF",
      border: "rgba(121,175,255,0.24)",
      glow: "rgba(121,175,255,0.10)",
    },
    pink: {
      text: "#FF67D4",
      border: "rgba(255,103,212,0.24)",
      glow: "rgba(255,103,212,0.10)",
    },
  };

  const modes = [
    {
      title: "MOVE",
      desc: "Walk and build progression through real-world movement. The more you move, the more momentum you create inside ZWAP.",
      accent: accents.cyan,
    },
    {
      title: "PLAY",
      desc: "Play games, stay engaged, and turn participation into progression through skill, consistency, and return behavior.",
      accent: accents.purple,
    },
    {
      title: "SHOP",
      desc: "Use what you earn on curated products, digital drops, and ecosystem-based offers designed to make rewards feel useful.",
      accent: accents.pink,
    },
    {
      title: "SWAP",
      desc: "Exchange unlocked value through a cleaner, guided experience built to keep utility and flow at the center.",
      accent: accents.blue,
    },
  ];

  const activeMode = modes[activeModeIndex];

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: `
          radial-gradient(circle at 72% 22%, rgba(204, 91, 255, 0.10), transparent 16%),
          radial-gradient(circle at 18% 28%, rgba(88, 240, 255, 0.08), transparent 14%),
          radial-gradient(circle at 55% 62%, rgba(255, 176, 86, 0.05), transparent 12%),
          linear-gradient(180deg, #030308 0%, #080913 58%, #04050A 100%)
        `,
        color: "#F5F7FF",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: isDesktop ? "1240px" : "430px",
          minHeight: "100dvh",
          padding: isDesktop
            ? "32px 28px 36px"
            : "calc(env(safe-area-inset-top, 0px) + 14px) 16px calc(env(safe-area-inset-bottom, 0px) + 28px)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: isDesktop ? "26px" : "18px",
          }}
        >
          <button
            onClick={onBack}
            style={{
              border: "none",
              background: "transparent",
              color: "rgba(245,247,255,0.76)",
              fontSize: isDesktop ? "17px" : "15px",
              fontWeight: 700,
              cursor: "pointer",
              padding: 0,
            }}
          >
            ← Back
          </button>

          <div
            style={{
              fontSize: isDesktop ? "14px" : "13px",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(245,247,255,0.56)",
            }}
          >
            About
          </div>

          <div style={{ width: isDesktop ? "60px" : "48px" }} />
        </div>

        <section
          style={{
            textAlign: "center",
            marginBottom: isDesktop ? "34px" : "26px",
            maxWidth: "980px",
            marginInline: "auto",
          }}
        >
          <img
            src={bang}
            alt="ZWAP!"
            style={{
              width: isDesktop ? "128px" : "112px",
              height: "auto",
              display: "block",
              margin: "0 auto 18px",
              filter: "drop-shadow(0 0 22px rgba(103,242,255,0.24))",
            }}
          />

          <h1
            style={{
              margin: "0 0 14px",
              fontSize: isDesktop
                ? "clamp(44px, 5vw, 66px)"
                : "clamp(34px, 10vw, 48px)",
              lineHeight: 1.02,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#F9FBFF",
            }}
          >
            What is <GradientText>ZWAP!</GradientText>?
          </h1>

          <p
            style={{
              margin: "0 auto 14px",
              maxWidth: isDesktop ? "860px" : "330px",
              fontSize: isDesktop ? "23px" : "16px",
              lineHeight: isDesktop ? 1.55 : 1.65,
              color: "rgba(235,239,255,0.8)",
            }}
          >
            ZWAP! is a behavior-based reward ecosystem that turns movement,
            play, and everyday participation into measurable progression and
            controlled digital value.
          </p>

          <div
            style={{
              fontSize: isDesktop ? "20px" : "15px",
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "rgba(235,239,255,0.78)",
            }}
          >
            Move. Play. Earn Today.
          </div>
        </section>

        <section
          style={{
            marginBottom: isDesktop ? "26px" : "18px",
            maxWidth: "980px",
            marginInline: "auto",
          }}
        >
          <GlassCard
            style={{
              textAlign: "center",
              padding: isDesktop ? "28px 30px" : "22px 20px",
            }}
          >
            <div
              style={{
                fontSize: isDesktop ? "44px" : "26px",
                lineHeight: 1.08,
                fontWeight: 900,
                letterSpacing: "-0.04em",
                marginBottom: "12px",
                color: "#F9FBFF",
              }}
            >
              Most apps{" "}
              <span style={{ color: "rgba(245,247,255,0.58)" }}>take.</span>
              <br />
              <GradientText>ZWAP!</GradientText> gives back.
            </div>

            <div
              style={{
                fontSize: isDesktop ? "20px" : "15px",
                lineHeight: 1.7,
                color: "rgba(235,239,255,0.76)",
                maxWidth: isDesktop ? "860px" : "unset",
                marginInline: "auto",
              }}
            >
              Most platforms are built to keep you scrolling, tapping, and
              spending without returning anything meaningful. ZWAP! flips that
              by rewarding actions that already fit into daily life.
            </div>
          </GlassCard>
        </section>

        <section
          style={{
            marginBottom: isDesktop ? "30px" : "24px",
            maxWidth: "1100px",
            marginInline: "auto",
          }}
        >
          <SectionEyebrow>One ecosystem. Four modes.</SectionEyebrow>

          <div
            style={{
              borderRadius: "28px",
              border: `1px solid ${activeMode.accent.border}`,
              background: `
                radial-gradient(circle at 20% 20%, ${activeMode.accent.glow}, transparent 24%),
                radial-gradient(circle at 80% 78%, rgba(180,134,255,0.10), transparent 28%),
                rgba(255,255,255,0.035)
              `,
              boxShadow: `0 0 34px ${activeMode.accent.glow}`,
              padding: isDesktop ? "30px 34px" : "22px 20px",
              textAlign: "center",
              minHeight: isDesktop ? "260px" : "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transition: "all 300ms ease",
            }}
          >
            <div
              style={{
                fontSize: isDesktop ? "46px" : "34px",
                fontWeight: 900,
                letterSpacing: "0.03em",
                marginBottom: "14px",
                color: activeMode.accent.text,
              }}
            >
              {activeMode.title}
            </div>

            <div
              style={{
                fontSize: isDesktop ? "22px" : "16px",
                lineHeight: isDesktop ? 1.75 : 1.7,
                color: "rgba(235,239,255,0.82)",
                maxWidth: isDesktop ? "860px" : "unset",
                marginInline: "auto",
              }}
            >
              {activeMode.desc}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "18px",
                flexWrap: "wrap",
              }}
            >
              {modes.map((mode, index) => (
                <button
                  key={mode.title}
                  onClick={() => setActiveModeIndex(index)}
                  style={{
                    border: "none",
                    cursor: "pointer",
                    padding: "8px 14px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color:
                      index === activeModeIndex
                        ? "#04050A"
                        : "rgba(245,247,255,0.75)",
                    background:
                      index === activeModeIndex
                        ? mode.accent.text
                        : "rgba(255,255,255,0.06)",
                    boxShadow:
                      index === activeModeIndex
                        ? `0 0 18px ${mode.accent.glow}`
                        : "none",
                  }}
                >
                  {mode.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section
          style={{
            marginBottom: isDesktop ? "30px" : "24px",
            maxWidth: "1100px",
            marginInline: "auto",
          }}
        >
          <SectionEyebrow>Dual currency system</SectionEyebrow>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
              gap: isDesktop ? "18px" : "14px",
              alignItems: "stretch",
            }}
          >
            <CurrencyCard
              title="ZWAP!"
              desc="The utility layer of the ecosystem, used across rewards, spending, and future exchange."
              accent={accents.cyan}
              coinSrc={zwapCoin}
              coinAlt="ZWAP coin"
              isDesktop={isDesktop}
            />

            <CurrencyCard
              title="zPts"
              desc="The progression layer earned through activity, engagement, and consistency before value is unlocked."
              accent={accents.pink}
              coinSrc={zPtsCoin}
              coinAlt="zPts coin"
              reverse
              isDesktop={isDesktop}
            />
          </div>
        </section>

        <section
          style={{
            marginBottom: "14px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: isDesktop ? "18px" : "14px",
              fontWeight: 800,
              lineHeight: 1.6,
              color: "rgba(235,239,255,0.76)",
              maxWidth: isDesktop ? "780px" : "320px",
              margin: "0 auto",
            }}
          >
            <span
              style={{
                display: "block",
                marginBottom: "6px",
                color: "#F8FAFF",
              }}
            >
              Move. Play. Swap. Shop.
            </span>
            <span style={{ color: "rgba(235,239,255,0.62)" }}>
              ZWAP is rolling out in phases, with more systems unlocking over
              time.
            </span>
          </div>
        </section>

        <section
          style={{
            marginBottom: "28px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={onLockIn}
            style={{
              padding: "15px 28px",
              borderRadius: "999px",
              border: "2px solid rgba(165, 103, 255, 0.78)",
              background:
                "linear-gradient(180deg, rgba(14,16,30,0.94) 0%, rgba(8,10,22,0.98) 100%)",
              color: "#F9FAFF",
              fontSize: isDesktop ? "19px" : "17px",
              fontWeight: 800,
              letterSpacing: "0.02em",
              cursor: "pointer",
              width: "100%",
              maxWidth: "270px",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 26px rgba(73, 44, 162, 0.28)",
            }}
          >
            Lock In. Early.
          </button>
        </section>

        <GlobalFooterLinks
          isDesktop={isDesktop}
          onPrivacy={onPrivacy}
          onTerms={onTerms}
          onSitemap={onSitemap}
        />
      </div>
    </div>
  );
}