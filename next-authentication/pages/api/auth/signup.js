import { hashPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      return res.status(422).json({
        message: "Invalid input!",
      });
    }

    const client = await connectToDatabase();

    const db = client.db();

    const hashedPassword = await hashPassword(password);

    const result = await db.collection("users").insertOne({
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Created user!",
    });
  }

  if (req.method === "GET") {
    console.log("I am coming from get request");
  }
}

export default handler;
