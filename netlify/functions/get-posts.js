const { getDb } = require("./utils/mongo");

exports.handler = async function handler(event) {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const db = await getDb();

    const posts = await db
      .collection("website_posts")
      .find({
        deletedAt: { $in: [null, ""] },
      })
      .sort({ createdAt: -1 })
      .toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(posts),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to load posts",
        details: error.message,
      }),
    };
  }
};