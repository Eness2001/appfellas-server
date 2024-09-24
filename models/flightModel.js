const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  actualLandingTime: Date,
  estimatedLandingTime: Date,
  flightName: String,
  flightNumber: Number,
  route: {
    destinations: [String],
    eu: String,
    visa: Boolean,
  },
  scheduleDate: Date,
  scheduleDateTime: Date,
  terminal: Number,
  baggageClaim: {
    belts: [String],
  },
  isOperationalFlight: Boolean,
  publicFlightState: {
    flightStates: [String],
  },
  aircraftType: {
    iataMain: String,
    iataSub: String,
  },
  lastUpdatedAt: Date,
  externalId: String,
});

const Flight = mongoose.model("Flight", flightSchema);
module.exports = Flight;
