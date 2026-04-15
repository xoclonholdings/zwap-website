import { useEffect } from "react";

export default function RedirectToPreviewUnlock({ onOpen }) {
  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return null;
}