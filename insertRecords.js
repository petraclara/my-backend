// // // insertRecords.js

// // const mongoose = require('mongoose');
// // const Preferences = require('./preferencesSchema');

// // // Connect to MongoDB
// // mongoose.connect('mongodb://localhost:27017/your_database_name', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //     // useCreateIndex: true
// // }).then(() => {
// //     console.log('Connected to MongoDB');
// // }).catch(err => {
// //     console.error('Error connecting to MongoDB:', err);
// // });

// // // Define records to be inserted
// // const records = [
// //     { name: 'male', title: 'gender' },
// //     { name: 'female', title: 'gender' },
// //     { name: 'doctor', title: 'specialty' },
// //     { name: 'engineer', title: 'specialty' },
// //     { name: 'straight', title: 'genderAffiliation' },
// //     { name: 'lesbian', title: 'genderAffiliation' },
// //     { name: 'bisexual', title: 'genderAffiliation' },
// //     { name: 'swahili', title: 'language' },
// //     { name: 'english', title: 'language' },
// //     { name: 'african', title: 'race' },
// //     { name: 'white', title: 'race' },
// //     { name: '18-25', title: 'ageRange' },
// //     { name: '26-30', title: 'ageRange' },
// //     // Add more records as needed
// // ];

// // // Insert records into the Preferences collection
// // Preferences.insertMany(records)
// //     .then(docs => {
// //         console.log('Records inserted successfully:', docs);
// //     })
// //     .catch(err => {
// //         console.error('Error inserting records:', err);
// //     });

// const mongoose = require('mongoose');
// const Preferences = require('./preferencesSchema');

// // Define records to be inserted
// const records = [
//     { name: 'male', title: 'gender' },
//     { name: 'female', title: 'gender' },
//     { name: 'doctor', title: 'specialty' },
//     { name: 'engineer', title: 'specialty' },
//     { name: 'straight', title: 'genderAffiliation' },
//     { name: 'lesbian', title: 'genderAffiliation' },
//     { name: 'bisexual', title: 'genderAffiliation' },
//     { name: 'swahili', title: 'language' },
//     { name: 'english', title: 'language' },
//     { name: 'african', title: 'race' },
//     { name: 'white', title: 'race' },
//     { name: '18-25', title: 'ageRange' },
//     { name: '26-30', title: 'ageRange' },
//     // Add more records as needed
// ];

// // Insert records into the Preferences collection
// Preferences.insertMany(records)
//     .then(docs => {
//         console.log('Records inserted successfully:', docs);
//     })
//     .catch(err => {
//         console.error('Error inserting records:', err);
//     });

