import { MongoClient } from "mongodb";
async function handler(req, res) {
  const { eventId } = req.query;

  const client = await MongoClient.connect(
    "mongodb+srv://nishanbudhathoki2266:nishann11@cluster0.fmspthg.mongodb.net/events?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    // Add server-side validation
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      return res.status(422).json({
        message: "Invalid input",
      });
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();

    const result = await db.collection("comments").insertOne(newComment);

    console.log(result);

    newComment.id = result.insertedId;

    res.status(201).json({
      status: "success",
      comment: newComment,
    });
    client.close();
  }

  if (req.method === "GET") {
    const db = client.db();

    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({
      status: "success",
      comments: documents,
    });
  }
}

export default handler;
