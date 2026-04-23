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
    const now = new Date().toISOString();

    const newPost = {
      title: data.title || "",
      slug: data.slug || "",
      excerpt: data.excerpt || "",
      body: data.body || "",
      category: data.category || "news",
      tags: Array.isArray(data.tags) ? data.tags : [],
      coverImageUrl: data.coverImageUrl || "",
      authorName: data.authorName || "",
      sponsorName: data.sponsorName || "",
      date: data.date || "",
      readTime: data.readTime || "4 min read",

      status: data.status || "draft",
      featured: Boolean(data.featured),
      shareToSocial: Boolean(data.shareToSocial),
      sendNewsletter: Boolean(data.sendNewsletter),

      createdAt: now,
      updatedAt: now,
      publishedAt: data.status === "published" ? now : "",
      deletedAt: null,
    };

    const result = await db.collection("website_posts").insertOne(newPost);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        id: result.insertedId.toString(),
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