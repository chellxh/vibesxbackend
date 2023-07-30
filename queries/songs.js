// DEPENDENCIES
const db = require("../db/dbConfig");

// GET - ALL SONGS QUERY
const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (e) {
    return e;
  }
};
// GET - ONE SONG QUERY
const songById = async (id) => {
  try {
    const theSong = await db.any(`SELECT * FROM songs WHERE id = $1`, id);
    return theSong;
  } catch (e) {
    return e;
  }
};

// POST - NEW SONG QUERY
const addNewSong = async (data) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (title, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [data.title, data.artist, data.album, data.time, data.is_favorite]
    );
    return newSong;
  } catch (e) {
    return e;
  }
};

// DELETE - SONG BY ID QUERY
const deleteSongById = async (id) => {
  try {
    const deletedSong = await db.any(
      `DELETE FROM songs WHERE id = $1 RETURNING *`,
      id
    );
    return deletedSong;
  } catch (e) {
    return e;
  }
};

// UPDATE - SONG BY ID QUERY
const updatedSongById = async (id, song) => {
  try {
    const updatedSong = await db.any(
      `UPDATE songs SET title = $1, artist = $2, album = $3, time = $4, is_favorite = $5 WHERE id = $6 RETURNING *`,
      [song.title, song.artist, song.album, song.time, song.is_favorite, id]
    );
    return updatedSong;
  } catch (e) {
    return e;
  }
};
// EXPORT

module.exports = {
  getAllSongs,
  songById,
  addNewSong,
  deleteSongById,
  updatedSongById,
};
