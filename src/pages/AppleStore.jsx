import React from "react";
import { ArrowLeft, Apple } from "lucide-react";

export default function AppleStore({ onBack }) {
  return (
    <div className="min-h-screen bg-[#050510] text-white px-5 py-6">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        <div
          className="rounded-[32px] border border-white/10 p-8 md:p-10"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(255,255,255,0.08), transparent 28%), linear-gradient(180deg, rgba(12,14,24,0.96) 0%, rgba(5,6,14,0.98) 100%)",
            boxShadow:
              "0 24px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
              <Apple size={40} className="text-white" />
            </div>
          </div>

          <div className="text-center">
            <div className="text-[13px] uppercase tracking-[0.22em] text-white/50 mb-3">
              Apple App Store
            </div>

            <h1 className="text-4xl md:text-5xl font-black leading-none mb-5">
              ZWAP! for iPhone
            </h1>

            <p className="text-white/70 text-[16px] leading-7 max-w-xl mx-auto mb-8">
              Move. Play. Earn Today. ZWAP! is preparing for launch on iOS.
              Lock in early access now and be first in line when the app goes
              live.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-sm uppercase tracking-[0.18em] text-cyan-300/80 mb-2">
                  Move
                </div>
                <div className="text-white/70 text-sm leading-6">
                  Turn steps and activity into progression and rewards.
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-sm uppercase tracking-[0.18em] text-fuchsia-300/80 mb-2">
                  Play
                </div>
                <div className="text-white/70 text-sm leading-6">
                  Earn through games, streaks, and daily activity loops.
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-sm uppercase tracking-[0.18em] text-amber-300/80 mb-2">
                  Earn
                </div>
                <div className="text-white/70 text-sm leading-6">
                  Build zPts, unlock ZWAP, and access future rewards.
                </div>
              </div>
            </div>

            <button
              onClick={onBack}
              className="inline-flex items-center justify-center rounded-full border border-[#A567FF]/50 px-8 py-4 font-bold text-white transition-all hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(24,26,48,1) 0%, rgba(11,13,28,1) 100%)",
                boxShadow:
                  "0 10px 30px rgba(120, 88, 255, 0.18), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}