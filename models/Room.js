const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  roomNumber: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
});

module.exports = mongoose.model("Room", RoomSchema);
