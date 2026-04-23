import React from "react";
import {
  GlassPanel,
  SectionEyebrow,
  AdminInput,
  AdminTextarea,
  ActionButton,
  TogglePill,
} from "./AdminUI";

export default function AdminEditorPanel({
  isDesktop,
  draft,
  onDraftChange,
  onSaveDraft,
  onPublish,
  onClearSelection,
}) {
  return (
    <GlassPanel>
      <div
        style={{
          marginBottom: "14px",
        }}
      >
        <SectionEyebrow>Editor</SectionEyebrow>

        <div
          style={{
            fontSize: "22px",
            fontWeight: 900,
            color: "#F8FAFF",
            marginBottom: "8px",
          }}
        >
          {draft ? "Editing Entry" : "Select an Entry"}
        </div>

        <div
          style={{
            fontSize: "14px",
            lineHeight: 1.65,
            color: "rgba(235,239,255,0.72)",
          }}
        >
          {draft
            ? "Update content, status, and distribution flags."
            : "Choose an entry from the queue or create a new one."}
        </div>
      </div>

      {draft ? (
        <div
          style={{
            display: "grid",
            gap: "12px",
          }}
        >
          <AdminInput
            value={draft.category}
            onChange={(e) => onDraftChange("category", e.target.value)}
            placeholder="Category"
          />

          <AdminInput
            value={draft.title}
            onChange={(e) => onDraftChange("title", e.target.value)}
            placeholder="Article title"
          />

          <AdminTextarea
            value={draft.excerpt}
            onChange={(e) => onDraftChange("excerpt", e.target.value)}
            placeholder="Short excerpt"
            rows={5}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop
                ? "repeat(3, minmax(0, 1fr))"
                : "1fr",
              gap: "12px",
            }}
          >
            <AdminInput
              value={draft.readTime}
              onChange={(e) => onDraftChange("readTime", e.target.value)}
              placeholder="Read time"
            />
            <AdminInput
              value={draft.date}
              onChange={(e) => onDraftChange("date", e.target.value)}
              placeholder="Date"
            />
            <AdminInput
              value={draft.status}
              onChange={(e) => onDraftChange("status", e.target.value)}
              placeholder="Status"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "4px",
            }}
          >
            <TogglePill
              active={draft.featured}
              label={draft.featured ? "Featured On" : "Featured Off"}
              onClick={() =>
                onDraftChange("featured", !draft.featured)
              }
            />

            <TogglePill
              active={draft.shareToSocial}
              label={
                draft.shareToSocial
                  ? "Social Share On"
                  : "Social Share Off"
              }
              onClick={() =>
                onDraftChange("shareToSocial", !draft.shareToSocial)
              }
            />

            <TogglePill
              active={draft.sendNewsletter}
              label={
                draft.sendNewsletter
                  ? "Newsletter Send On"
                  : "Newsletter Send Off"
              }
              onClick={() =>
                onDraftChange(
                  "sendNewsletter",
                  !draft.sendNewsletter
                )
              }
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop
                ? "repeat(3, minmax(0, 1fr))"
                : "1fr",
              gap: "10px",
              marginTop: "8px",
            }}
          >
            <ActionButton
              label="Save Draft"
              onClick={onSaveDraft}
              primary
            />

            <ActionButton
              label="Publish Entry"
              onClick={onPublish}
            />

            <ActionButton
              label="Clear Selection"
              onClick={onClearSelection}
            />
          </div>
        </div>
      ) : null}
    </GlassPanel>
  );
}