import React from "react";
import GlobalFooterLinks from "../../components/GlobalFooterLinks";

import AdminAccessGate from "./admin/AdminAccessGate";
import AdminDashboardLayout from "./admin/AdminDashboardLayout";
import useAdminContent from "./admin/useAdminContent";

export default function AdminPage({
  onBack,
  onPrivacy,
  onTerms,
  onSitemap,
  isAdminAuthenticated = false,
}) {
  const {
    isDesktop,
    activeTab,
    setActiveTab,
    stats,
    activeEntries,
    editingId,
    draft,
    setEditingId,
    setDraft,
    handleCreateNew,
    handleDeleteEntry,
    handleSetFeatured,
    handleDraftChange,
    handleSaveDraft,
    handlePublish,
  } = useAdminContent();

  if (!isAdminAuthenticated) {
    return <AdminAccessGate onBack={onBack} />;
  }

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: `
          radial-gradient(circle at 72% 22%, rgba(204, 91, 255, 0.10), transparent 16%),
          radial-gradient(circle at 18% 28%, rgba(88, 240, 255, 0.08), transparent 14%),
          radial-gradient(circle at 55% 62%, rgba(255, 176, 86, 0.05), transparent 12%),
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
          maxWidth: "1240px",
          minHeight: "100dvh",
          padding: isDesktop
            ? "32px 28px 36px"
            : "calc(env(safe-area-inset-top, 0px) + 14px) 16px calc(env(safe-area-inset-bottom, 0px) + 28px)",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AdminDashboardLayout
          isDesktop={isDesktop}
          onBack={onBack}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          stats={stats}
          activeEntries={activeEntries}
          editingId={editingId}
          draft={draft}
          setEditingId={setEditingId}
          setDraft={setDraft}
          onCreateNew={handleCreateNew}
          onDeleteEntry={handleDeleteEntry}
          onSetFeatured={handleSetFeatured}
          onDraftChange={handleDraftChange}
          onSaveDraft={handleSaveDraft}
          onPublish={handlePublish}
        />

        <GlobalFooterLinks
          isDesktop={isDesktop}
          onPrivacy={onPrivacy}
          onTerms={onTerms}
          onSitemap={onSitemap}
        />
      </div>
    </div>
  );
}