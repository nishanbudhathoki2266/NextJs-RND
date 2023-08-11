function handler(req, res) {
  const { eventId } = req.query;

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
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(newComment);

    res.status(201).json({
      status: "success",
      comment: newComment,
    });
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
