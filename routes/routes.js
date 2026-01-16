const express = require("express");
const router = express.Router();

const { getAIResponse } = require("../services/service");
const { handleBusinessLogic } = require("../logic/logic");

router.post("/", async (req, res) => {
  try {
    const userMessage = req.body.message;
    const logicReply = await handleBusinessLogic(userMessage);
    if (logicReply) {
      return res.json({ reply: logicReply });
    }

    const messages = [
      {
        role: "system",
        content: "You are a professional customer support chatbot for AMC and ticket management.",
      },
      { role: "user", content: userMessage },
    ];

    const aiReply = await getAIResponse(messages);

    res.json({ reply: aiReply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Something went wrong 🤖" });
  }
});

module.exports = router;