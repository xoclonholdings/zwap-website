import React, { useState } from "react";

function SectionTitle({ children }) {
  return (
    <div
      style={{
        fontSize: "22px",
        fontWeight: 900,
        letterSpacing: "-0.02em",
        color: "#F8FAFF",
        marginBottom: "14px",
        lineHeight: 1.1,
      }}
    >
      {children}
    </div>
  );
}

function FieldLabel({ children, required = false }) {
  return (
    <label
      style={{
        display: "block",
        fontSize: "15px",
        fontWeight: 800,
        color: "#F8FAFF",
        marginBottom: "8px",
        lineHeight: 1.35,
      }}
    >
      {children}
      {required && (
        <span style={{ color: "#FF67D4", marginLeft: "4px" }}>*</span>
      )}
    </label>
  );
}

function FieldHelp({ children }) {
  return (
    <div
      style={{
        fontSize: "13px",
        lineHeight: 1.55,
        color: "rgba(235,239,255,0.58)",
        marginBottom: "10px",
      }}
    >
      {children}
    </div>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
  multiline = false,
  rows = 4,
}) {
  const sharedStyle = {
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.035)",
    color: "#F8FAFF",
    padding: "14px 16px",
    fontSize: "15px",
    lineHeight: 1.45,
    outline: "none",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
  };

  if (multiline) {
    return (
      <textarea
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          ...sharedStyle,
          resize: "vertical",
          minHeight: "120px",
        }}
      />
    );
  }

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={sharedStyle}
    />
  );
}

function SelectInput({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        boxSizing: "border-box",
        borderRadius: "18px",
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.035)",
        color: "#F8FAFF",
        padding: "14px 16px",
        fontSize: "15px",
        lineHeight: 1.45,
        outline: "none",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          style={{ background: "#0A0D16", color: "#F8FAFF" }}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

function TogglePill({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: `1px solid ${
          active ? "rgba(165, 103, 255, 0.75)" : "rgba(255,255,255,0.12)"
        }`,
        background: active
          ? "linear-gradient(180deg, rgba(34,36,62,1) 0%, rgba(14,16,30,1) 100%)"
          : "rgba(255,255,255,0.03)",
        color: active ? "#FFFFFF" : "rgba(245,247,255,0.76)",
        borderRadius: "999px",
        padding: "12px 14px",
        fontSize: "14px",
        fontWeight: 700,
        cursor: "pointer",
        boxShadow: active
          ? "0 0 18px rgba(138, 90, 255, 0.18)"
          : "none",
        textAlign: "center",
      }}
    >
      {children}
    </button>
  );
}

function TierCard({ checked, onToggle, title, desc, glow }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      style={{
        width: "100%",
        textAlign: "left",
        borderRadius: "22px",
        border: checked
          ? `1px solid ${glow.border}`
          : "1px solid rgba(255,255,255,0.10)",
        background: checked
          ? `
            radial-gradient(circle at 18% 20%, ${glow.wash}, transparent 24%),
            rgba(255,255,255,0.04)
          `
          : "rgba(255,255,255,0.03)",
        padding: "18px",
        cursor: "pointer",
        boxShadow: checked ? `0 0 22px ${glow.shadow}` : "none",
        transition: "all 180ms ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "6px",
            border: checked
              ? `1px solid ${glow.border}`
              : "1px solid rgba(255,255,255,0.16)",
            background: checked ? glow.fill : "transparent",
            flexShrink: 0,
            marginTop: "2px",
            boxShadow: checked ? `0 0 14px ${glow.shadow}` : "none",
          }}
        />
        <div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 900,
              color: "#F8FAFF",
              marginBottom: "8px",
              letterSpacing: "-0.02em",
              lineHeight: 1.12,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.65,
              color: "rgba(235,239,255,0.74)",
            }}
          >
            {desc}
          </div>
        </div>
      </div>
    </button>
  );
}

export default function SponsorsForm({ recipientEmail = "app@zwap.online" }) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    website: "",
    email: "",
    industry: "",
    goals: "",
    placement: "",
    budget: "",
    ctaGoal: "",
    assets: "",
    analytics: "",
    customPackage: "",
    notes: "",
  });

  const [tiers, setTiers] = useState([]);

  const toggleTier = (tier) => {
    setTiers((prev) =>
      prev.includes(tier)
        ? prev.filter((item) => item !== tier)
        : [...prev, tier]
    );
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const payload = {
      recipientEmail,
      ...formData,
      tiers,
    };
  
    console.log("Sponsor form submitted:", payload);
  
    // Reset form after submit
    setFormData({
      name: "",
      role: "",
      company: "",
      website: "",
      email: "",
      industry: "",
      goals: "",
      placement: "",
      budget: "",
      ctaGoal: "",
      assets: "",
      analytics: "",
      customPackage: "",
      notes: "",
    });
  
    setTiers([]);
  };

  const tierGlow = {
    move: {
      border: "rgba(103,242,255,0.34)",
      wash: "rgba(103,242,255,0.10)",
      shadow: "rgba(103,242,255,0.16)",
      fill: "rgba(103,242,255,0.20)",
    },
    play: {
      border: "rgba(180,134,255,0.34)",
      wash: "rgba(180,134,255,0.10)",
      shadow: "rgba(180,134,255,0.16)",
      fill: "rgba(180,134,255,0.20)",
    },
    shop: {
      border: "rgba(255,103,212,0.34)",
      wash: "rgba(255,103,212,0.10)",
      shadow: "rgba(255,103,212,0.16)",
      fill: "rgba(255,103,212,0.20)",
    },
    presenting: {
      border: "rgba(165,103,255,0.44)",
      wash: "rgba(165,103,255,0.12)",
      shadow: "rgba(165,103,255,0.18)",
      fill: "rgba(165,103,255,0.22)",
    },
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        display: "grid",
        gap: "18px",
      }}
    >
      <div
        style={{
          borderRadius: "26px",
          border: "1px solid rgba(255,255,255,0.08)",
          background:
            "radial-gradient(circle at 76% 18%, rgba(180,134,255,0.10), transparent 28%), rgba(255,255,255,0.03)",
          padding: "22px 18px",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.02) inset, 0 12px 36px rgba(0,0,0,0.16)",
        }}
      >
        <SectionTitle>Contact</SectionTitle>

        <div style={{ display: "grid", gap: "16px" }}>
          <div>
            <FieldLabel required>Your Name</FieldLabel>
            <TextInput
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="Jane Smith"
            />
          </div>

          <div>
            <FieldLabel required>Job Title / Role</FieldLabel>
            <FieldHelp>
              Example: Brand Manager, Partnerships Lead, Founder, Marketing Director
            </FieldHelp>
            <TextInput
              value={formData.role}
              onChange={(e) => updateField("role", e.target.value)}
              placeholder="Partnerships Lead"
            />
          </div>

          <div>
            <FieldLabel required>Company Name</FieldLabel>
            <TextInput
              value={formData.company}
              onChange={(e) => updateField("company", e.target.value)}
              placeholder="Acme Wellness"
            />
          </div>

          <div>
            <FieldLabel required>Company Website</FieldLabel>
            <FieldHelp>Example: yourbrand.com</FieldHelp>
            <TextInput
              value={formData.website}
              onChange={(e) => updateField("website", e.target.value)}
              placeholder="https://yourbrand.com"
              type="url"
            />
          </div>

          <div>
            <FieldLabel required>Email</FieldLabel>
            <TextInput
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="name@company.com"
              type="email"
            />
          </div>

          <div>
            <FieldLabel>Industry / Category</FieldLabel>
            <FieldHelp>
              Example: Fitness, Wellness, Gaming, Lifestyle, Retail, Web3, Media
            </FieldHelp>
            <TextInput
              value={formData.industry}
              onChange={(e) => updateField("industry", e.target.value)}
              placeholder="Wellness"
            />
          </div>
        </div>
      </div>

      <div
        style={{
          borderRadius: "26px",
          border: "1px solid rgba(255,255,255,0.08)",
          background:
            "radial-gradient(circle at 18% 24%, rgba(103,242,255,0.08), transparent 24%), rgba(255,255,255,0.03)",
          padding: "22px 18px",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.02) inset, 0 12px 36px rgba(0,0,0,0.16)",
        }}
      >
        <SectionTitle>Tier Interest</SectionTitle>

        <FieldLabel required>
          Which sponsorship tier are you most interested in?
        </FieldLabel>
        <FieldHelp>Select as many as you like.</FieldHelp>

        <div style={{ display: "grid", gap: "14px" }}>
          <TierCard
            checked={tiers.includes("MOVE")}
            onToggle={() => toggleTier("MOVE")}
            title="MOVE"
            desc="Best for wellness, fitness, movement, and activity-based campaigns inside the ZWAP ecosystem."
            glow={tierGlow.move}
          />

          <TierCard
            checked={tiers.includes("PLAY")}
            onToggle={() => toggleTier("PLAY")}
            title="PLAY"
            desc="Best for game tie-ins, competitions, interactive engagement, and reward-loop campaigns."
            glow={tierGlow.play}
          />

          <TierCard
            checked={tiers.includes("SHOP")}
            onToggle={() => toggleTier("SHOP")}
            title="SHOP"
            desc="Best for products, curated drops, special offers, reward redemption tie-ins, and commerce-based collaborations."
            glow={tierGlow.shop}
          />

          <TierCard
            checked={tiers.includes("ZWAP! Presenting Partner")}
            onToggle={() => toggleTier("ZWAP! Presenting Partner")}
            title="ZWAP! Presenting Partner"
            desc="Best for brands seeking top-tier visibility, broad ecosystem presence, and headline partner positioning."
            glow={tierGlow.presenting}
          />
        </div>
      </div>

      <div
        style={{
          borderRadius: "26px",
          border: "1px solid rgba(255,255,255,0.08)",
          background:
            "radial-gradient(circle at 82% 20%, rgba(255,103,212,0.08), transparent 24%), rgba(255,255,255,0.03)",
          padding: "22px 18px",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.02) inset, 0 12px 36px rgba(0,0,0,0.16)",
        }}
      >
        <SectionTitle>Goals & Placement</SectionTitle>

        <div style={{ display: "grid", gap: "16px" }}>
          <div>
            <FieldLabel required>
              What are you hoping to achieve through a partnership with ZWAP?
            </FieldLabel>
            <FieldHelp>
              Example: brand awareness, campaign visibility, app installs, user
              engagement, reward participation, product promotion
            </FieldHelp>
            <TextInput
              multiline
              rows={4}
              value={formData.goals}
              onChange={(e) => updateField("goals", e.target.value)}
              placeholder="We want to increase awareness and connect our brand to movement and daily engagement."
            />
          </div>

          <div>
            <FieldLabel required>
              What type of placement or activation interests you most?
            </FieldLabel>
            <FieldHelp>
              Example: sponsored campaign, in-app placement, featured challenge,
              reward sponsor, product drop, branded collaboration
            </FieldHelp>
            <TextInput
              multiline
              rows={4}
              value={formData.placement}
              onChange={(e) => updateField("placement", e.target.value)}
              placeholder="Sponsored challenge and reward placement"
            />
          </div>

          <div>
            <FieldLabel required>What is your estimated budget range?</FieldLabel>
            <SelectInput
              value={formData.budget}
              onChange={(e) => updateField("budget", e.target.value)}
              options={[
                { value: "", label: "Select a budget range" },
                { value: "under-2500", label: "Under $2,500" },
                { value: "2500-5000", label: "$2,500 to $5,000" },
                { value: "5000-10000", label: "$5,000 to $10,000" },
                { value: "10000-25000", label: "$10,000 to $25,000" },
                { value: "25000-plus", label: "$25,000+" },
              ]}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          borderRadius: "26px",
          border: "1px solid rgba(255,255,255,0.08)",
          background:
            "radial-gradient(circle at 24% 22%, rgba(121,175,255,0.08), transparent 24%), rgba(255,255,255,0.03)",
          padding: "22px 18px",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.02) inset, 0 12px 36px rgba(0,0,0,0.16)",
        }}
      >
        <SectionTitle>Optional Details</SectionTitle>

        <div style={{ display: "grid", gap: "16px" }}>
          <div>
            <FieldLabel>What kind of user action do you want to drive?</FieldLabel>
            <FieldHelp>
              Example: visit website, claim reward, redeem offer, join campaign,
              discover product
            </FieldHelp>
            <TextInput
              value={formData.ctaGoal}
              onChange={(e) => updateField("ctaGoal", e.target.value)}
              placeholder="Claim reward and visit product page"
            />
          </div>

          <div>
            <FieldLabel>Do you already have creative assets prepared?</FieldLabel>
            <FieldHelp>
              Example: logos, campaign art, motion graphics, promo copy, product images
            </FieldHelp>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["Yes", "No", "Partially"].map((option) => (
                <TogglePill
                  key={option}
                  active={formData.assets === option}
                  onClick={() => updateField("assets", option)}
                >
                  {option}
                </TogglePill>
              ))}
            </div>
          </div>

          <div>
            <FieldLabel>Do you want reporting / campaign analytics?</FieldLabel>
            <FieldHelp>
              Example: performance summary, engagement metrics, participation reporting
            </FieldHelp>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["Yes", "No", "Not sure yet"].map((option) => (
                <TogglePill
                  key={option}
                  active={formData.analytics === option}
                  onClick={() => updateField("analytics", option)}
                >
                  {option}
                </TogglePill>
              ))}
            </div>
          </div>

          <div>
            <FieldLabel>Are you open to a custom package?</FieldLabel>
            <FieldHelp>
              Choose this if you want something tailored beyond the listed sponsorship tiers.
            </FieldHelp>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["Yes", "No"].map((option) => (
                <TogglePill
                  key={option}
                  active={formData.customPackage === option}
                  onClick={() => updateField("customPackage", option)}
                >
                  {option}
                </TogglePill>
              ))}
            </div>
          </div>

          <div>
            <FieldLabel>Anything else you want us to know?</FieldLabel>
            <FieldHelp>
              Example: launch timing, brand alignment goals, special requests,
              campaign ideas, or collaboration notes
            </FieldHelp>
            <TextInput
              multiline
              rows={5}
              value={formData.notes}
              onChange={(e) => updateField("notes", e.target.value)}
              placeholder="We are launching a new product in Q3 and would like to explore a custom challenge tied to movement rewards."
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4px",
        }}
      >
        <button
          type="submit"
          style={{
            width: "100%",
            maxWidth: "320px",
            minHeight: "58px",
            borderRadius: "999px",
            border: "2px solid rgba(165, 103, 255, 0.78)",
            background:
              "linear-gradient(180deg, rgba(14,16,30,0.94) 0%, rgba(8,10,22,0.98) 100%)",
            color: "#F9FAFF",
            fontSize: "18px",
            fontWeight: 800,
            letterSpacing: "0.02em",
            cursor: "pointer",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 26px rgba(73, 44, 162, 0.28)",
          }}
        >
          Submit Sponsor Interest
        </button>
      </div>
    </form>
  );
}