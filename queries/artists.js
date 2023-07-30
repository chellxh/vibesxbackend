// DEPENDENCIES
const db = require("../db/dbConfig");

const { songById } = require("./songs");

const getAllArtistsInSong = async (songId) => {
    try {
        const allArtists = await db.any(`SELECT * artists WHERE song_id = $1 ORDER BY id ASC`, songId);
        return allArtists;
    } catch (e) {
        return e;
    }
}