const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const flightRoutes = require("./routes/flightRoutes");
const cors = require("cors")

dotenv.config(); // .env dosyasındaki bilgileri yükle
connectDB(); // Veritabanı bağlantısını başlat

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
  })
);
const PORT = process.env.PORT || 5000;

app.use(express.json()); // JSON verilerini alabilmek için

// Rotalar
app.use("/api", flightRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
