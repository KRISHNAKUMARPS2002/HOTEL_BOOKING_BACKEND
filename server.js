const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");

dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());

app.use("/api/users", require("./routes/users"));
app.use("/api/hotels", require("./routes/hotels"));
app.use("/api/rooms", require("./routes/rooms"));
app.use("/api/bookings", require("./routes/bookings"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
