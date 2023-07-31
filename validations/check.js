// CHECK IF USER INPUT A SONG TITLE

const checkTitle = (req, res, next) => {
  if (!req.body.title) {
    res.status(400).json({ Error: "Song Title is Required." });
  } else {
    next();
  }
};

// CHECK IF USER INPUT SONG ARTIST
const checkArtist = (req, res, next) => {
  if (!req.body.artist) {
    res.status(400).json({ Error: "Song Artist is Required." });
  } else {
    next();
  }
};
// CHECK IF USER INPUT ARTIST_NAME
const checkArtistName = (req, res, next) => {
  if (!req.body.artist_name) {
    res.status(400).json({ Error: "Artist Name is Required." });
  } else {
    next();
  }
};

// CHECK IF IS_FAVORITE IS A BOOLEAN
const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;

  if (typeof is_favorite !== "boolean") {
    res.status(400).json({ Error: "is_favorite Must True or False" });
  } else {
    next();
  }
};

module.exports = { checkTitle, checkArtist, checkArtistName, checkBoolean };
