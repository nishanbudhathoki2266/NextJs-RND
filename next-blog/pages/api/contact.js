function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({
        message: "Invalid input!",
      });
    }

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    res.status(201).json({
      status: "success",
      message: newMessage,
    });
  }
}

export default handler;
