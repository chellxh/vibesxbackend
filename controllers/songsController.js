// DEPENDENCIES
const express = require("express");
const router = express.Router({ mergeParams: true });

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
} = require("../validations/check");

// GET - INDEX
router.get("/", async (req, res) => {
  try {
    const allSongs = await getAllSongs(req.params.artistId);
    if (!allSongs) {
      return res.status(500).json({ Error: "Server Error" });
    } else {
      return res.json(allSongs);
    }
  } catch (e) {
    return res.status(500).json({ Error: e });
  }
  //   res.json({ status: "ok" });
});

// GET - BY ORDER
// router.get("/", async (req, res) => {
//   const query = req.query;
//   console.log(query);

//   if (query.length === 0) {
//     return res.status(404).json({ Error: "Cannot Make An Empty Query" });
//   } else {
//     const queriedSongs = await getSongByOrder(query);
//     console.log(queriedSongs);
//   }
// });

// GET - SONG BY ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const artistSongById = await songById(id);

    console.log(artistSongById);

    if (artistSongById.length === 0) {
      throw {
        status: 404,
        message: "Song Not Found",
      };
    } else {
      return res.json(artistSongById[0]);
    }
  } catch (e) {
    return res.status(e.status).json({ Error: e.message });
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
// GET - SONGS BY ARTIST
router.get("/:artistId/get-all-songs", async (res, req) => {
  const { artistId } = req.params;
  try {
    const artistsSongs = await songsByArtist(artistId);
    if (artistsSongs.length === 0) {
      return res.status(404).json({ Error: "Songs Not Found" });
    } else {
      return res.json(artistsSongs);
    }
  } catch (e) {
    return res.status(500).json({ Error: e });
  }
});
// EXPORT
module.exports = router;
