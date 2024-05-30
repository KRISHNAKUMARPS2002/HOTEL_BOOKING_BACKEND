const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const {
  createBooking,
  getBookings,
  getBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

router.post("/:roomId/book", auth, createBooking);
router.get("/", auth, getBookings);
router.get("/:id", auth, getBooking);
router.put("/:id", auth, updateBooking);
router.delete("/:id", auth, deleteBooking);

module.exports = router;
