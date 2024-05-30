const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number },
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
});

module.exports = mongoose.model("Hotel", HotelSchema);
