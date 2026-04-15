import { useEffect } from "react";
import { generateReferralCode, getStoredRecord } from "./helpers";

export default function useAppInit({
  setReferralCode,
  setPreviewUnlocked,
  setEmail,
  setReferredBy,
}) {
  useEffect(() => {
    const record = getStoredRecord();

    const storedCode =
      record.referral_code || localStorage.getItem("zwap_referral_code");

    const finalCode = storedCode || generateReferralCode();

    if (!storedCode) {
      localStorage.setItem("zwap_referral_code", finalCode);
    }

    setReferralCode(finalCode);

    setPreviewUnlocked(
      localStorage.getItem("zwap_preview_unlocked") === "true"
    );

    setEmail(localStorage.getItem("zwap_early_access_email") || "");

    const savedReferredBy =
      localStorage.getItem("zwap_referred_by") || "";

    setReferredBy(savedReferredBy);

    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");

    if (ref) {
      setReferredBy(ref);
      localStorage.setItem("zwap_referred_by", ref);
    }
  }, [
    setReferralCode,
    setPreviewUnlocked,
    setEmail,
    setReferredBy,
  ]);
}