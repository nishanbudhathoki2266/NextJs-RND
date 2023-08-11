import { MongoClient } from "mongodb";
async function handler(req, res) {
  const { eventId } = req.query;

  if (req.method === "POST") {
    // Add server-side validation
    const { email, name, text } = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://nishanbudhathoki2266:nishann11@cluster0.fmspthg.mongodb.net/events?retryWrites=true&w=majority"
    );

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
    const dummyList = [
      { id: "c1", name: "Nishan", text: "You are doing great!" },
      { id: "c2", name: "Max", text: "Trust the process.." },
    ];

    res.status(200).json({
      status: "success",
      comments: dummyList,
    });
  }
}

export default handler;
