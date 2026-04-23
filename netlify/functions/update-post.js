const { ObjectId } = require("mongodb");
const { getDb } = require("./utils/mongo");

exports.handler = async function handler(event) {
  if (event.httpMethod !== "PUT") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const db = await getDb();
    const data = JSON.parse(event.body || "{}");

    if (!data.id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing post id" }),
      };
    }

    const updateDoc = {
      title: data.title || "",
      slug: data.slug || "",
      excerpt: data.excerpt || "",
      body: data.body || "",
      category: data.category || "news",
      tags: data.tags || [],
      coverImageUrl: data.coverImageUrl || "",
      authorName: data.authorName || "",
      date: data.date || "",
      status: data.status || "draft",
      featured: Boolean(data.featured),
      updatedAt: new Date().toISOString(),
    };

    const result = await db.collection("website_posts").updateOne(
      { _id: new ObjectId(data.id) },
      { $set: updateDoc }
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
        error: "Failed to update post",
        details: error.message,
      }),
    };
  }
};