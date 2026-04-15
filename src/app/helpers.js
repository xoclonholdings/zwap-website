export function generateReferralCode() {
  return `ZWAP-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export function getStoredRecord() {
  try {
    return JSON.parse(localStorage.getItem("zwap_early_access_record") || "{}");
  } catch {
    return {};
  }
}

export function saveRecord(record) {
  localStorage.setItem(
    "zwap_early_access_record",
    JSON.stringify(record)
  );
}