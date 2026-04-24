import React, { useState } from "react";
import GlobalFooterLinks from "../../components/GlobalFooterLinks";

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

function ContactCard({ title, email, description, accent = "cyan" }) {
  const accentMap = {
    cyan: {
      border: "rgba(103,242,255,0.18)",
      glow: "rgba(103,242,255,0.10)",
      text: "#67F2FF",
    },
    purple: {
      border: "rgba(180,134,255,0.18)",
      glow: "rgba(180,134,255,0.10)",
      text: "#B486FF",
    },
    gold: {
      border: "rgba(255,183,92,0.18)",
      glow: "rgba(255,183,92,0.10)",
      text: "#FFB75C",
    },
    pink: {
      border: "rgba(255,103,212,0.18)",
      glow: "rgba(255,103,212,0.10)",
      text: "#FF67D4",
    },
  };

  const theme = accentMap[accent] || accentMap.cyan;

  return (
    <article
      style={{
        borderRadius: "24px",
        border: `1px solid ${theme.border}`,
        background: `
          radial-gradient(circle at top right, ${theme.glow}, transparent 28%),
          linear-gradient(180deg, rgba(16,18,34,0.94) 0%, rgba(8,10,22,0.98) 100%)
        `,
        padding: "20px 18px",
        boxShadow:
          "0 16px 34px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6px 10px",
          borderRadius: "999px",
          marginBottom: "12px",
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${theme.border}`,
          color: theme.text,
          fontSize: "11px",
          fontWeight: 900,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "19px",
          fontWeight: 900,
          lineHeight: 1.2,
          marginBottom: "10px",
          color: "#F8FAFF",
          wordBreak: "break-word",
        }}
      >
        {email}
      </div>

      <p
        style={{
          margin: 0,
          fontSize: "14px",
          lineHeight: 1.75,
          color: "rgba(235,239,255,0.74)",
        }}
      >
        {description}
      </p>
    </article>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "General Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        topic: "General Inquiry",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(14,16,30,0.92) 0%, rgba(8,10,22,0.96) 100%)",
        boxShadow:
          "0 18px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)",
        padding: "22px 18px",
      }}
    >
      <SectionEyebrow>Contact Form</SectionEyebrow>

      <h2
        style={{
          margin: "0 0 10px",
          fontSize: "clamp(22px, 6vw, 34px)",
          lineHeight: 1.08,
          fontWeight: 900,
          letterSpacing: "-0.03em",
          textAlign: "center",
          color: "#F8FAFF",
        }}
      >
        Send an inquiry
      </h2>

      <p
        style={{
          margin: "0 auto 18px",
          maxWidth: "720px",
          textAlign: "center",
          fontSize: "14px",
          lineHeight: 1.75,
          color: "rgba(235,239,255,0.74)",
        }}
      >
        Choose the right request type and your message will route to the correct
        ZWAP! contact lane.
      </p>

      {success ? (
        <div
          style={{
            borderRadius: "20px",
            border: "1px solid rgba(103,242,255,0.18)",
            background:
              "linear-gradient(180deg, rgba(103,242,255,0.08) 0%, rgba(180,134,255,0.05) 100%)",
            padding: "18px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: 900,
              color: "#67F2FF",
              marginBottom: "8px",
            }}
          >
            Message sent.
          </div>

          <p
            style={{
              margin: 0,
              fontSize: "14px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            Thanks for reaching out. The right ZWAP! lane has your message.
          </p>

          <button
            type="button"
            onClick={() => setSuccess(false)}
            style={{
              marginTop: "16px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              color: "#F8FAFF",
              borderRadius: "999px",
              padding: "12px 18px",
              fontSize: "14px",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gap: "12px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <input
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(event) => handleChange("name", event.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={(event) => handleChange("email", event.target.value)}
            required
            style={inputStyle}
          />

          <select
            value={form.topic}
            onChange={(event) => handleChange("topic", event.target.value)}
            style={{
              ...inputStyle,
              appearance: "auto",
            }}
          >
            <option>General Inquiry</option>
            <option>Support</option>
            <option>Sponsors & Partners</option>
            <option>Enterprise & Workplace Wellness</option>
            <option>Developers</option>
            <option>Press & Media</option>
            <option>Business</option>
          </select>

          <textarea
            placeholder="Your message"
            rows={5}
            value={form.message}
            onChange={(event) => handleChange("message", event.target.value)}
            required
            style={{
              ...inputStyle,
              resize: "vertical",
              minHeight: "120px",
              fontFamily:
                "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              boxSizing: "border-box",
              border: "1px solid rgba(180,134,255,0.28)",
              background:
                "linear-gradient(90deg, #66F2FF 0%, #B486FF 100%)",
              color: "#05060B",
              borderRadius: "999px",
              padding: "14px 20px",
              fontSize: "14px",
              fontWeight: 900,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.68 : 1,
              boxShadow:
                "0 10px 24px rgba(180,134,255,0.22), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.04)",
  color: "#F5F7FF",
  padding: "14px 14px",
  fontSize: "14px",
  outline: "none",
};

export default function ContactPage({
  onBack,
  onPrivacy,
  onTerms,
  onSitemap,
  onNews,
  onBlog,
  onAbout,
  onFeatures,
  onPartners,
  onDevelopers,
  onEnterprise,
  onContact,
  onFAQ,
  onHowItWorks,
}) {
  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 900 : false;

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
            Contact
          </div>

          <div style={{ width: "52px" }} />
        </div>

        <section
          style={{
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <SectionEyebrow>Reach the Team</SectionEyebrow>

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
            Contact ZWAP!
          </h1>

          <p
            style={{
              margin: "0 auto",
              maxWidth: "760px",
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            Questions, partnerships, enterprise wellness, sponsors, developers,
            press, or support. Reach the ZWAP! team here.
          </p>
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
              margin: "0 0 10px",
              fontSize: "clamp(22px, 6vw, 34px)",
              lineHeight: 1.08,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#F8FAFF",
              textAlign: "center",
            }}
          >
            Direct contact lanes
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
            Use the lane that best matches your request so it lands in the right
            place from the start.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop
              ? "repeat(2, minmax(0, 1fr))"
              : "1fr",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <ContactCard
            title="General Support"
            email="support@zwap.online"
            description="For app questions, account help, early access, and general support."
            accent="cyan"
          />

          <ContactCard
            title="Sponsors & Partners"
            email="partners@zwap.online"
            description="For sponsor opportunities, featured campaigns, ecosystem partnerships, and brand collaborations."
            accent="purple"
          />

          <ContactCard
            title="Enterprise & Workplace Wellness"
            email="enterprise@zwap.online"
            description="For workplace wellness, team engagement, rewards programs, and enterprise partnerships."
            accent="gold"
          />

          <ContactCard
            title="Developers"
            email="developers@zwap.online"
            description="For SDK access, game submissions, integrations, APIs, and developer partnerships."
            accent="pink"
          />

          <ContactCard
            title="Press & Media"
            email="press@zwap.online"
            description="For interviews, media coverage, podcasts, speaking opportunities, and press inquiries."
            accent="cyan"
          />

          <ContactCard
            title="Business"
            email="hello@zwap.online"
            description="For broader business inquiries, strategic conversations, and general company communication."
            accent="purple"
          />
        </section>

        <div style={{ marginBottom: "24px" }}>
          <ContactForm />
        </div>

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
          <SectionEyebrow>Response Window</SectionEyebrow>

          <p
            style={{
              margin: "0 auto 10px",
              maxWidth: "760px",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "rgba(235,239,255,0.76)",
            }}
          >
            ZWAP! is developed by ZWAP LLC, a subsidiary of XOCLON HOLDINGS INC.
          </p>

          <p
            style={{
              margin: 0,
              maxWidth: "760px",
              marginInline: "auto",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "rgba(235,239,255,0.64)",
            }}
          >
            Response times may vary depending on request volume, but most
            inquiries are answered within 2–5 business days.
          </p>
        </section>

        <GlobalFooterLinks
          isDesktop={isDesktop}
          onPrivacy={onPrivacy}
          onTerms={onTerms}
          onSitemap={onSitemap}
          onNews={onNews}
          onBlog={onBlog}
          onAbout={onAbout}
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