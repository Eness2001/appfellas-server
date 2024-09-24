const express = require("express");
const router = express.Router();
const {
  getFlights,
  getUserFlights,
  saveFlight,
  getFlightById,
} = require("../controllers/flightController");

// Uçuşları getir
router.get("/flights", getFlights);
router.get("/flights/:id", getFlightById);

// Uçuş kaydet
router.post("/flights", saveFlight);

// Kullanıcının uçuşlarını getir
router.get("/user-flights", getUserFlights);

module.exports = router;
