const express = require("express");
const router = express.Router();
const Therapist = require("../../therapistSchema");

// Define a route to handle GET requests for querying therapists
router.get("/patient-request", async (req, res) => {
  try {
    // Extract the patient's preferences from the request body
    const { preferences } = req.body;

    // Construct a query to find therapists based on the patient's preferences
    const query = {};
    if (preferences && preferences.length > 0) {
      query.specialty = { $in: preferences }; // Assuming specialty is the field to match preferences
    }

    // Execute the query to find therapists
    const therapists = await Therapist.find(query);

    // Send the response back to the frontend with the fetched therapists
    res.json(therapists);
  } catch (error) {
    console.error("Error handling GET request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
