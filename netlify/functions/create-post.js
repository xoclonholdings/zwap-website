const { getDb } = require("./utils/mongo");

exports.handler = async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const db = await getDb();

    const data = JSON.parse(event.body || "{}");

    const newPost = {
      title: data.title || "",
      slug: data.slug || "",
      excerpt: data.excerpt || "",
      body: data.body || "",
      category: data.category || "news",
      tags: data.tags || [],
      coverImageUrl: data.coverImageUrl || "",
      authorName: data.authorName || "",
      date: data.date || new Date().toISOString(),

      status: data.status || "draft",
      featured: data.featured || false,

      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: null,
    };

    const result = await db
      .collection("website_posts")
      .insertOne(newPost);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        id: result.insertedId,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to create post",
        details: error.message,
      }),
    };
  }
};