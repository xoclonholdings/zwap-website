import React from "react";
import { ActionButton, StatusPill } from "./AdminUI";

function getTagList(tags) {
  if (Array.isArray(tags)) {
    return tags.filter((tag) => String(tag || "").trim());
  }

  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
}

function MetadataPill({ children, tone = "default" }) {
  const toneStyles = {
    cyan: {
      background: "rgba(103,242,255,0.10)",
      border: "1px solid rgba(103,242,255,0.18)",
      color: "#67F2FF",
    },
    purple: {
      background: "rgba(180,134,255,0.12)",
      border: "1px solid rgba(180,134,255,0.20)",
      color: "#B486FF",
    },
    gold: {
      background: "rgba(255,183,92,0.10)",
      border: "1px solid rgba(255,183,92,0.18)",
      color: "#FFB75C",
    },
    default: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      color: "rgba(235,239,255,0.68)",
    },
  };

  const style = toneStyles[tone] || toneStyles.default;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6px 10px",
        borderRadius: "999px",
        fontSize: "11px",
        fontWeight: 900,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export default function AdminEntryRow({
  entry,
  activeContentType,
  onEdit,
  onDelete,
  onSetFeatured,
}) {
  const tagList = getTagList(entry.tags);
  const hasSeries = Boolean(String(entry.series || "").trim());

  return (
    <div
      style={{
        borderRadius: "18px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
        padding: "16px 14px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <MetadataPill tone="cyan">
            {entry.category || activeContentType || "Uncategorized"}
          </MetadataPill>

          <StatusPill value={entry.status || "Draft"} />

          {entry.featured ? (
            <MetadataPill tone="gold">Featured</MetadataPill>
          ) : null}
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "rgba(235,239,255,0.56)",
            fontWeight: 700,
          }}
        >
          {activeContentType === "news" ? "News Entry" : "Blog Entry"}
        </div>
      </div>

      {hasSeries ? (
        <div
          style={{
            marginBottom: "10px",
          }}
        >
          <MetadataPill tone="purple">{entry.series}</MetadataPill>
        </div>
      ) : null}

      <div
        style={{
          fontSize: "20px",
          fontWeight: 900,
          lineHeight: 1.15,
          color: "#F8FAFF",
          marginBottom: "8px",
        }}
      >
        {entry.title || "Untitled Entry"}
      </div>

      <div
        style={{
          fontSize: "14px",
          lineHeight: 1.65,
          color: "rgba(235,239,255,0.72)",
          marginBottom: "14px",
        }}
      >
        {entry.excerpt || "No excerpt added yet."}
      </div>

      {tagList.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "14px",
          }}
        >
          {tagList.map((tag) => (
            <MetadataPill key={tag}>{tag}</MetadataPill>
          ))}
        </div>
      ) : null}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          fontSize: "12px",
          color: "rgba(235,239,255,0.54)",
          marginBottom: "14px",
        }}
      >
        <span>{entry.readTime || "-"}</span>
        <span>{entry.date || "No date"}</span>
        <span>{entry.shareToSocial ? "Social On" : "Social Off"}</span>
        <span>{entry.sendNewsletter ? "Newsletter On" : "Newsletter Off"}</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "10px",
        }}
      >
        <ActionButton label="Edit" onClick={() => onEdit(entry.id)} />
        <ActionButton
          label={entry.featured ? "Featured" : "Set Featured"}
          onClick={() => onSetFeatured(entry.id)}
        />
        <ActionButton label="Delete" onClick={() => onDelete(entry.id)} />
      </div>
    </div>
  );
}