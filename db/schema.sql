DROP DATABASE IF EXISTS vibes_dev;
CREATE DATABASE vibes_dev;

\c vibes_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT, 
    time TEXT,
    is_favorite BOOLEAN
);

DROP TABLE IF EXISTS artists;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    song_id INTEGER REFERENCES songs (id) ON DELETE CASCADE
);

