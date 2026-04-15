import React, { useEffect } from "react";

export default function GooglePlay() {
  useEffect(() => {
    // Replace with real link later
    window.location.href = "https://play.google.com";
  }, []);

  return (
    <div style={{ padding: 20, color: "white" }}>
      Redirecting to Google Play...
    </div>
  );
}