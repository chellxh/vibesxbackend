// DEPENDANCIES
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// CONTROLLERS
const songsController = require("./controllers/songsController");
const artistController = require("./controllers/artistController");

// CONFIGs
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// --- ROUTES ---
app.get("/", (req, res) => {
  res.send("🎶 Welcome to Vibes 🎶");
});

// SONGS ROUTES
app.use("/songs", songsController);

// ARTISTS ROUTE
app.use("/artists", artistController);

// 404 ROUTE
app.get("*", (req, res) => {
  res.status(404).json("Page Not Found");
});

// EXPORT
module.exports = app;
