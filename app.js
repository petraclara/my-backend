const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;
const PORTCHAT = process.env.PORTCHAT || 5000;
const cors = require("cors");
const connectToDb = require("./config/db");
const Patient = require("./patientSchema");
const Therapist = require("./therapistSchema"); // Import the therapist schema/model
const router = express.Router();
const { server, appChat } = require("./routers/chats/chatRouter");
const authRouter = require("./routers/users/authRouter");
// Configure CORS
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://teeticolab.eu.org",
    "https://jubilant-waffle-5pqj9wgwpp6hvwx9-3000.app.github.dev",
  ],
};

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Connect to the database
connectToDb();

app.use("/auth", authRouter);
// server.listen(PORTCHAT, () => {
//   console.log(`Server started on port ${PORTCHAT}`);
// });
// Define route to fetch therapists based on preferences
app.post("/patient-request", async (req, res) => {
  try {
    const { preferences } = req.body;

    // Find therapists based on preferences
    const therapists = await Therapist.find({
      specialty: { $in: preferences },
      // Add more criteria if needed
    });

    res.json(therapists);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Define a route to handle POST requests for adding a therapist
app.post("/therapist/add", async (req, res) => {
  try {
    // Extract therapist data from the request body
    const { name, gender, specialty, language, race, age } = req.body;

    // Create a new therapist document
    const newTherapist = new Therapist({
      name,
      gender,
      specialty,
      language,
      race,
      age,
    });

    // Save the new therapist document to the database
    const savedTherapist = await newTherapist.save();

    // Send a success response back to the client
    res.status(201).json({ success: true, therapist: savedTherapist });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error adding therapist:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Clare Petra server" });
});

app.post("/therapist-request", async (req, res) => {
  try {
    // Find the first 100 patients
    const patients = await Patient.find()

    res.json(patients);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
