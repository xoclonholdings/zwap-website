import React, { useEffect, useMemo, useRef, useState } from "react";

const COINZILLA_SCRIPT_ID = "coinzilla-sdk-script";
const COINZILLA_SCRIPT_SRC = "https://request-global.czilladx.com/serve/native.php";

function loadCoinzillaScript() {
  return new Promise((resolve, reject) => {
    const existingScript = document.getElementById(COINZILLA_SCRIPT_ID);

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        resolve();
        return;
      }

      existingScript.addEventListener("load", resolve, { once: true });
      existingScript.addEventListener(
        "error",
        () => reject(new Error("Coinzilla script failed to load.")),
        { once: true }
      );
      return;
    }

    const script = document.createElement("script");
    script.id = COINZILLA_SCRIPT_ID;
    script.src = COINZILLA_SCRIPT_SRC;
    script.async = true;
    script.dataset.loaded = "false";

    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };

    script.onerror = () => {
      reject(new Error("Coinzilla script failed to load."));
    };

    document.body.appendChild(script);
  });
}

export default function CoinzillaAdSlot({ placementId, className = "" }) {
  const containerRef = useRef(null);
  const hasRequestedRef = useRef(false);
  const [isReady, setIsReady] = useState(false);

  const slotId = useMemo(() => {
    const safePlacement = String(placementId || "coinzilla")
      .replace(/[^a-zA-Z0-9_-]/g, "")
      .slice(0, 40);

    return `coinzilla-slot-${safePlacement}`;
  }, [placementId]);

  useEffect(() => {
    let isMounted = true;

    if (!placementId || typeof window === "undefined") {
      return;
    }

    async function initializeAd() {
      try {
        await loadCoinzillaScript();

        if (!isMounted || !containerRef.current) return;

        const container = containerRef.current;

        if (container.dataset.rendered === "true") {
          setIsReady(true);
          return;
        }

        if (hasRequestedRef.current) return;
        hasRequestedRef.current = true;

        container.innerHTML = "";

        const adNode = document.createElement("div");
        adNode.setAttribute("data-cz-placement-id", String(placementId));
        adNode.style.width = "100%";
        adNode.style.display = "block";

        container.appendChild(adNode);

        /**
         * Coinzilla integrations vary by placement type.
         * This supports:
         * 1. auto-scan script behavior after node insertion
         * 2. optional global refresh/init hooks if Coinzilla exposes them
         */
        if (
          window.coinzilla &&
          typeof window.coinzilla.fill === "function"
        ) {
          window.coinzilla.fill();
        } else if (
          window.coinzilla &&
          typeof window.coinzilla.init === "function"
        ) {
          window.coinzilla.init();
        } else if (window.czilladx && typeof window.czilladx.render === "function") {
          window.czilladx.render();
        }

        container.dataset.rendered = "true";
        setIsReady(true);
      } catch (error) {
        console.error("CoinzillaAdSlot:", error);
      }
    }

    initializeAd();

    return () => {
      isMounted = false;
    };
  }, [placementId]);

  if (!placementId) return null;

  return (
    <div
      className={className}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "12px 0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          id={slotId}
          ref={containerRef}
          aria-label="Sponsored content"
          style={{
            width: "100%",
            minHeight: "90px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            overflow: "hidden",
            opacity: isReady ? 1 : 0.65,
            transition: "opacity 220ms ease",
          }}
        />
      </div>
    </div>
  );
}