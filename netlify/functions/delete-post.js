const { ObjectId } = require("mongodb");
const { getDb } = require("./utils/mongo");

exports.handler = async function handler(event) {
  if (event.httpMethod !== "DELETE") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const db = await getDb();

    const id =
      event.queryStringParameters?.id ||
      JSON.parse(event.body || "{}").id;

    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing post id" }),
      };
    }

    const result = await db.collection("website_posts").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          deletedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      }
    );

    if (!result.matchedCount) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Post not found" }),
      };
    }

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
        error: "Failed to delete post",
        details: error.message,
      }),
    };
  }
};