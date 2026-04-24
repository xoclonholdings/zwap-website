const { Resend } = require("resend");

const TOPIC_ROUTES = {
  support: "support@zwap.online",
  partners: "partners@zwap.online",
  enterprise: "enterprise@zwap.online",
  developers: "developers@zwap.online",
  press: "press@zwap.online",
  business: "hello@zwap.online",
  general: "hello@zwap.online",
};

function normalizeTopic(topic) {
  const clean = String(topic || "general").trim().toLowerCase();

  if (clean.includes("support")) return "support";
  if (clean.includes("partner") || clean.includes("sponsor")) return "partners";
  if (clean.includes("enterprise") || clean.includes("workplace")) return "enterprise";
  if (clean.includes("developer")) return "developers";
  if (clean.includes("press") || clean.includes("media")) return "press";
  if (clean.includes("business")) return "business";

  return "general";
}

exports.handler = async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "app@zwap.online";

    if (!resendApiKey) {
      throw new Error("Missing RESEND_API_KEY environment variable.");
    }

    const resend = new Resend(resendApiKey);
    const data = JSON.parse(event.body || "{}");

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const topic = String(data.topic || "General Inquiry").trim();
    const message = String(data.message || "").trim();

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Name, email, and message are required.",
        }),
      };
    }

    const routeKey = normalizeTopic(topic);
    const toEmail = TOPIC_ROUTES[routeKey] || TOPIC_ROUTES.general;

    await resend.emails.send({
      from: `ZWAP! Contact <${fromEmail}>`,
      to: toEmail,
      reply_to: email,
      subject: `ZWAP! Contact Form: ${topic}`,
      text: `
New ZWAP! contact form submission

Route:
${routeKey}

Sent To:
${toEmail}

Name:
${name}

Email:
${email}

Topic:
${topic}

Message:
${message}
      `.trim(),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        routedTo: routeKey,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to send contact message.",
        details: error.message,
      }),
    };
  }
};