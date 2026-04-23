import React from "react";
import AdminMetricsRow from "./AdminMetricsRow";
import AdminLaneTabs from "./AdminLaneTabs";
import AdminEntryQueue from "./AdminEntryQueue";
import AdminEditorPanel from "./AdminEditorPanel";
import { GlassPanel, SectionEyebrow } from "./AdminUI";

export default function AdminDashboardLayout({
  isDesktop,
  contentTabs,
  activeTab,
  setActiveTab,
  stats,
  activeEntries,
  editingId,
  draft,
  setEditingId,
  setDraft,
  onBack,
  onCreateNew,
  onDeleteEntry,
  onSetFeatured,
  onDraftChange,
  onSaveDraft,
  onPublish,
}) {
  return (
    <>
      <section
        style={{
          marginBottom: "18px",
        }}
      >
        <GlassPanel
          style={{
            padding: isDesktop ? "24px 24px" : "20px 18px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: isDesktop ? "center" : "flex-start",
              justifyContent: "space-between",
              gap: "16px",
              flexDirection: isDesktop ? "row" : "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                textAlign: isDesktop ? "left" : "center",
                width: "100%",
              }}
            >
              <SectionEyebrow>Editorial Control Center</SectionEyebrow>

              <h1
                style={{
                  margin: 0,
                  fontSize: isDesktop
                    ? "clamp(42px, 5vw, 60px)"
                    : "clamp(32px, 9vw, 44px)",
                  lineHeight: 1.02,
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  color: "#F8FAFF",
                }}
              >
                ZWAP! Editorial Admin
              </h1>

              <p
                style={{
                  margin: 0,
                  maxWidth: "860px",
                  fontSize: isDesktop ? "18px" : "15px",
                  lineHeight: 1.7,
                  color: "rgba(235,239,255,0.76)",
                }}
              >
                Manage News Blog content, update featured entries, control social
                readiness, prepare newsletter sends, and maintain the editorial
                surface that powers public updates across the ZWAP! site.
              </p>
            </div>

            <div
              style={{
                width: isDesktop ? "180px" : "100%",
                flexShrink: 0,
              }}
            >
              <button
                type="button"
                onClick={onBack}
                style={{
                  width: "100%",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.04)",
                  color: "#F8FAFF",
                  borderRadius: "14px",
                  padding: "14px 14px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 800,
                  textAlign: "center",
                }}
              >
                Back
              </button>
            </div>
          </div>
        </GlassPanel>
      </section>

      <AdminMetricsRow isDesktop={isDesktop} stats={stats} />

      <AdminLaneTabs
        isDesktop={isDesktop}
        contentTabs={contentTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setEditingId={setEditingId}
        onCreateNew={onCreateNew}
      />

      <section
        style={{
          display: "grid",
          gridTemplateColumns: isDesktop
            ? "minmax(0, 0.95fr) minmax(0, 1.35fr)"
            : "1fr",
          gap: "18px",
          marginBottom: "24px",
        }}
      >
        <AdminEntryQueue
          activeTab={activeTab}
          activeEntries={activeEntries}
          onEdit={setEditingId}
          onDeleteEntry={onDeleteEntry}
          onSetFeatured={onSetFeatured}
        />

        <AdminEditorPanel
          isDesktop={isDesktop}
          draft={draft}
          setDraft={setDraft}
          onDraftChange={onDraftChange}
          onSaveDraft={onSaveDraft}
          onPublish={onPublish}
          onClearSelection={() => {
            setEditingId(null);
            setDraft(null);
          }}
        />
      </section>

      <GlassPanel
        style={{
          marginBottom: "24px",
        }}
      >
        <SectionEyebrow>Current Status</SectionEyebrow>

        <div
          style={{
            fontSize: isDesktop ? "16px" : "14px",
            lineHeight: 1.75,
            color: "rgba(235,239,255,0.76)",
          }}
        >
          This admin surface is structured as a protected editorial workspace.
          News and Blog are separated, entries can be edited from a focused
          queue, featured placement is controlled at the entry level, and
          newsletter or social flags are handled directly inside the editor.
          For production use, connect this dashboard to authenticated admin
          sessions and a live content source instead of local scaffold data.
        </div>
      </GlassPanel>
    </>
  );
}