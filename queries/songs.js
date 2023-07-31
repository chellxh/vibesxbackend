// DEPENDENCIES
const db = require("../db/dbConfig");

const { artistById } = require("./artists");

// GET - ALL SONGS QUERY
const getAllSongs = async (artistId) => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (e) {
    return e;
  }
};

// ORDER QUERIES
const getSongByOrder = async (songs) => {
  if (songs.order === "asc") {
    const songsOrderAsc = await db.any(
      `SELECT * FROM songs ORDER BY title ASC`
    );
    return songsOrderAsc;
  } else if (songs.order === "desc") {
    const songsOrderDesc = await db.any(
      `SELECT * FROM songs ORDER BY title DESC`
    );
    return songsOrderDesc;
  } else if (songs.is_favorite === "true") {
    const songsFavoriteTrue = await db.any(
      `SELECT * FROM songs WHERE is_favorite IS TRUE`
    );
    return songsFavoriteTrue;
  } else if (songs.is_favorite === "false") {
    const songsFavoriteFalse = await db.any(
      `SELECT * FROM songs WHERE is_favorite IS FALSE`
    );
    return songsFavoriteFalse;
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

// GET - SONG BY ARTIST ID
const songsByArtist = async (artistId, songId) => {
  try {
    const artistSongs = await db.any(
      `SELECT artist_ID, title, album, time, is_favorite FROM artists JOIN SONGS ON artists.id = songs.artist_id WHERE artists.id = $1 AND songs.id = $2`,
      [artistId, songId]
    );
    return artistSongs;
  } catch (e) {
    return e;
  }
};

// const getAllSongsByArtistId = async (artistId) => {
//   try {
//     const allSongsByArtist = await db.any(
//       "SELECT * FROM songs WHERE artist_id = $1 ORDER BY ASC",
//       artistId
//     );
//     return allSongsByArtist;
//   } catch (e) {
//     return e;
//   }
// };

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

// EXPORTS

module.exports = {
  getAllSongs,
  // getAllSongsByArtistId,
  songById,
  songsByArtist,
  addNewSong,
  deleteSongById,
  updatedSongById,
  getSongByOrder,
};
