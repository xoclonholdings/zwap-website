import React, { useEffect, useState } from "react";
import featureIntro from "../assets/features/feature-intro.PNG";
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

function AccentGradientText({ children, gradient }) {
  return (
    <span
      style={{
        background: gradient,
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
          "radial-gradient(circle at 80% 18%, rgba(180,134,255,0.12), transparent 28%), rgba(8,10,22,0.72)",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.02) inset, 0 12px 36px rgba(0,0,0,0.24)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        padding: "22px 20px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function InfoTile({ isDesktop = false }) {
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
        What is <GradientText>ZWAP!</GradientText>
      </div>

      <div
        style={{
          fontSize: isDesktop ? "17px" : "15px",
          lineHeight: 1.65,
          color: "rgba(235,239,255,0.78)",
        }}
      >
        <GradientText>ZWAP!</GradientText> is a behavior-based reward ecosystem
        that turns movement, play, learning, and daily participation into
        measurable progression.
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
            marginBottom: "8px",
          }}
        >
          {title === "ZWAP!" ? (
            <GradientText>ZWAP!</GradientText>
          ) : (
            <AccentGradientText gradient={accent.gradient}>
              {title}
            </AccentGradientText>
          )}
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
          ? `1px solid ${mode.accent.border}`
          : "1px solid rgba(255,255,255,0.08)",
        background: isActive
          ? mode.accent.background
          : "rgba(255,255,255,0.04)",
        color: isActive ? "#F8FAFF" : "rgba(245,247,255,0.72)",
        borderRadius: "999px",
        padding: "10px 14px",
        cursor: "pointer",
        fontSize: "12px",
        fontWeight: 900,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        boxShadow: isActive ? `0 0 18px ${mode.accent.glow}` : "none",
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
  const [scrollY, setScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModeIndex((prev) => (prev + 1) % 6);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY || 0);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const accents = {
    cyan: {
      text: "#67F2FF",
      border: "rgba(103,242,255,0.28)",
      glow: "rgba(103,242,255,0.14)",
      gradient: "linear-gradient(90deg, #67F2FF 0%, #7FD9FF 100%)",
      background:
        "linear-gradient(90deg, rgba(103,242,255,0.18) 0%, rgba(127,217,255,0.14) 100%)",
    },
    purple: {
      text: "#B486FF",
      border: "rgba(180,134,255,0.28)",
      glow: "rgba(180,134,255,0.14)",
      gradient: "linear-gradient(90deg, #B486FF 0%, #D16BFF 100%)",
      background:
        "linear-gradient(90deg, rgba(180,134,255,0.18) 0%, rgba(209,107,255,0.14) 100%)",
    },
    blue: {
      text: "#79AFFF",
      border: "rgba(121,175,255,0.28)",
      glow: "rgba(121,175,255,0.14)",
      gradient: "linear-gradient(90deg, #79AFFF 0%, #66F2FF 100%)",
      background:
        "linear-gradient(90deg, rgba(121,175,255,0.18) 0%, rgba(102,242,255,0.14) 100%)",
    },
    amber: {
      text: "#FFC857",
      border: "rgba(255,200,87,0.28)",
      glow: "rgba(255,200,87,0.14)",
      gradient: "linear-gradient(90deg, #FFC857 0%, #FF8E5C 100%)",
      background:
        "linear-gradient(90deg, rgba(255,200,87,0.18) 0%, rgba(255,142,92,0.14) 100%)",
    },
    green: {
      text: "#7CFF5C",
      border: "rgba(124,255,92,0.28)",
      glow: "rgba(124,255,92,0.14)",
      gradient: "linear-gradient(90deg, #7CFF5C 0%, #67F2FF 100%)",
      background:
        "linear-gradient(90deg, rgba(124,255,92,0.18) 0%, rgba(103,242,255,0.12) 100%)",
    },
    pink: {
      text: "#FF67D4",
      border: "rgba(255,103,212,0.28)",
      glow: "rgba(255,103,212,0.14)",
      gradient: "linear-gradient(90deg, #FF67D4 0%, #B486FF 100%)",
      background:
        "linear-gradient(90deg, rgba(255,103,212,0.18) 0%, rgba(180,134,255,0.14) 100%)",
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
      title: "LEARN",
      desc: "Turn knowledge into measurable progress through lessons and guided systems.",
      accent: accents.blue,
    },
    {
      title: "SWAP",
      desc: "Convert progression into long-term utility through structured value unlocks.",
      accent: accents.amber,
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
        position: "relative",
        overflow: "hidden",
        color: "#F5F7FF",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url(${featureIntro})`,
          backgroundSize: isDesktop ? "cover" : "auto 112%",
          backgroundPosition: isDesktop
            ? `center ${scrollY * 0.08}px`
            : `center calc(50% + ${scrollY * 0.06}px)`,
          transform: `scale(${isDesktop ? 1.06 : 1.02})`,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "fixed",
          inset: 0,
          background: `
            radial-gradient(circle at 72% 22%, rgba(204, 91, 255, 0.16), transparent 18%),
            radial-gradient(circle at 18% 28%, rgba(88, 240, 255, 0.12), transparent 16%),
            linear-gradient(180deg, rgba(3,3,8,0.58) 0%, rgba(3,3,8,0.82) 46%, rgba(3,3,8,0.96) 100%)
          `,
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: isDesktop ? "960px" : "430px",
          minHeight: "100dvh",
          padding: isDesktop
            ? "32px 28px 36px"
            : "calc(env(safe-area-inset-top, 0px) + 14px) 16px calc(env(safe-area-inset-bottom, 0px) + 28px)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: isDesktop ? "20px" : "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: isDesktop ? "12px" : "8px",
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

        <InfoTile isDesktop={isDesktop} />

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
            }}
          >
            <AccentGradientText gradient={activeMode.accent.gradient}>
              {activeMode.title}
            </AccentGradientText>
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
            spending without returning anything meaningful.{" "}
            <GradientText>ZWAP!</GradientText> flips that by rewarding actions
            that already fit into daily life.
          </div>
        </GlassCard>

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
              Move. Play. Learn. Swap. Grow. Shop.
            </span>

            <span style={{ color: "rgba(235,239,255,0.62)" }}>
              <GradientText>ZWAP!</GradientText> is rolling out in phases, with
              more systems unlocking over time.
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