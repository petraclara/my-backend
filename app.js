const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const connectToDb = require("./config/db");
const http = require("http");
const socketIO = require("socket.io");
const signUpRouter = require("./routers/users/signupRouter");
const server = http.createServer(app);
const io = socketIO(server);
let corsOption = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://teeticolab.eu.org",
    "https://jubilant-waffle-5pqj9wgwpp6hvwx9-3000.app.github.dev",
  ],
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.options("*", cors());
app.use(cors(corsOption));
app.use("/users", signUpRouter);
connectToDb();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Clare Petra server" });
});

app.listen(PORT, (req, res) => {
  console.log(`listen on port ${PORT}`);
});
