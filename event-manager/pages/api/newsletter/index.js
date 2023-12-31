import { connectDatabase, insertDocument } from "@/helpers/db-util";
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({
        stauts: "fail",
        message: "Invalid email address",
      });
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      return res.status(500).json({
        message: "Connecting to the database failed!",
      });
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail });
      client.close();
    } catch (error) {
      return res.status(500).json({
        message: "Inserting data failed!",
      });
    }

    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
