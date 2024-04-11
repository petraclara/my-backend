const express = require("express");
const router = express.Router();
const Conversation = require("../../models/Conversation");

router.post("/", (req, res) => {
  const receiverId = req.body.receiverId;
  const senderId = req.body.senderId;
  Conversation.findOne({
    participants: {
      $all: [receiverId, senderId],
    },
  })
    .then((conversationC) => {
      if (conversationC) {
        return res.status(201).json({ data: conversationC });
      } else {
        const conversation = new Conversation({
          participants: [receiverId, senderId],
        });
        conversation
          .save()
          .then((conv) => {
            if (conv) {
              return res.status(201).json({ data: conv });
            }
          })
          .catch((err) => {
            return res.status(500).json({ error: err });
          });
      }
    })
    .catch((err) => {
      return res.status(500).json({ error: err });
    });
});

module.exports = router;
