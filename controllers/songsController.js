// DEPENDENCIES
const express = require("express");
const router = express.Router();
const { getAllSongs } = require("../queries/songs");

// INDEX
router.get("/", async (req, res) => {
  try {
    const allSongs = await getAllSongs();
    if (!allSongs) {
      res.status(500).json({ Error: "Server Error" });
    } else {
      res.status(200).json(allSongs);
    }
  } catch (e) {
    res.status(500).json({ Error: e });
  }
  //   res.json({ status: "ok" });
});

// EXPORT
module.exports = router;
