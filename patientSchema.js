// patientSchema.js

const mongoose = require('mongoose');

// Define the schema
const patientSchema = new mongoose.Schema({
    name: String,
    title: String,
    // Add more fields as needed
});

// Create and export the model
const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient