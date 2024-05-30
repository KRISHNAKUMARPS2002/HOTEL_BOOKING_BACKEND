const Booking = require("../models/Booking");
const Room = require("../models/Room");
const User = require("../models/User");

exports.createBooking = async (req, res) => {
  const { roomId, checkInDate, checkOutDate } = req.body;

  try {
    const room = await Room.findById(roomId);
    if (!room) return res.status(404).send("Room not found");

    const booking = new Booking({
      roomId,
      userId: req.user.id,
      checkInDate,
      checkOutDate,
      status: "booked",
    });

    await booking.save();

    room.bookings.push(booking.id);
    await room.save();

    res.status(201).json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id })
      .populate("roomId")
      .populate("userId");
    res.status(200).json(bookings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("roomId")
      .populate("userId");
    if (!booking) return res.status(404).send("Booking not found");
    res.status(200).json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!booking) return res.status(404).send("Booking not found");
    res.status(200).json(booking);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndRemove(req.params.id);
    if (!booking) return res.status(404).send("Booking not found");
    res.status(200).json({ msg: "Booking removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
