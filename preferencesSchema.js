// preferencesSchema.js

const mongoose = require('mongoose');

// Define the schema
const preferencesSchema = new mongoose.Schema({
    name: String,
    title: String,
    // Add more fields as needed
});

// Create and export the model
const Preferences = mongoose.model('Preferences', preferencesSchema);
module.exports = Preferences;
