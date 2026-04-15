export default function usePreviewNavigation({
  previewUnlocked,
  setActivePage,
  openEarlyAccessModal,
}) {
  const handlePreviewNav = () => {
    if (previewUnlocked) {
      setActivePage("preview");
      return;
    }

    openEarlyAccessModal("preview");
  };

  return handlePreviewNav;
}