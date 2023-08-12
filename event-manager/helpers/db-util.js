import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://nishanbudhathoki2266:nishann11@cluster0.fmspthg.mongodb.net/events?retryWrites=true&w=majority"
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  return await db.collection(collection).insertOne(document);
}
export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  return await db.collection(collection).find().sort(sort).toArray();
}
