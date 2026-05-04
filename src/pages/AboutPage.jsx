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
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      <div>
        <div
          style={{
            fontSize: "22px",
            fontWeight: 900,
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

export default function AboutPage(props) {
  const {
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
  } = props;

  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        color: "#F5F7FF",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${featureIntro})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(3,3,8,0.75) 0%, rgba(3,3,8,0.92) 60%, rgba(3,3,8,0.98) 100%)",
          zIndex: 1,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: isDesktop ? "900px" : "430px",
          padding: isDesktop ? "32px" : "20px 16px 28px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "transparent",
            border: "none",
            color: "rgba(245,247,255,0.76)",
            fontSize: "15px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          ← Back
        </button>

        <InfoTile title="What is ZWAP!" isDesktop={isDesktop}>
          ZWAP! is a behavior-based reward ecosystem that turns movement,
          play, learning, and daily participation into measurable progression.
        </InfoTile>

        <GlassCard>
          <SectionEyebrow>Dual currency system</SectionEyebrow>

          <div style={{ display: "grid", gap: "14px" }}>
            <CurrencyMiniCard
              title="ZWAP!"
              desc="The utility layer used for value, spending, and future exchange."
              coinSrc={zwapCoin}
              coinAlt="ZWAP coin"
              accent={{ text: "#67F2FF", border: "rgba(103,242,255,0.24)", glow: "rgba(103,242,255,0.10)" }}
            />

            <CurrencyMiniCard
              title="zPts"
              desc="The progression layer earned through activity before value unlocks."
              coinSrc={zPtsCoin}
              coinAlt="zPts coin"
              accent={{ text: "#FF67D4", border: "rgba(255,103,212,0.24)", glow: "rgba(255,103,212,0.10)" }}
            />
          </div>
        </GlassCard>

        <button
          onClick={onLockIn}
          style={{
            padding: "14px",
            borderRadius: "999px",
            border: "2px solid rgba(165, 103, 255, 0.78)",
            background: "rgba(10,12,20,0.9)",
            color: "#F9FAFF",
            fontSize: "16px",
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          Lock In. Early.
        </button>

        <GlobalFooterLinks
          isDesktop={isDesktop}
          onPrivacy={onPrivacy}
          onTerms={onTerms}
          onSitemap={onSitemap}
          onNews={onNews}
          onBlog={onBlog}
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