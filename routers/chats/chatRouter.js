// Only Posting
const express = require("express");
const router = express.Router();
const Chat = require("../../models/Chat");
const Conversation = require("../../models/Conversation");

router.post("/", (req, res) => {
  const conversationId = req.body.conversationId;
  const sender = req.body.sender;
  const message = req.body.message;

  const chat = new Chat({
    conversationId: conversationId,
    sender: sender,
    message: message,
  });
  chat
    .save()
    .then((chat) => {
      res.status(200).json({ message: "Message sent" });
    })
    .catch((err) => {
      res.status(500).json({ error: "Something went wrong" });
    });
});

module.exports = router;
