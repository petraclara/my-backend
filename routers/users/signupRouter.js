const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcryptJs = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  User.find({})
    .then((user) => {
      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(404).json({ error: "No user found" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ error: "Something went wrong" });
    });
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  User.findOne({ _id: id })
    .then((user) => {
      if (user) {
        return res.status(200).json(user);
      } else {
        return res.status(404).json({ error: "No user found" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ error: "Something went wrong" });
    });
});

router.post("/register", (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.confirm) {
    return res.status(500).json({ error: "Fill in all fields please" });
  }
  if (req.body.password !== req.body.confirm) {
    return res.status(401).json({ error: "Passwords dont match" });
  }

  User.findOne({ email: req.body.email })
    .then((emailUser) => {
      if (emailUser) {
        return res.status(403).json({ error: "This user exists" });
      } else {
        bcryptJs
          .hash(req.body.password, 10)
          .then((hashed) => {
            const newUser = new User({
              email: req.body.email,
              password: hashed,
            });
            newUser
              .save()
              .then((user) => {
                if (user) {
                  return res
                    .status(201)
                    .json({ message: "Account created successfully" });
                }
              })
              .catch((err) => {
                return res.status(500).json({ error: "Something went wrong" });
              });
          })
          .catch((err) => {
            return res.status(500).json({ error: "Something went wrong" });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Something went wrong" });
    });
});

router.post("/login", (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(404).json({ error: "Fill in all fields" });
  }

  User.findOne({ email: req.body.email }).then((loggedUser) => {
    if (loggedUser) {
      bcryptJs
        .compare(req.body.password, loggedUser.password)
        .then((verifiedUser) => {
          if (verifiedUser) {
            const token = jwt.sign(
              {
                id: loggedUser._id,
                email: loggedUser.email,
              },
              process.env.TOKEN_SECRET,
              { expiresIn: "10h" }
            );
            return res.status(201).json({ token: token });
          } else {
            return res.status(401).json({ error: "Wrong Credentials!" });
          }
        });
    }
  });
});

module.exports = router;
