import React from "react";
import { ActionButton, StatusPill } from "./AdminUI";

export default function AdminEntryRow({
  entry,
  activeContentType,
  onEdit,
  onDelete,
  onSetFeatured,
}) {
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
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 10px",
              borderRadius: "999px",
              background: "rgba(103,242,255,0.10)",
              border: "1px solid rgba(103,242,255,0.18)",
              color: "#67F2FF",
              fontSize: "11px",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {entry.category || "Uncategorized"}
          </span>

          <StatusPill value={entry.status || "Draft"} />

          {entry.featured ? (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 10px",
                borderRadius: "999px",
                background: "rgba(255,183,92,0.10)",
                border: "1px solid rgba(255,183,92,0.18)",
                color: "#FFB75C",
                fontSize: "11px",
                fontWeight: 900,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Featured
            </span>
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