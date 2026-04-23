import React from "react";
import { GlassPanel, SectionEyebrow } from "./AdminUI";
import AdminEntryRow from "./AdminEntryRow";

export default function AdminEntryQueue({
  activeTab,
  activeEntries,
  onEdit,
  onDeleteEntry,
  onSetFeatured,
}) {
  return (
    <GlassPanel>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          marginBottom: "14px",
        }}
      >
        <div>
          <SectionEyebrow>Entry Queue</SectionEyebrow>

          <div
            style={{
              fontSize: "22px",
              fontWeight: 900,
              color: "#F8FAFF",
            }}
          >
            {activeTab === "news" ? "News Entries" : "Blog Entries"}
          </div>
        </div>

        <div
          style={{
            fontSize: "12px",
            fontWeight: 800,
            color: "rgba(235,239,255,0.54)",
          }}
        >
          {activeEntries.length} total
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: "12px",
        }}
      >
        {activeEntries.length === 0 ? (
          <div
            style={{
              fontSize: "14px",
              color: "rgba(235,239,255,0.56)",
              textAlign: "center",
              padding: "18px 0",
            }}
          >
            No entries yet. Create your first one.
          </div>
        ) : (
          activeEntries.map((entry) => (
            <AdminEntryRow
              key={entry.id}
              entry={entry}
              activeContentType={activeTab}
              onEdit={onEdit}
              onDelete={onDeleteEntry}
              onSetFeatured={onSetFeatured}
            />
          ))
        )}
      </div>
    </GlassPanel>
  );
}