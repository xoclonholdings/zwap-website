import React, { useState } from "react";
import GlobalFooterLinks from "../components/GlobalFooterLinks";

const FAQ_SECTIONS = [
  {
    id: "general",
    title: "General",
    faqs: [
      {
        question: "What is ZWAP!?",
        answer:
          "ZWAP! is a behavior-based rewards ecosystem that turns movement, gameplay, learning, and daily engagement into measurable progression through zPts and ZWAP.",
      },
      {
        question: "What is ZWAP! designed to do?",
        answer:
          "ZWAP! is designed to reward real participation, build consistency over time, and introduce digital value through structured progression instead of instant extraction.",
      },
      {
        question: "Is ZWAP! a game, a fitness app, or a crypto app?",
        answer:
          "ZWAP! combines pieces of all three, but its core identity is a movement-first progression platform. It blends activity, rewards, education, retention, and digital utility into one ecosystem.",
      },
      {
        question: "Is ZWAP! free to use?",
        answer:
          "ZWAP! is designed to include a free tier. Future premium layers may expand capacity, unlock extra features, or improve efficiency, but the core platform is built to remain accessible.",
      },
    ],
  },
  {
    id: "rewards",
    title: "Rewards",
    faqs: [
      {
        question: "How does the reward system work?",
        answer:
          "Users complete real actions such as movement, gameplay, learning, and daily engagement. Those actions generate zPts, which support progression, unlocks, and eventually controlled access to ZWAP and other rewards.",
      },
      {
        question: "Why are rewards delayed in ZWAP!?",
        answer:
          "Delayed rewards help build stronger habits, reduce impulsive extraction, and make progress feel earned. The system is designed around consistency, not instant payout loops.",
      },
      {
        question: "Does ZWAP! reward passive presence?",
        answer:
          "No. ZWAP! is built to reward action, completion, contribution, rhythm, and structured participation rather than passive app usage.",
      },
    ],
  },
  {
    id: "zpts",
    title: "zPts",
    faqs: [
      {
        question: "What are zPts?",
        answer:
          "zPts are the off-chain progression layer inside ZWAP!. They represent effort, activity, and engagement across the ecosystem.",
      },
      {
        question: "How do users earn zPts?",
        answer:
          "Users can earn zPts through movement, gameplay, learning, daily tasks, and future ecosystem activities that pass through platform reward logic.",
      },
      {
        question: "Can I cash out zPts directly?",
        answer:
          "No. zPts are not direct cash and are not meant to function as an instant withdrawal system. They are a progression layer that supports unlocks and structured value access inside the ecosystem.",
      },
      {
        question: "Why does ZWAP! use zPts first?",
        answer:
          "zPts create a buffer between activity and value. That helps control emissions, strengthen retention, reduce abuse, and make the ecosystem healthier over time.",
      },
    ],
  },
  {
    id: "zwap",
    title: "ZWAP",
    faqs: [
      {
        question: "What is ZWAP?",
        answer:
          "ZWAP is the on-chain utility layer within the ZWAP! ecosystem. It is designed to be introduced through progression rather than immediate direct farming.",
      },
      {
        question: "How do zPts become ZWAP?",
        answer:
          "zPts support eligibility and progression toward controlled ZWAP unlocks. The platform uses thresholds, reward rules, caps, and staged release logic rather than continuous direct conversion.",
      },
      {
        question: "Is ZWAP! an exchange?",
        answer:
          "No. ZWAP! is not designed as a traditional exchange. It is a structured progression environment where value is introduced after behavior and engagement are established.",
      },
    ],
  },
  {
    id: "move",
    title: "MOVE",
    faqs: [
      {
        question: "How does MOVE work?",
        answer:
          "MOVE is the movement-based layer of ZWAP!. It turns real physical activity into progression through validated step-based input and reward logic.",
      },
      {
        question: "Why is movement important in ZWAP!?",
        answer:
          "Movement is the primary system input. It anchors the platform in real-world behavior and helps make progression feel earned, consistent, and grounded in daily action.",
      },
      {
        question: "Does ZWAP! only reward walking?",
        answer:
          "Movement is the first major input, but ZWAP! is built as a broader ecosystem that also includes gameplay, learning, daily tasks, sponsor rewards, and future system expansions.",
      },
    ],
  },
  {
    id: "shop-swap",
    title: "Shop & Swap",
    faqs: [
      {
        question: "What is the Shop in ZWAP!?",
        answer:
          "The Shop is the first major value sink inside the ecosystem. It is designed to teach users utility, progression, and strategic spending before Swap becomes a major part of the experience.",
      },
      {
        question: "Why does Shop come before Swap?",
        answer:
          "Shop comes first because utility should be learned before exchange. This helps users build a relationship with value and rewards before more liquid behaviors enter the system.",
      },
      {
        question: "What is Swap?",
        answer:
          "Swap is the exchange layer planned for the broader ZWAP! ecosystem. It is intended to arrive later, after retention, value sinks, and economic structure are established properly.",
      },
    ],
  },
  {
    id: "sponsors",
    title: "Sponsors",
    faqs: [
      {
        question: "What are sponsor rewards?",
        answer:
          "Sponsor rewards are ecosystem-supported benefits funded or supported by partners. These may include special campaigns, premium unlocks, product rewards, discounts, or future promotional experiences.",
      },
      {
        question: "Do sponsors control the reward system?",
        answer:
          "No. Sponsors may support campaigns or rewards, but core reward logic remains inside the ZWAP! system. Sponsors are meant to enhance value, not override platform balance.",
      },
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    faqs: [
      {
        question: "Can businesses use ZWAP! for workplace wellness?",
        answer:
          "Yes. ZWAP! is being designed to support enterprise and workplace wellness use cases such as team engagement, activity-based motivation, sponsor-backed incentives, and retention programs.",
      },
      {
        question: "Who can use the enterprise side of ZWAP!?",
        answer:
          "The broader enterprise vision includes employers, insurers, schools, nonprofits, workforce programs, and other organizations looking for measurable wellness and engagement infrastructure.",
      },
    ],
  },
  {
    id: "developers",
    title: "Developers",
    faqs: [
      {
        question: "Can developers build for ZWAP!?",
        answer:
          "Yes. ZWAP! is intended to support developer participation through future developer-facing surfaces, game submission flows, integrations, and ecosystem expansion opportunities.",
      },
      {
        question: "What kinds of developers could work with ZWAP!?",
        answer:
          "Game developers, integration partners, ecosystem builders, API collaborators, and future SDK users may all have ways to participate as the platform expands.",
      },
    ],
  },
];

function SectionEyebrow({ children }) {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "12px",
        fontWeight: 900,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "rgba(245,247,255,0.52)",
        marginBottom: "12px",
      }}
    >
      {children}
    </div>
  );
}

function CategoryPill({ isActive, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: isActive
          ? "1px solid rgba(103,242,255,0.26)"
          : "1px solid rgba(255,255,255,0.08)",
        cursor: "pointer",
        padding: "9px 14px",
        borderRadius: "999px",
        fontSize: "11px",
        fontWeight: 800,
        letterSpacing: "0.05em",
        color: isActive ? "#67F2FF" : "rgba(245,247,255,0.72)",
        background: isActive
          ? "rgba(103,242,255,0.09)"
          : "rgba(255,255,255,0.04)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <article
      style={{
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "radial-gradient(circle at top right, rgba(180,134,255,0.10), transparent 30%), rgba(255,255,255,0.03)",
        boxShadow:
          "0 14px 28px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.03)",
        overflow: "hidden",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "14px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
          padding: "18px 18px",
          textAlign: "left",
          color: "#F8FAFF",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: 800,
            lineHeight: 1.4,
          }}
        >
          {question}
        </span>

        <span
          style={{
            flexShrink: 0,
            fontSize: "18px",
            fontWeight: 900,
            color: "rgba(103,242,255,0.90)",
          }}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen ? (
        <div
          style={{
            padding: "0 18px 18px",
            fontSize: "14px",
            lineHeight: 1.8,
            color: "rgba(235,239,255,0.74)",
          }}
        >
          {answer}
        </div>
      ) : null}
    </article>
  );
}

export default function FAQPage({
  onBack,
  onPrivacy,
  onTerms,
  onSitemap,
  onContact,
}) {
  const [activeSection, setActiveSection] = useState("general");
  const [openItems, setOpenItems] = useState({});

  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 900 : false;

  const currentSection =
    FAQ_SECTIONS.find((section) => section.id === activeSection) ||
    FAQ_SECTIONS[0];

  const toggleItem = (question) => {
    setOpenItems((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: `
          radial-gradient(circle at 72% 22%, rgba(204,91,255,0.10), transparent 16%),
          radial-gradient(circle at 18% 28%, rgba(88,240,255,0.08), transparent 14%),
          radial-gradient(circle at 55% 62%, rgba(255,176,86,0.05), transparent 12%),
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
          maxWidth: "1200px",
          minHeight: "100dvh",
          padding:
            "calc(env(safe-area-inset-top, 0px) + 16px) 16px calc(env(safe-area-inset-bottom, 0px) + 32px)",
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
            marginBottom: "20px",
          }}
        >
          <button
            type="button"
            onClick={onBack}
            style={{
              border: "none",
              background: "transparent",
              color: "rgba(245,247,255,0.76)",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              padding: 0,
            }}
          >
            ← Back
          </button>

          <div
            style={{
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(245,247,255,0.56)",
            }}
          >
            FAQ
          </div>

          <div style={{ width: "52px" }} />
        </div>

        <section
          style={{
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <SectionEyebrow>Answers & Clarity</SectionEyebrow>

          <h1
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(34px, 9vw, 60px)",
              lineHeight: 1.02,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#F9FBFF",
            }}
          >
            Frequently Asked Questions
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "780px",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            Learn how ZWAP! works, what zPts and ZWAP mean, how movement and
            rewards fit together, and where the ecosystem is headed.
          </p>
        </section>

        <section
          style={{
            display: "flex",
            gap: "10px",
            overflowX: "auto",
            paddingBottom: "6px",
            marginBottom: "22px",
          }}
        >
          {FAQ_SECTIONS.map((section) => (
            <CategoryPill
              key={section.id}
              isActive={activeSection === section.id}
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </CategoryPill>
          ))}
        </section>

        <section
          style={{
            marginBottom: "18px",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(14,16,30,0.92) 0%, rgba(8,10,22,0.96) 100%)",
            boxShadow:
              "0 18px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)",
            padding: "20px 18px",
          }}
        >
          <h2
            style={{
              margin: "0 0 8px",
              fontSize: "clamp(22px, 6vw, 34px)",
              lineHeight: 1.08,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#F8FAFF",
              textAlign: "center",
            }}
          >
            {currentSection.title}
          </h2>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "760px",
              fontSize: "14px",
              lineHeight: 1.75,
              color: "rgba(235,239,255,0.74)",
              textAlign: "center",
            }}
          >
            Direct answers to common questions about the ZWAP! ecosystem.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gap: "14px",
            marginBottom: "24px",
          }}
        >
          {currentSection.faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={!!openItems[faq.question]}
              onToggle={() => toggleItem(faq.question)}
            />
          ))}
        </section>

        <section
          style={{
            marginBottom: "24px",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(16,18,34,0.94) 0%, rgba(8,10,22,0.98) 100%)",
            padding: "22px 18px",
            textAlign: "center",
          }}
        >
          <SectionEyebrow>Still Need Help?</SectionEyebrow>

          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(22px, 6vw, 34px)",
              lineHeight: 1.08,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#F8FAFF",
            }}
          >
            Reach out directly
          </h2>

          <p
            style={{
              margin: "0 auto 18px",
              maxWidth: "720px",
              fontSize: "14px",
              lineHeight: 1.75,
              color: "rgba(235,239,255,0.74)",
            }}
          >
            If your question is not covered here, use the Contact page to reach
            the right lane for support, partnerships, enterprise, developers, or
            media.
          </p>

          {onContact ? (
            <button
              type="button"
              onClick={onContact}
              style={{
                border: "1px solid rgba(180,134,255,0.22)",
                background:
                  "linear-gradient(180deg, rgba(24,26,48,1) 0%, rgba(11,13,28,1) 100%)",
                color: "#F8FAFF",
                borderRadius: "999px",
                padding: "14px 22px",
                fontSize: "14px",
                fontWeight: 800,
                cursor: "pointer",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 24px rgba(0,0,0,0.28)",
              }}
            >
              Go to Contact
            </button>
          ) : null}
        </section>

        <GlobalFooterLinks
          isDesktop={isDesktop}
          onPrivacy={onPrivacy}
          onTerms={onTerms}
          onSitemap={onSitemap}
          onContact={onContact}
        />
      </div>
    </div>
  );
}