// DEPENDENCIES
const express = require("express");
const router = express.Router({ mergeParams: true });

// CONTROLLERS
const songsController = require("./songsController");

// ROUTE FOR SONGS FROM ONE ARTIST
router.use("/:artistId/songs", songsController);

// QUERIES
const {
  getAllArtists,
  artistById,
  addNewArtist,
  deleteArtistById,
  updatedArtistById,
} = require("../queries/artists");

// VALIDATIONS
const { checkArtistName, checkBoolean } = require("../validations/check");

// GET - INDEX WITH QUERY
router.get("/", async (req, res) => {
  const allArtists = await getAllArtists();
  if (!allArtists) {
    return res.status(500).json({ Error: "Server Error" });
  } else {
    return res.status(200).json(allArtists);
  }
});

// GET - ARTIST BY ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const artist = await artistById(id);
  // console.log(artist)
  if (artist.length === 0) {
    return res.status(400).json({ Error: "Artist Not Found" });
  } else {
    return res.json(artist[0]);
  }
});

// POST - CREATE NEW ARTIST
router.post("/", checkArtistName, checkBoolean, async (req, res) => {
  const newArtist = await addNewArtist(req.body);
  return res.json(newArtist);
});

// DELETE - DELETE ARTIST BY ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedArtist = await deleteArtistById(id);

  if (deletedArtist.length === 0) {
    return res.status(404).json({ message: "Artist Not Found" });
  } else {
    return res.json(deletedArtist[0]);
  }
});

// PUT - UPDATE ARTIST BY ID
router.put("/:id", checkArtistName, checkBoolean, async (req, res) => {
  try {
    const { id } = req.params;
    const updatedArtist = await updatedArtistById(id, req.body);

    if (updatedArtist.length === 0) {
      return res.status(404).json({ Error: true, message: "Artist Not Found" });
    } else {
      return res.json(updatedArtist[0]);
    }
  } catch (e) {
    return res.status(500).json({ Error: "Server Error" });
  }
});

module.exports = router;
