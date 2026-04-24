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
      }}
    >
      <div
        style={{
          fontSize: "11px",
          fontWeight: 900,
          color: theme.text,
          marginBottom: "10px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "18px",
          fontWeight: 800,
          color: "#F8FAFF",
        }}
      >
        {email}
      </div>

      <p
        style={{
          marginTop: "8px",
          fontSize: "14px",
          color: "rgba(235,239,255,0.7)",
        }}
      >
        {description}
      </p>
    </article>
  );
}

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
}) {
  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 900 : false;

  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "General Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed");
      }

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        topic: "General Inquiry",
        message: "",
      });
    } catch (err) {
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        justifyContent: "center",
        background: "#030308",
        color: "#F5F7FF",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1200px", padding: "20px" }}>
        <button onClick={onBack}>← Back</button>

        <h1 style={{ textAlign: "center" }}>Contact ZWAP!</h1>

        {/* FORM */}
        <section style={{ marginTop: 20 }}>
          {success ? (
            <div style={{ textAlign: "center" }}>
              Message sent. We'll get back to you.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                style={inputStyle}
              />

              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                style={inputStyle}
              />

              <select
                value={form.topic}
                onChange={(e) => handleChange("topic", e.target.value)}
                style={inputStyle}
              >
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Partnership</option>
                <option>Enterprise</option>
                <option>Developers</option>
                <option>Press</option>
              </select>

              <textarea
                placeholder="Your message"
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                required
                rows={5}
                style={{ ...inputStyle, minHeight: 120 }}
              />

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: 14,
                  borderRadius: 999,
                  background: "#6b5cff",
                  color: "white",
                  fontWeight: "bold",
                  border: "none",
                  marginTop: 10,
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
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
        />
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginBottom: 10,
  padding: 12,
  borderRadius: 10,
  border: "1px solid #444",
  background: "#111",
  color: "white",
};