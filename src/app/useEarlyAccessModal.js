import { useCallback } from "react";

export default function useEarlyAccessModal({
  setPendingPage,
  setIsModalOpen,
}) {
  const openEarlyAccessModal = useCallback(
    (targetPage = null) => {
      setPendingPage(targetPage);
      setIsModalOpen(true);
    },
    [setPendingPage, setIsModalOpen]
  );

  const closeEarlyAccessModal = useCallback(() => {
    setIsModalOpen(false);
    setPendingPage(null);
  }, [setPendingPage, setIsModalOpen]);

  return {
    openEarlyAccessModal,
    closeEarlyAccessModal,
  };
}