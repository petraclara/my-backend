// therapistSchema.js

const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
    name: String,
    gender: String,
    specialty: String,
    language: String,
    race: String,
    age: Number
});

const Therapist = mongoose.model('Therapist', therapistSchema);
module.exports = Therapist;
