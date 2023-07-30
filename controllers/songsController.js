// DEPENDENCIES
const express = require("express");
const router = express.Router();

// QUERIES
const {
  getAllSongs,
  songById,
  addNewSong,
  deleteSongById,
  updatedSongById,
} = require("../queries/songs");

// VALIDATIONS
const {
  checkTitle,
  checkArtist,
  checkBoolean,
} = require("../validations/checkSongs");

// GET - INDEX
router.get("/", async (req, res) => {
  try {
    const allSongs = await getAllSongs();
    if (!allSongs) {
      return res.status(500).json({ Error: "Server Error" });
    } else {
      return res.status(200).json(allSongs);
    }
  } catch (e) {
    return res.status(500).json({ Error: e });
  }
  //   res.json({ status: "ok" });
});

// GET - SONG BY ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const thatSong = await songById(id);

  console.log(thatSong);

  if (thatSong.length === 0) {
    return res.status(400).json({ Error: "Song Not Found" });
  } else {
    return res.json(thatSong[0]);
  }
});

// POST - CREATE NEW SONG
router.post("/", checkTitle, checkArtist, checkBoolean, async (req, res) => {
  const newSong = await addNewSong(req.body);
  return res.json(newSong);
});

// DELETE - DELETE SONG BY ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSongById(id);

  if (deletedSong.length === 0) {
    return res.status(404).json({ message: "Song Not Found" });
  } else {
    return res.json(deletedSong[0]);
  }
});

// PUT - UPDATE SONG BY ID
router.put("/:id", checkTitle, checkArtist, checkBoolean, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSong = await updatedSongById(id, req.body);

    if (updatedSong.length === 0) {
      return res.status(404).json({ Error: true, message: "Song Not Found" });
    } else {
      return res.json(updatedSong[0]);
    }
  } catch (e) {
    return res.status(500).json({ Error: "Server Error" });
  }
});

// EXPORT
module.exports = router;
