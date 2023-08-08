// DEPENDENCIES
const db = require("../db/dbConfig");

// GET - ALL ARTIST QUERY
const getAllArtists = async () => {
  try {
    const allArtists = await db.any(`SELECT * FROM artists`);
    return allArtists;
  } catch (e) {
    return e;
  }
};

// ORDER QUERIES
const getArtistsByOrder = async (artists) => {
  if (artists.order === "asc") {
    const artistsOrderAsc = await db.any(
      `SELECT * FROM artists ORDER BY artist_name ASC`
    );
    return artistsOrderAsc;
  } else if (artists.order === "desc") {
    const artistsOrderDesc = await db.any(
      `SELECT * FROM artists ORDER BY artist_name DESC`
    );
    return artistsOrderDesc;
  } else if (artists.is_favorite === "true") {
    const artistsFavoriteTrue = await db.any(
      `SELECT * FROM artists WHERE is_favorite IS TRUE`
    );
    return artistsFavoriteTrue;
  } else if (artists.is_favorite === "false") {
    const artistsFavoriteFalse = await db.any(
      `SELECT * FROM artists WHERE is_favorite IS FALSE`
    );
    return artistsFavoriteFalse;
  }
};

// GET - ARTIST BY ID QUERY
const artistById = async (id) => {
  try {
    const artist = await db.any(`SELECT * FROM artists WHERE id = $1`, id);
    return artist;
  } catch (e) {
    return e;
  }
};

// POST - NEW ARTIST QUERY
const addNewArtist = async (artist) => {
  try {
    const newArtist = await db.one(
      "INSERT INTO artists (artist_name, genre, is_favorite) VALUES ($1, $2, $3) RETURNING *",
      [artist.artist_name, artist.genre, artist.is_favorite]
    );
    return newArtist;
  } catch (e) {
    return e;
  }
};

// DELETE - ARTIST BY ID QUERY
const deleteArtistById = async (id) => {
  try {
    const deletedArtist = await db.any(
      `DELETE FROM artists WHERE id = $1 RETURNING *`,
      id
    );
    return deletedArtist;
  } catch (e) {
    return e;
  }
};

// UPDATE - ARTIST BY ID QUERY
const updatedArtistById = async (id, artist) => {
  try {
    const updatedArtist = await db.any(
      `UPDATE artists SET artist_name = $1, genre = $2, is_favorite = $3 WHERE id = $4 RETURNING *`,
      [artist.artist_name, artist.genre, artist.is_favorite, id]
    );
    return updatedArtist;
  } catch (e) {
    return e;
  }
};

// EXPORTS

module.exports = {
  getAllArtists,
  artistById,
  addNewArtist,
  deleteArtistById,
  updatedArtistById,
  getArtistsByOrder,
};
