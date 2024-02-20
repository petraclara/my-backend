const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dbUrl = process.env.mongoLocal;
const dbName = process.env.DBNAME;

const connectToMongo = async () => {
  try {
    const connection = await mongoose.connect(dbUrl, { dbName: dbName });
    if (connection) {
      console.log("Connection is connected");
    } else {
      console.log("Not yet connected");
    }
  } catch (err) {
    console.error(`Error is ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectToMongo;
