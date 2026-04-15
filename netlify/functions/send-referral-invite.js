const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

    const referralCode = String(body.referralCode || "").trim();
    const friendEmail = String(body.friendEmail || "").trim().toLowerCase();

    if (!referralCode) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ error: "Referral code is required" }),
      };
    }

    if (!friendEmail) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ error: "Friend email is required" }),
      };
    }

    if (!isValidEmail(friendEmail)) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ error: "Invalid friend email address" }),
      };
    }

    const referralLink = `https://zwap.online/?ref=${encodeURIComponent(
      referralCode
    )}`;

    const subject = "You’ve been invited to ZWAP!";

    const html = `
      <div style="font-family: Inter, Arial, sans-serif; background:#04050A; color:#F5F7FF; padding:32px;">
        <div style="max-width:640px; margin:0 auto; background:linear-gradient(180deg, rgba(8,10,22,0.96), rgba(4,5,10,1)); border:1px solid rgba(165,103,255,0.22); border-radius:24px; padding:32px;">
          <h1 style="margin:0 0 12px; font-size:36px; line-height:1.05;">You’ve been invited to ZWAP!</h1>

          <p style="margin:0 0 18px; font-size:16px; line-height:1.7; color:rgba(245,247,255,0.82);">
            You’ve been invited to preview ZWAP early and reserve launch rewards before the system opens.
          </p>

          <div style="margin:24px 0; padding:18px; border-radius:18px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08);">
            <div style="font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(245,247,255,0.58); margin-bottom:8px;">
              Referral code
            </div>
            <div style="font-size:24px; font-weight:800;">${referralCode}</div>
          </div>

          <div style="margin:24px 0; padding:18px; border-radius:18px; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.08); word-break:break-all;">
            <div style="font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(245,247,255,0.58); margin-bottom:8px;">
              Preview link
            </div>
            <div style="font-size:15px; line-height:1.6;">${referralLink}</div>
          </div>

          <div style="margin:24px 0; padding:18px; border-radius:18px; background:rgba(103,242,255,0.04); border:1px solid rgba(103,242,255,0.12);">
            <div style="font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(245,247,255,0.58); margin-bottom:10px;">
              Before launch
            </div>
            <p style="margin:0 0 10px; font-size:15px; line-height:1.7; color:rgba(245,247,255,0.86);">
              Lock in early access, enter the preview, and get positioned before ZWAP officially opens.
            </p>
            <p style="margin:0; font-size:15px; line-height:1.7; color:rgba(245,247,255,0.78);">
              Referral rewards are reserved before launch and activate only after real signup and first activity inside the app.
            </p>
          </div>

          <p style="margin:24px 0 0; font-size:14px; line-height:1.6; color:rgba(245,247,255,0.64);">
            Move. Play. Earn Today.
          </p>
        </div>
      </div>
    `;

    const resendResponse = await resend.emails.send({
      from: "ZWAP! <app@zwap.online>",
      to: friendEmail,
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
        friendEmail,
        referralCode,
        referralLink,
        resendId: resendResponse?.data?.id || null,
      }),
    };
  } catch (error) {
    console.error("send-referral-invite function error:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: "Failed to send referral invite",
      }),
    };
  }
};