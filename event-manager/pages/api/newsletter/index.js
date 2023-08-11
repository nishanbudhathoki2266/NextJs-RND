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

    const client = await MongoClient.connect(
      "mongodb+srv://nishanbudhathoki2266:nishann11@cluster0.fmspthg.mongodb.net/newsletter?retryWrites=true&w=majority"
    );

    const db = client.db();

    await db.collection("emails").insertOne({ email: userEmail });

    client.close();

    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
