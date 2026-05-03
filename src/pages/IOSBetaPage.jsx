import React from "react";

export default function IOSBetaPage() {
  const handleOpenApp = () => {
    window.location.href = "/app/";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-[90%] max-w-[380px] rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl">
        
        {/* Title */}
        <h1 className="text-[28px] font-semibold tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          ZWAP!
        </h1>

        <p className="mt-1 text-sm text-white/60">
          iPhone Beta Access
        </p>

        {/* Instructions */}
        <div className="mt-6 text-left text-sm text-white/80 space-y-2">
          <p><b>Install:</b></p>
          <p>1. Open this page in <b>Safari</b></p>
          <p>2. Tap the <b>Share</b> button</p>
          <p>3. Tap <b>Add to Home Screen</b></p>
          <p>4. Launch ZWAP! from your home screen</p>
        </div>

        {/* Button */}
        <button
          onClick={handleOpenApp}
          className="mt-6 w-full rounded-[18px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 py-3 text-black font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)]"
        >
          Open ZWAP!
        </button>

        <p className="mt-4 text-xs text-white/40">
          Browser-based preview. Full app experience coming soon.
        </p>

        <button
          onClick={() => window.history.back()}
          className="mt-3 text-xs text-white/40"
        >
          Back
        </button>

      </div>
    </div>
  );
}