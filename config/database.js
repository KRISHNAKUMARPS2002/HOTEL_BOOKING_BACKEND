"use strict"; // Enable strict mode

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // Remove useNewUrlParser and useUnifiedTopology
      // These options are deprecated in MongoDB Node.js Driver version 4.0.0 and later
      // They are no longer needed and will be removed in the next major version
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
