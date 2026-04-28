import React, { useEffect, useState } from "react";
import featureIntro from "../assets/feature-intro.PNG";
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

function InfoTile({ title, children, isDesktop = false }) {
  return (
    <GlassCard
      style={{
        minHeight: isDesktop ? "150px" : "unset",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        padding: isDesktop ? "26px 24px" : "22px 20px",
      }}
    >
      <div
        style={{
          fontSize: isDesktop ? "34px" : "26px",
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          color: "#F9FBFF",
          marginBottom: "10px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: isDesktop ? "17px" : "15px",
          lineHeight: 1.65,
          color: "rgba(235,239,255,0.78)",
        }}
      >
        {children}
      </div>
    </GlassCard>
  );
}

function CurrencyMiniCard({ title, desc, coinSrc, coinAlt, accent }) {
  return (
    <div
      style={{
        borderRadius: "24px",
        border: `1px solid ${accent.border}`,
        background: "rgba(255,255,255,0.035)",
        padding: "18px 16px",
        display: "grid",
        gridTemplateColumns: "64px 1fr",
        gap: "14px",
        alignItems: "center",
        boxShadow: `0 0 24px ${accent.glow}`,
      }}
    >
      <div
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "999px",
          background: "rgba(255,255,255,0.04)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 20px ${accent.glow}`,
        }}
      >
        <img
          src={coinSrc}
          alt={coinAlt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <div>
        <div
          style={{
            fontSize: "22px",
            fontWeight: 900,
            lineHeight: 1,
            color: accent.text,
            marginBottom: "8px",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: "14px",
            lineHeight: 1.5,
            color: "rgba(235,239,255,0.78)",
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  );
}

function ModePill({ mode, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: isActive
          ? "1px solid rgba(103,242,255,0.34)"
          : "1px solid rgba(255,255,255,0.08)",
        background: isActive
          ? "linear-gradient(90deg, rgba(103,242,255,0.18) 0%, rgba(180,134,255,0.18) 100%)"
          : "rgba(255,255,255,0.04)",
        color: isActive ? "#F8FAFF" : "rgba(245,247,255,0.72)",
        borderRadius: "999px",
        padding: "10px 14px",
        cursor: "pointer",
        fontSize: "12px",
        fontWeight: 900,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        boxShadow: isActive
          ? "0 0 18px rgba(103,242,255,0.12)"
          : "none",
      }}
    >
      {mode.title}
    </button>
  );
}

export default function AboutPage({
  onBack,
  onLockIn,
  onPrivacy,
  onTerms,
  onSitemap,
  onNews,
  onBlog,
  onFeatures,
  onPartners,
  onDevelopers,
  onEnterprise,
  onContact,
  onFAQ,
  onHowItWorks,
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
    green: {
      text: "#7CFF5C",
      border: "rgba(124,255,92,0.24)",
      glow: "rgba(124,255,92,0.10)",
    },
  };

  const modes = [
    {
      title: "MOVE",
      desc: "Walk, build streaks, and turn real-world motion into progression.",
      accent: accents.cyan,
    },
    {
      title: "PLAY",
      desc: "Play games, complete challenges, and create momentum through engagement.",
      accent: accents.purple,
    },
    {
      title: "GARDEN",
      desc: "Protect your streak, grow your Garden, and give consistency a living reward layer.",
      accent: accents.green,
    },
    {
      title: "SHOP",
      desc: "Use progression on boosts, digital items, premium content, and future real-world rewards.",
      accent: accents.pink,
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
            display: "grid",
            gridTemplateColumns: isDesktop ? "minmax(330px, 0.78fr) minmax(0, 1fr)" : "1fr",
            gap: isDesktop ? "28px" : "18px",
            alignItems: "stretch",
            marginBottom: isDesktop ? "34px" : "26px",
          }}
        >
          <div
            style={{
              borderRadius: "32px",
              border: "1px solid rgba(255,255,255,0.08)",
              overflow: "hidden",
              minHeight: isDesktop ? "720px" : "560px",
              background: "rgba(255,255,255,0.03)",
              boxShadow:
                "0 24px 60px rgba(0,0,0,0.34), 0 0 34px rgba(103,242,255,0.08)",
              position: "relative",
            }}
          >
            <img
              src={featureIntro}
              alt="ZWAP! movement and rewards intro"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(3,3,8,0.02) 0%, rgba(3,3,8,0.10) 52%, rgba(3,3,8,0.30) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gap: isDesktop ? "20px" : "16px",
              alignContent: "center",
            }}
          >
            <InfoTile title="What is ZWAP!" isDesktop={isDesktop}>
              ZWAP! is a behavior-based reward ecosystem that turns movement,
              play, learning, and daily participation into measurable
              progression.
            </InfoTile>

            <GlassCard
              style={{
                padding: isDesktop ? "26px 24px" : "22px 20px",
              }}
            >
              <SectionEyebrow>Dual currency system</SectionEyebrow>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
                  gap: "14px",
                }}
              >
                <CurrencyMiniCard
                  title="ZWAP!"
                  desc="The utility layer used for value, spending, and future exchange."
                  coinSrc={zwapCoin}
                  coinAlt="ZWAP coin"
                  accent={accents.cyan}
                />

                <CurrencyMiniCard
                  title="zPts"
                  desc="The progression layer earned through activity before value unlocks."
                  coinSrc={zPtsCoin}
                  coinAlt="zPts coin"
                  accent={accents.pink}
                />
              </div>
            </GlassCard>

            <GlassCard
              style={{
                padding: isDesktop ? "30px 28px" : "24px 20px",
                textAlign: "center",
                border: `1px solid ${activeMode.accent.border}`,
                boxShadow: `0 0 34px ${activeMode.accent.glow}`,
              }}
            >
              <SectionEyebrow>Modes</SectionEyebrow>

              <div
                style={{
                  fontSize: isDesktop ? "44px" : "34px",
                  fontWeight: 900,
                  letterSpacing: "0.03em",
                  marginBottom: "12px",
                  color: activeMode.accent.text,
                }}
              >
                {activeMode.title}
              </div>

              <div
                style={{
                  fontSize: isDesktop ? "19px" : "15px",
                  lineHeight: 1.7,
                  color: "rgba(235,239,255,0.82)",
                  maxWidth: "44rem",
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
                  marginTop: "20px",
                  flexWrap: "wrap",
                }}
              >
                {modes.map((mode, index) => (
                  <ModePill
                    key={mode.title}
                    mode={mode}
                    isActive={index === activeModeIndex}
                    onClick={() => setActiveModeIndex(index)}
                  />
                ))}
              </div>
            </GlassCard>
          </div>
        </section>

        <section
          style={{
            marginBottom: isDesktop ? "28px" : "24px",
            maxWidth: "1060px",
            marginInline: "auto",
            width: "100%",
          }}
        >
          <GlassCard
            style={{
              textAlign: "center",
              padding: isDesktop ? "30px 34px" : "22px 20px",
            }}
          >
            <div
              style={{
                fontSize: isDesktop ? "44px" : "28px",
                lineHeight: 1.08,
                fontWeight: 900,
                letterSpacing: "-0.04em",
                marginBottom: "14px",
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
              Most platforms are built to keep users scrolling, tapping, and
              spending without returning anything meaningful. ZWAP! flips that
              by rewarding actions that already fit into daily life.
            </div>
          </GlassCard>
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
              Move. Play. Grow. Shop.
            </span>
            <span style={{ color: "rgba(235,239,255,0.62)" }}>
              ZWAP! is rolling out in phases, with more systems unlocking over
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
          onNews={onNews}
          onBlog={onBlog}
          onAbout={undefined}
          onFeatures={onFeatures}
          onPartners={onPartners}
          onDevelopers={onDevelopers}
          onEnterprise={onEnterprise}
          onContact={onContact}
          onFAQ={onFAQ}
          onHowItWorks={onHowItWorks}
        />
      </div>
    </div>
  );
}