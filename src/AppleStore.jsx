import React, { useEffect } from "react";

export default function AppleStore() {
  useEffect(() => {
    // Replace with real link later
    window.location.href = "https://www.apple.com/app-store/";
  }, []);

  return (
    <div style={{ padding: 20, color: "white" }}>
      Redirecting to App Store...
    </div>
  );
}