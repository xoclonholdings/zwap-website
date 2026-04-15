import { getStoredRecord, saveRecord } from "./helpers";

export default function usePreviewUnlock({
  email,
  referralCode,
  referredBy,
  pendingPage,
  setPreviewUnlocked,
  setIsModalOpen,
  setActivePage,
  setPendingPage,
}) {
  const unlockPreview = () => {
    const record = getStoredRecord();

    const updated = {
      ...record,
      email: email.trim() || record.email || "",
      early_access: true,
      preview_unlocked: true,
      referral_code: referralCode,
      referred_by: referredBy || null,
      referral_count: record.referral_count || 0,
      pending_rewards: {
        referral_zwap: record?.pending_rewards?.referral_zwap || 0,
      },
      created_at: record.created_at || new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    saveRecord(updated);

    if (updated.email) {
      localStorage.setItem("zwap_early_access_email", updated.email);
    }

    localStorage.setItem("zwap_preview_unlocked", "true");

    setPreviewUnlocked(true);
    setIsModalOpen(false);

    if (pendingPage === "preview") {
      setActivePage("preview");
    }

    setPendingPage(null);
  };

  return unlockPreview;
}