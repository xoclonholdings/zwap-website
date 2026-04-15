import { useState } from "react";

export default function useAppState() {
  const [activePage, setActivePage] = useState("home");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingPage, setPendingPage] = useState(null);

  const [email, setEmail] = useState("");
  const [previewUnlocked, setPreviewUnlocked] = useState(false);

  const [referralCode, setReferralCode] = useState("");
  const [referredBy, setReferredBy] = useState("");

  return {
    activePage,
    setActivePage,

    isModalOpen,
    setIsModalOpen,

    pendingPage,
    setPendingPage,

    email,
    setEmail,

    previewUnlocked,
    setPreviewUnlocked,

    referralCode,
    setReferralCode,

    referredBy,
    setReferredBy,
  };
}