import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({
        stauts: "fail",
        message: "Invalid email address",
      });
    }

    console.log(userEmail);
    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;
