const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable.");
}

let cachedClient = null;
let cachedDb = null;

async function getDb() {
  if (cachedDb) {
    return cachedDb;
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(uri);
    await cachedClient.connect();
  }

  cachedDb = cachedClient.db(process.env.MONGODB_DB_NAME || "zwap");
  return cachedDb;
}

module.exports = { getDb };