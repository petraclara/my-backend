// const mongoose = require('mongoose');
// const Therapist = require('./therapistSchema');

// // Define dummy therapists data
// const dummyTherapists = [
//     {
//         name: 'John Doe',
//         gender: 'Male',
//         specialty: 'Psychologist',
//         language: 'English',
//         race: 'White',
//         age: 35
//     },
//     {
//         name: 'Jane Smith',
//         gender: 'Female',
//         specialty: 'Family Therapist',
//         language: 'Spanish',
//         race: 'Hispanic',
//         age: 42
//     },
//     {
//         name: 'Alex Johnson',
//         gender: 'Non-binary',
//         specialty: 'Couples Counselor',
//         language: 'French',
//         race: 'Black',
//         age: 28
//     }
// ];

// // Function to seed the database with therapists
// async function seedTherapists() {
//     try {
//         // Connect to MongoDB
//         await mongoose.connect('mongodb://localhost:27017/Petra', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         console.log('Connected to MongoDB');

//         // Clear existing therapists data
//         await Therapist.deleteMany({});

//         // Insert dummy therapists data
//         const insertedTherapists = await Therapist.insertMany(dummyTherapists);

//         console.log('Therapists seeded successfully:', insertedTherapists);
//     } catch (error) {
//         console.error('Error seeding therapists:', error);
//     } finally {
//         // Close the database connection
//         mongoose.disconnect();
//         console.log('Disconnected from MongoDB');
//     }
// }

// // Call the seed function to populate the database
// seedTherapists();
