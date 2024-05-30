const express = require("express");
const router = express.Router();
const { auth, admin } = require("../middleware/auth");
const {
  addRoom,
  getRooms,
  getRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomController");

router.post("/:hotelId/rooms", auth, admin, addRoom);
router.get("/", getRooms);
router.get("/:id", getRoom);
router.put("/:id", auth, admin, updateRoom);
router.delete("/:id", auth, admin, deleteRoom);

module.exports = router;
