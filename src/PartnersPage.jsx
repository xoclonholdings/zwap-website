import React, { useEffect, useState } from "react";
import SponsorsForm from "./SponsorsForm";
import { whyPartner, partnershipLanes, bestFit } from "./PartnersPage.data";
import SponsorFormModal from "./SponsorFormModal";
import SponsorsForm from "./SponsorsForm";

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
        borderRadius: "26px",
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

function CarouselDots({ count, activeIndex, onSelect, accent = "#B486FF" }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "18px",
        flexWrap: "wrap",
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          style={{
            width: activeIndex === index ? "30px" : "10px",
            height: "10px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            transition: "all 220ms ease",
            background:
              activeIndex === index ? accent : "rgba(255,255,255,0.18)",
            boxShadow:
              activeIndex === index ? `0 0 18px ${accent}` : "none",
            padding: 0,
          }}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

function PillNav({ items, activeIndex, onSelect, accent }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
        marginTop: "18px",
      }}
    >
      {items.map((item, index) => (
        <button
          key={item}
          onClick={() => onSelect(index)}
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
              index === activeIndex ? "#04050A" : "rgba(245,247,255,0.75)",
            background:
              index === activeIndex ? accent : "rgba(255,255,255,0.06)",
            boxShadow:
              index === activeIndex ? `0 0 18px ${accent}` : "none",
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function StackedStatCard({ title, desc, accent, isDesktop }) {
  return (
    <div
      style={{
        borderRadius: "24px",
        border: `1px solid ${accent.border}`,
        background: `
          radial-gradient(circle at 18% 18%, ${accent.glow}, transparent 22%),
          rgba(255,255,255,0.03)
        `,
        boxShadow: `0 0 24px ${accent.glow}`,
        padding: isDesktop ? "28px 26px" : "22px 18px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: isDesktop ? "24px" : "18px",
          fontWeight: 900,
          lineHeight: 1.12,
          letterSpacing: "-0.02em",
          marginBottom: "10px",
          color: "#F8FAFF",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: isDesktop ? "17px" : "15px",
          lineHeight: 1.7,
          color: "rgba(235,239,255,0.78)",
        }}
      >
        {desc}
      </div>
    </div>
  );
}

function WideFeatureCard({ title, desc, accent, isDesktop }) {
  return (
    <div
      style={{
        borderRadius: "26px",
        border: `1px solid ${accent.border}`,
        background: `
          linear-gradient(135deg, ${accent.wash} 0%, rgba(255,255,255,0.02) 55%),
          rgba(255,255,255,0.03)
        `,
        boxShadow: `0 0 28px ${accent.glow}`,
        padding: isDesktop ? "30px 30px" : "24px 20px",
        textAlign: "center",
        minHeight: isDesktop ? "250px" : "unset",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontSize: isDesktop ? "34px" : "24px",
          fontWeight: 900,
          lineHeight: 1.06,
          letterSpacing: "-0.03em",
          marginBottom: "12px",
          color: "#F8FAFF",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: isDesktop ? "18px" : "15px",
          lineHeight: 1.75,
          color: "rgba(235,239,255,0.8)",
          maxWidth: isDesktop ? "760px" : "unset",
          marginInline: "auto",
        }}
      >
        {desc}
      </div>
    </div>
  );
}

export default function PartnersPage({ onBack }) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );

  const [whyIndex, setWhyIndex] = useState(0);
  const [laneIndex, setLaneIndex] = useState(0);
  const [fitIndex, setFitIndex] = useState(0);
  const [isSponsorFormOpen, setIsSponsorFormOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const whyTimer = setInterval(() => {
      setWhyIndex((prev) => (prev + 1) % whyPartner.length);
    }, 4200);

    return () => clearInterval(whyTimer);
  }, []);

  useEffect(() => {
    const laneTimer = setInterval(() => {
      setLaneIndex((prev) => (prev + 1) % partnershipLanes.length);
    }, 4800);

    return () => clearInterval(laneTimer);
  }, []);

  useEffect(() => {
    const fitTimer = setInterval(() => {
      setFitIndex((prev) => (prev + 1) % bestFit.length);
    }, 5200);

    return () => clearInterval(fitTimer);
  }, []);

  const accents = {
    cyan: {
      border: "rgba(103,242,255,0.22)",
      glow: "rgba(103,242,255,0.10)",
      wash: "rgba(103,242,255,0.08)",
      solid: "#67F2FF",
    },
    purple: {
      border: "rgba(180,134,255,0.22)",
      glow: "rgba(180,134,255,0.10)",
      wash: "rgba(180,134,255,0.08)",
      solid: "#B486FF",
    },
    blue: {
      border: "rgba(121,175,255,0.22)",
      glow: "rgba(121,175,255,0.10)",
      wash: "rgba(121,175,255,0.08)",
      solid: "#79AFFF",
    },
    pink: {
      border: "rgba(255,103,212,0.22)",
      glow: "rgba(255,103,212,0.10)",
      wash: "rgba(255,103,212,0.08)",
      solid: "#FF67D4",
    },
  };

  const whyPartner = [
    {
      title: "Reach active users",
      desc: "ZWAP! is built around users who move, play, engage, and return. This is not passive traffic. It is participation-based attention.",
      accent: accents.cyan,
    },
    {
      title: "Show up inside the loop",
      desc: "Partners can live inside challenges, campaigns, rewards, featured experiences, and ecosystem touchpoints that feel natural instead of forced.",
      accent: accents.purple,
    },
    {
      title: "Culture-first positioning",
      desc: "ZWAP! sits at the crossover of rewards, mobile engagement, lifestyle, gaming, and Web3. That creates a unique lane for aligned collaborators.",
      accent: accents.pink,
    },
  ];

  const partnershipLanes = [
    {
      title: "Sponsored campaigns",
      desc: "Fund branded reward campaigns, activity challenges, or ecosystem pushes that put your name inside a high-attention loop.",
      accent: accents.cyan,
    },
    {
      title: "In-app placements",
      desc: "Show up inside the app in ways that match the user journey instead of interrupting it.",
      accent: accents.blue,
    },
    {
      title: "Merch, drops, and collaborations",
      desc: "Partner on products, curated drops, special offers, and reward redemptions connected to your brand.",
      accent: accents.pink,
    },
    {
      title: "Community and event support",
      desc: "Support activations, launch moments, and ecosystem-facing opportunities designed to grow attention and participation.",
      accent: accents.purple,
    },
  ];

  const bestFit = [
    {
      title: "Brands",
      desc: "Consumer brands, wellness, lifestyle, fitness, media, and culture-driven products.",
      accent: accents.cyan,
    },
    {
      title: "Communities",
      desc: "Groups looking to activate members through rewards, participation, and shared momentum.",
      accent: accents.purple,
    },
    {
      title: "Creators",
      desc: "Creators who want to connect audience engagement to utility, motion, and ecosystem participation.",
      accent: accents.pink,
    },
    {
      title: "Web3 and gaming",
      desc: "Projects looking for aligned user growth, branded campaigns, or ecosystem crossover.",
      accent: accents.blue,
    },
  ];

  const activeWhy = whyPartner[whyIndex];
  const activeLane = partnershipLanes[laneIndex];
  const activeFit = bestFit[fitIndex];

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
            Partners
          </div>

          <div style={{ width: isDesktop ? "60px" : "48px" }} />
        </div>

        <section
          style={{
            textAlign: "center",
            marginBottom: isDesktop ? "30px" : "24px",
            maxWidth: "980px",
            marginInline: "auto",
          }}
        >
          <GlassCard
            style={{
              padding: isDesktop ? "30px 30px" : "24px 20px",
            }}
          >
            <div
              style={{
                fontSize: isDesktop ? "clamp(44px, 5vw, 66px)" : "clamp(30px, 9vw, 42px)",
                lineHeight: 1.02,
                fontWeight: 900,
                letterSpacing: "-0.04em",
                marginBottom: "12px",
                color: "#F8FAFF",
              }}
            >
              Partners & <GradientText>Sponsors</GradientText>
            </div>

            <p
              style={{
                margin: "0 auto",
                maxWidth: isDesktop ? "820px" : "320px",
                fontSize: isDesktop ? "20px" : "15px",
                lineHeight: 1.7,
                color: "rgba(235,239,255,0.78)",
              }}
            >
              ZWAP! gives brands, communities, and collaborators a way to connect
              with a mobile-first reward ecosystem built around movement, play,
              culture, and participation.
            </p>
          </GlassCard>
        </section>

        <section
          style={{
            marginBottom: isDesktop ? "30px" : "22px",
            maxWidth: "1100px",
            marginInline: "auto",
          }}
        >
          <SectionEyebrow>Why partner</SectionEyebrow>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "1fr 1fr 1fr" : "1fr",
              gap: "14px",
            }}
          >
            {isDesktop ? (
              whyPartner.map((item) => (
                <StackedStatCard
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                  accent={item.accent}
                  isDesktop={isDesktop}
                />
              ))
            ) : (
              <WideFeatureCard
                title={activeWhy.title}
                desc={activeWhy.desc}
                accent={activeWhy.accent}
                isDesktop={false}
              />
            )}
          </div>

          {!isDesktop && (
            <CarouselDots
              count={whyPartner.length}
              activeIndex={whyIndex}
              onSelect={setWhyIndex}
              accent={activeWhy.accent.solid}
            />
          )}
        </section>

        <section
          style={{
            marginBottom: isDesktop ? "30px" : "22px",
            maxWidth: "1100px",
            marginInline: "auto",
          }}
        >
          <SectionEyebrow>Partnership lanes</SectionEyebrow>

          <div
            style={{
              borderRadius: "28px",
              border: `1px solid ${activeLane.accent.border}`,
              background: `
                radial-gradient(circle at 18% 18%, ${activeLane.accent.glow}, transparent 22%),
                radial-gradient(circle at 82% 78%, rgba(180,134,255,0.10), transparent 28%),
                rgba(255,255,255,0.035)
              `,
              boxShadow: `0 0 32px ${activeLane.accent.glow}`,
              padding: isDesktop ? "34px 34px" : "24px 20px",
              textAlign: "center",
              minHeight: isDesktop ? "260px" : "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transition: "all 260ms ease",
            }}
          >
            <div
              style={{
                fontSize: isDesktop ? "42px" : "30px",
                fontWeight: 900,
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                marginBottom: "12px",
                color: "#F8FAFF",
              }}
            >
              {activeLane.title}
            </div>

            <div
              style={{
                fontSize: isDesktop ? "20px" : "15px",
                lineHeight: 1.75,
                color: "rgba(235,239,255,0.8)",
                maxWidth: isDesktop ? "760px" : "unset",
                marginInline: "auto",
              }}
            >
              {activeLane.desc}
            </div>

            <PillNav
              items={partnershipLanes.map((item) => item.title)}
              activeIndex={laneIndex}
              onSelect={setLaneIndex}
              accent={activeLane.accent.solid}
            />
          </div>
        </section>

        <section
          style={{
            marginBottom: isDesktop ? "30px" : "22px",
            maxWidth: "1100px",
            marginInline: "auto",
          }}
        >
          <SectionEyebrow>Best fit</SectionEyebrow>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "repeat(2, minmax(0, 1fr))" : "1fr",
              gap: "14px",
            }}
          >
            {isDesktop ? (
              bestFit.map((item) => (
                <StackedStatCard
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                  accent={item.accent}
                  isDesktop={isDesktop}
                />
              ))
            ) : (
              <GlassCard
                style={{
                  textAlign: "center",
                  border: `1px solid ${activeFit.accent.border}`,
                  boxShadow: `0 0 26px ${activeFit.accent.glow}`,
                  padding: "24px 20px",
                }}
              >
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: 900,
                    lineHeight: 1.08,
                    letterSpacing: "-0.03em",
                    marginBottom: "12px",
                    color: "#F8FAFF",
                  }}
                >
                  {activeFit.title}
                </div>

                <div
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "rgba(235,239,255,0.8)",
                  }}
                >
                  {activeFit.desc}
                </div>

                <CarouselDots
                  count={bestFit.length}
                  activeIndex={fitIndex}
                  onSelect={setFitIndex}
                  accent={activeFit.accent.solid}
                />
              </GlassCard>
            )}
          </div>
        </section>

        <section
            style={{
              maxWidth: "980px",
              marginInline: "auto",
              width: "100%",
            }}
          >
            <GlassCard
              style={{
                textAlign: "center",
                padding: isDesktop ? "30px 30px" : "22px 18px",
              }}
            >
              <div
                style={{
                  fontSize: isDesktop ? "40px" : "24px",
                  lineHeight: 1.08,
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  marginBottom: "10px",
                  color: "#F8FAFF",
                }}
              >
                Interested in partnering?
              </div>
          
              <p
                style={{
                  margin: "0 auto 22px",
                  maxWidth: isDesktop ? "760px" : "310px",
                  fontSize: isDesktop ? "18px" : "15px",
                  lineHeight: 1.7,
                  color: "rgba(235,239,255,0.76)",
                }}
              >
                Use the sponsor interest form to tell us who you are, what you
                represent, and how you’d like to work with ZWAP!
              </p>
          
              <SponsorsForm />
            </GlassCard>
          </section>

        <footer
          style={{
            marginTop: "22px",
            paddingTop: "18px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "rgba(236, 240, 255, 0.72)",
            display: "flex",
            flexDirection: isDesktop ? "row" : "column",
            alignItems: "center",
            justifyContent: isDesktop ? "space-between" : "center",
            gap: "12px",
            textAlign: isDesktop ? "left" : "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              justifyContent: "center",
              fontSize: "14px",
            }}
          >
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
              Terms of Service
            </a>
          </div>

          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.5,
              maxWidth: isDesktop ? "420px" : "280px",
              textAlign: isDesktop ? "right" : "center",
            }}
          >
            © 2026 ZWAP!™ owned by ZWAP LLC. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}