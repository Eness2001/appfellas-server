const axios = require("axios");
const Flight = require("../models/flightModel");
require("dotenv").config();

const getFlights = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.schiphol.nl/public-flights/flights",
      {
        headers: {
          app_id: process.env.APP_ID,
          app_key: process.env.APP_KEY,
          ResourceVersion: "v4",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Uçuş bilgileri getirilemedi" });
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
};

const getFlightById = async (req, res) => {
  const { id } = req.params; // Uçuş ID'sini al
  try {
    const response = await axios.get(
      `https://api.schiphol.nl/public-flights/flights/${id}`, // Uçuş ID'sine göre API çağrısı
      {
        headers: {
          app_id: process.env.APP_ID,
          app_key: process.env.APP_KEY,
          ResourceVersion: "v4",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Uçuş bilgisi getirilemedi" });
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
};

// Uçuşu MongoDB'ye kaydet
const saveFlight = async (req, res) => {
  try {
    const flightData = req.body; // İstemciden gelen veriler

    // Dış ID'yi ayıklayıp flightData'ya ekle
    if (flightData.id) {
      flightData.externalId = flightData.id; // Dış ID'yi externalId olarak ekle
    }
    const flight = new Flight(flightData); // Model üzerinden yeni bir uçuş oluştur

    await flight.save(); // Uçuşu kaydet
    res.status(201).send(flight); // Başarılı yanıt
  } catch (error) {
    res.status(400).send({ error: error.message }); // Hata durumunda yanıt
  }
};

// Kullanıcının uçuşlarını getir
const getUserFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ error: "Uçuşlar getirilemedi" });
  }
};

module.exports = {
  getFlights,
  getUserFlights,
  saveFlight,
  getFlightById,
};
