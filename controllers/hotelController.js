const Hotel = require("../models/Hotel");

exports.createHotel = async (req, res) => {
  const { name, location, rating } = req.body;

  try {
    const hotel = new Hotel({ name, location, rating });
    await hotel.save();
    res.status(201).json(hotel);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).send("Hotel not found");
    res.status(200).json(hotel);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!hotel) return res.status(404).send("Hotel not found");
    res.status(200).json(hotel);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndRemove(req.params.id);
    if (!hotel) return res.status(404).send("Hotel not found");
    res.status(200).json({ msg: "Hotel removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
