import React from "react";

function BackArrowIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    </svg>
  );
}

export default function PrivacyPage({ onBack }) {
  const sections = [
    {
      title: "Information We Collect",
      content: `We collect information you provide directly to us, including:

• Wallet address when you connect your wallet
• Email address if you join the mailing list or early access
• Step count and movement data through MOVE features
• Gameplay activity, scores, and session history
• Daily task completion and reward history
• Transaction and conversion history inside the platform

We do not collect sensitive personal information unless you voluntarily provide it through support, contact forms, or early access registration.`,
    },
    {
      title: "How We Use Your Information",
      content: `We use the information we collect to:

• Provide, maintain, and improve ZWAP!
• Track progression, streaks, and rewards
• Process referrals and early access rewards
• Send important platform updates and launch emails
• Detect abuse, fraud, manipulation, or suspicious activity
• Support user accounts, subscriptions, and platform features`,
    },
    {
      title: "Data Security",
      content: `We implement reasonable technical and organizational safeguards to protect your information:

• Data is protected in transit and at rest where applicable
• Wallet interactions rely on industry-standard wallet connections
• We do not store private keys
• Access to internal systems is restricted where appropriate

No online system is completely immune from risk, so we cannot guarantee absolute security.`,
    },
    {
      title: "Blockchain Data",
      content: `If you use wallet-based or blockchain-connected features:

• Your wallet address may be publicly visible on-chain
• Blockchain transactions may be permanent and immutable
• We do not control third-party blockchain networks
• On-chain activity may be independently viewable by others`,
    },
    {
      title: "Third-Party Services",
      content: `We may use third-party services to operate parts of the platform, including:

• Analytics providers
• Email and communications services
• Payment processors
• Wallet, blockchain, and infrastructure providers

These third parties may have their own terms and privacy practices.`,
    },
    {
      title: "Your Choices",
      content: `You may:

• Disconnect your wallet at any time
• Choose whether to provide your email for early access or updates
• Contact us about your personal data
• Opt out of promotional communications where applicable

Please note that certain blockchain-related records cannot be deleted or altered.`,
    },
    {
      title: "Updates to This Policy",
      content: `We may update this Privacy Policy from time to time. When we do, we will post the updated version on this page and revise the effective date as appropriate.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050510] text-white">
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#0a0b1e]/95 backdrop-blur-lg border-b border-cyan-500/20">
        <div className="flex items-center px-4 py-3 max-w-lg mx-auto">
          <button
            onClick={onBack}
            className="mr-3 text-gray-400 hover:text-white"
            aria-label="Back"
          >
            <BackArrowIcon />
          </button>

          <h1 className="text-lg font-bold text-white">Privacy Policy</h1>
        </div>
      </div>

      <div className="pt-20 pb-8 px-4 max-w-lg mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
            <div className="text-cyan-400">
              <ShieldIcon />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Privacy Policy</h2>

          <p className="text-gray-400 text-sm">Last updated: March 2026</p>
        </div>

        <div className="space-y-6">
          {sections.map((section, i) => (
            <div key={i} className="glass-card p-5 rounded-xl">
              <h3 className="text-lg font-bold text-cyan-400 mb-3">
                {section.title}
              </h3>

              <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="glass-card p-4 rounded-xl mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Questions? Contact us at{" "}
            <a
              href="mailto:app@zwap.online"
              className="text-cyan-400 hover:underline"
            >
              app@zwap.online
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}