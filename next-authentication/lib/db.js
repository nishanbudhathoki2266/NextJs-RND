import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://nishanbudhathoki2266:nishann11@cluster0.fmspthg.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );
  return client;
}
