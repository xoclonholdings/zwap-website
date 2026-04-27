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

function FileTextIcon() {
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
}

export default function TermsPage({ onBack }) {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing or using the ZWAP! application ("App"), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this App.`,
    },
    {
      title: "2. Description of Service",
      content: `ZWAP! is a progression-based rewards platform that allows users to:

• Earn zPts through movement and gameplay
• Complete daily activities and streaks
• Unlock access to ZWAP through milestones and controlled conversion events
• Access premium features, rewards, and marketplace experiences

The App may use blockchain technology and may require a compatible wallet for certain features.`,
    },
    {
      title: "3. Eligibility",
      content: `You must be at least 18 years old to use this App. By using the App, you represent and warrant that:

• You are at least 18 years of age
• You have the legal capacity to enter into binding agreements
• Your use complies with all applicable laws in your jurisdiction
• Cryptocurrency activities are legal in your country of residence`,
    },
    {
      title: "4. Account and Wallet",
      content: `• You are responsible for maintaining the security of your wallet
• We do not store private keys
• Lost wallet access cannot be recovered by us
• You are responsible for all activities under your account
• One wallet address per user account`,
    },
    {
      title: "5. zPts and ZWAP",
      content: `• zPts are non-transferable progression points within the platform
• ZWAP is a utility token within the ZWAP ecosystem
• Reward values may fluctuate based on market conditions
• Rewards are subject to daily and monthly earning limits
• Unlocks, conversions, and rewards may be delayed or capped
• We reserve the right to modify reward rates and conversion rules
• Certain swaps and exchanges may occur through third-party services`,
    },
    {
      title: "6. Subscriptions",
      content: `Plus subscriptions:

• Are billed monthly
• Can be cancelled at any time
• Benefits remain active until the end of the billing period
• No refunds are provided for partial billing periods
• Prices and benefits may change with notice`,
    },
    {
      title: "7. Prohibited Activities",
      content: `You agree not to:

• Use bots, scripts, or automated tools
• Manipulate step counts, gameplay, or rewards
• Create multiple accounts to gain unfair advantages
• Attempt to exploit bugs or vulnerabilities
• Use the platform for illegal activity
• Violate any applicable laws`,
    },
    {
      title: "8. Intellectual Property",
      content: `• All content, trademarks, and intellectual property are owned by ZWAP LLC
• ZWAP LLC is owned by XOCLON HOLDINGS INC.
• You may not copy, modify, or distribute our content without permission
• User-generated content remains yours, but you grant us a license to display and use it
• ZWAP! branding may not be used without written permission`,
    },
    {
      title: "9. Account and Data Deletion",
      content: `You may request deletion of your ZWAP! account and associated data, or request deletion of specific app data without deleting your full account.

Requests may include:

• Account information
• Email address
• Fitness and activity data
• Gameplay and learning progress
• zPts balance and progression data
• Streaks, badges, and app progress connected to your account

Deletion requests can be submitted at:

https://zwap.online/delete-account

Requests are reviewed and processed within 7 days after receipt and verification. Minimal records may be retained only where required for security, fraud prevention, legal compliance, dispute handling, or abuse prevention.`,
    },
    {
      title: "10. Disclaimer of Warranties",
      content: `THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE:

• Continuous or uninterrupted service
• Accuracy of token values or market prices
• Future value of ZWAP
• Compatibility with all devices or wallets

Digital assets and blockchain-based systems carry risk. Only participate within your comfort level.`,
    },
    {
      title: "11. Limitation of Liability",
      content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, ZWAP! AND ITS AFFILIATES SHALL NOT BE LIABLE FOR:

• Loss of funds, rewards, or tokens
• Service interruptions
• Third-party actions
• Market fluctuations
• Indirect, incidental, or consequential damages`,
    },
    {
      title: "12. Changes to Terms",
      content: `We may modify these terms at any time. Continued use of the App after changes constitutes acceptance of the new terms. Material changes will be communicated through the App or website.`,
    },
    {
      title: "13. Governing Law",
      content: `These terms shall be governed by and construed in accordance with the laws of the State of Ohio, United States, without regard to its conflict of law provisions.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050510] text-white">
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#0a0b1e]/95 backdrop-blur-lg border-b border-purple-500/20">
        <div className="flex items-center px-4 py-3 max-w-lg mx-auto">
          <button
            onClick={onBack}
            className="mr-3 text-gray-400 hover:text-white"
            aria-label="Back"
          >
            <BackArrowIcon />
          </button>

          <h1 className="text-lg font-bold text-white">Terms of Use</h1>
        </div>
      </div>

      <div className="pt-20 pb-8 px-4 max-w-lg mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
            <div className="text-purple-400">
              <FileTextIcon />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Terms of Use</h2>

          <p className="text-gray-400 text-sm">Last updated: March 2026</p>
        </div>

        <div className="space-y-6">
          {sections.map((section, i) => (
            <div key={i} className="glass-card p-5 rounded-xl">
              <h3 className="text-lg font-bold text-purple-400 mb-3">
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
              className="text-purple-400 hover:underline"
            >
              app@zwap.online
            </a>
          </p>

          <p className="text-gray-400 text-sm mt-3">
            Account or data deletion requests can be submitted at{" "}
            <a
              href="/delete-account"
              className="text-purple-400 hover:underline"
            >
              zwap.online/delete-account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}