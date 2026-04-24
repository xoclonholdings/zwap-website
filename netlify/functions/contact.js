const { Resend } = require("resend");

exports.handler = async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY environment variable.");
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      throw new Error("Missing CONTACT_TO_EMAIL environment variable.");
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      throw new Error("Missing RESEND_FROM_EMAIL environment variable.");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
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

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      reply_to: email,
      subject: `ZWAP! Contact Form: ${topic}`,
      text: `
New ZWAP! contact form submission

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