// DEPENDENCIES
const db = require("../db/dbConfig");

const { artistById } = require("./artists");

// GET - ALL SONGS BY ARTIST QUERY
const getAllSongs = async (artistId) => {
  try {
    const allSongs = await db.any(
      "SELECT * FROM songs WHERE artist_id = $1 ORDER BY id ASC",
      artistId
    );
    console.log(allSongs);
    return allSongs;
  } catch (e) {
    return e;
  }
};

// GET - ONE SONG QUERY
const songById = async (artistId, songId) => {
  try {
    console.log(artistId, songId);
    const song = await db.any(
      `SELECT artist_id, title, artist, album, time FROM artists JOIN songs ON artists.id = songs.artist_id WHERE artists.id = $1 AND songs.id = $2`,
      [artistId, songId]
    );
    return song;
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
  songById,
  songsByArtist,
  addNewSong,
  deleteSongById,
  updatedSongById,
};
