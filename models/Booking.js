const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model("Booking", BookingSchema);
