// DEPENDENCIES
const db = require("../db/dbConfig");

// ALL SONGS QUERY
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (e) {
    return e;
  }
};

// EXPORT

module.exports = {
  getAllSongs,
};
