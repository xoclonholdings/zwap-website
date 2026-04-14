const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildReferralCode(email) {
  const base = email
    .split("@")[0]
    .replace(/[^a-zA-Z0-9]/g, "")
    .toUpperCase();

  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `ZWAP-${base.slice(0, 6)}${suffix}`;
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "Missing RESEND_API_KEY" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");

    const email = String(body.email || "").trim().toLowerCase();
    const referredBy = String(body.referredBy || "").trim();
    const existingReferralCode = String(body.referralCode || "").trim();

    if (!email) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ error: "Email is required" }),
      };
    }

    if (!isValidEmail(email)) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ error: "Invalid email address" }),
      };
    }

    const referralCode = existingReferralCode || buildReferralCode(email);
    const referralLink = `https://zwap.online/?ref=${encodeURIComponent(
      referralCode
    )}`;

    const subject = "You’re in early. ZWAP!";

    const html = `
      <div style="font-family: Inter, Arial, sans-serif; background:#04050A; color:#F5F7FF; padding:32px;">
        <div style="max-width:640px; margin:0 auto; background:linear-gradient(180deg, rgba(8,10,22,0.96), rgba(4,5,10,1)); border:1px solid rgba(165,103,255,0.22); border-radius:24px; padding:32px;">
          <h1 style="margin:0 0 12px; font-size:36px; line-height:1.05;">You’re locked in early.</h1>

          <p style="margin:0 0 20px; font-size:16px; line-height:1.6; color:rgba(245,247,255,0.82);">
            You now have early access to ZWAP! Preview.
          </p>

          <div style="margin:24px 0; padding:18px; border-radius:18px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08);">
            <div style="font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(245,247,255,0.58); margin-bottom:8px;">
              Your referral code
            </div>
            <div style="font-size:24px; font-weight:800;">${referralCode}</div>
          </div>

          <div style="margin:24px 0; padding:18px; border-radius:18px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); word-break:break-all;">
            <div style="font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(245,247,255,0.58); margin-bottom:8px;">
              Your referral link
            </div>
            <div style="font-size:15px; line-height:1.6;">${referralLink}</div>
          </div>

          <div style="margin:24px 0; padding:18px; border-radius:18px; background:rgba(103,242,255,0.04); border:1px solid rgba(103,242,255,0.12);">
            <div style="font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(245,247,255,0.58); margin-bottom:10px;">
              Referral rewards
            </div>
            <p style="margin:0 0 10px; font-size:15px; line-height:1.7; color:rgba(245,247,255,0.86);">
              Each successful referral reserves <strong>5 ZWAP</strong> before launch.
            </p>
            <p style="margin:0 0 10px; font-size:15px; line-height:1.7; color:rgba(245,247,255,0.86);">
              You can reserve up to <strong>25 ZWAP</strong> through referrals.
            </p>
            <p style="margin:0; font-size:15px; line-height:1.7; color:rgba(245,247,255,0.78);">
              These rewards activate when ZWAP opens and you complete onboarding.
            </p>
          </div>

          ${
            referredBy
              ? `<p style="margin:0 0 16px; font-size:14px; line-height:1.6; color:rgba(245,247,255,0.64);">
                  Referral source recorded: ${referredBy}
                </p>`
              : ""
          }

          <p style="margin:24px 0 0; font-size:14px; line-height:1.6; color:rgba(245,247,255,0.64);">
            You’ll get another email when ZWAP! opens.
          </p>
        </div>
      </div>
    `;

    const resendResponse = await resend.emails.send({
      from: "ZWAP! <app@zwap.online>",
      to: email,
      subject,
      html,
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: true,
        email,
        referralCode,
        referralLink,
        referredBy: referredBy || null,
        resendId: resendResponse?.data?.id || null,
      }),
    };
  } catch (error) {
    console.error("early-access function error:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: "Failed to process early access request",
      }),
    };
  }
};