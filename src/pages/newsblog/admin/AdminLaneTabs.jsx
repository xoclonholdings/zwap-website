import React from "react";
import {
  GlassPanel,
  SectionEyebrow,
  HeaderTabButton,
  ActionButton,
} from "./AdminUI";

export default function AdminLaneTabs({
  isDesktop,
  contentTabs,
  activeTab,
  setActiveTab,
  setEditingId,
  onCreateNew,
}) {
  const handlePrepareNewsletter = () => {
    window.alert(
      "Newsletter preparation is not connected yet. Use the editor newsletter toggle to mark entries for sending."
    );
  };

  const handlePreviewPublicLayout = () => {
    if (activeTab === "news") {
      window.open("/news", "_blank", "noopener,noreferrer");
      return;
    }

    window.open("/blog", "_blank", "noopener,noreferrer");
  };

  const handleReviewShareReadiness = () => {
    window.alert(
      "Share readiness is handled inside each entry. Open an entry and check the Share to Social toggle."
    );
  };

  return (
    <section
      style={{
        marginBottom: "18px",
      }}
    >
      <GlassPanel>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          <div>
            <SectionEyebrow>Content Lane</SectionEyebrow>

            <div
              style={{
                fontSize: "22px",
                fontWeight: 900,
                lineHeight: 1.1,
                color: "#F8FAFF",
              }}
            >
              {activeTab === "news" ? "News Management" : "Blog Management"}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {contentTabs.map((tab) => (
              <HeaderTabButton
                key={tab.id}
                isActive={activeTab === tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setEditingId(null);
                }}
              >
                {tab.label}
              </HeaderTabButton>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "220px 1fr" : "1fr",
            gap: "12px",
          }}
        >
          <ActionButton
            label={
              activeTab === "news" ? "Create News Post" : "Create Blog Post"
            }
            onClick={onCreateNew}
            primary
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop
                ? "repeat(3, minmax(0, 1fr))"
                : "1fr",
              gap: "10px",
            }}
          >
            <ActionButton
              label="Prepare Newsletter Send"
              onClick={handlePrepareNewsletter}
            />

            <ActionButton
              label="Preview Public Layout"
              onClick={handlePreviewPublicLayout}
            />

            <ActionButton
              label="Review Share Readiness"
              onClick={handleReviewShareReadiness}
            />
          </div>
        </div>
      </GlassPanel>
    </section>
  );
}