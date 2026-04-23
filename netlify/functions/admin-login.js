exports.handler = async (event) => {
  const jsonHeaders = {
    "Content-Type": "application/json",
  };

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: jsonHeaders,
      body: JSON.stringify({
        success: false,
        error: "Method not allowed",
      }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");

    const email = String(body.email || "")
      .trim()
      .toLowerCase();
    const password = String(body.password || "").trim();

    const adminEmail = String(process.env.ADMIN_EMAIL || "")
      .trim()
      .toLowerCase();
    const adminPassword = String(process.env.ADMIN_PASSWORD || "").trim();

    if (!adminEmail || !adminPassword) {
      return {
        statusCode: 500,
        headers: jsonHeaders,
        body: JSON.stringify({
          success: false,
          error: "Admin authentication is not configured.",
        }),
      };
    }

    if (!email || !password) {
      return {
        statusCode: 400,
        headers: jsonHeaders,
        body: JSON.stringify({
          success: false,
          error: "Email and password are required.",
        }),
      };
    }

    const emailMatches = email === adminEmail;
    const passwordMatches = password === adminPassword;

    if (!emailMatches || !passwordMatches) {
      return {
        statusCode: 401,
        headers: jsonHeaders,
        body: JSON.stringify({
          success: false,
          error: "Invalid admin credentials.",
        }),
      };
    }

    return {
      statusCode: 200,
      headers: jsonHeaders,
      body: JSON.stringify({
        success: true,
        message: "Admin authenticated.",
      }),
    };
  } catch (error) {
    console.error("admin-login error:", error);

    return {
      statusCode: 500,
      headers: jsonHeaders,
      body: JSON.stringify({
        success: false,
        error: "Failed to process admin login.",
      }),
    };
  }
};