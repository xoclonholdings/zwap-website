import React from "react";

export default function FeatureExplainerCard({ data }) {
  if (!data) return null;

  return (
    <section
      style={{
        marginTop: "18px",
        borderRadius: "28px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: `
          radial-gradient(circle at top right, rgba(180,134,255,0.12), transparent 22%),
          radial-gradient(circle at bottom left, rgba(103,242,255,0.08), transparent 18%),
          linear-gradient(180deg, rgba(12,14,26,0.94) 0%, rgba(7,9,18,0.98) 100%)
        `,
        padding: "22px 18px",
        boxShadow:
          "0 18px 40px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          fontWeight: 900,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(180,134,255,0.9)",
          marginBottom: "12px",
        }}
      >
        Feature Overview
      </div>

      <h3
        style={{
          margin: "0 0 12px",
          fontSize: "24px",
          lineHeight: 1.15,
          fontWeight: 900,
          letterSpacing: "-0.03em",
          color: "#F8FAFF",
        }}
      >
        {data.title}
      </h3>

      <p
        style={{
          margin: "0 0 18px",
          fontSize: "15px",
          lineHeight: 1.7,
          color: "rgba(235,239,255,0.78)",
        }}
      >
        {data.description}
      </p>

      <div
        style={{
          display: "grid",
          gap: "10px",
        }}
      >
        {data.bullets?.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.025)",
              padding: "12px 14px",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                background:
                  "linear-gradient(180deg, rgba(103,242,255,1) 0%, rgba(180,134,255,1) 100%)",
                marginTop: "7px",
                flexShrink: 0,
                boxShadow: "0 0 12px rgba(180,134,255,0.45)",
              }}
            />

            <div
              style={{
                fontSize: "14px",
                lineHeight: 1.6,
                color: "rgba(235,239,255,0.82)",
              }}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}