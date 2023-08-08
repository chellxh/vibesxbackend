DROP DATABASE IF EXISTS vibes_dev;
CREATE DATABASE vibes_dev;

\c vibes_dev;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    artist_name TEXT NOT NULL, 
    genre TEXT NOT NULL, 
    is_favorite BOOLEAN
);


DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT DEFAULT 'N/A', 
    time TEXT,
    is_favorite BOOLEAN,
    artist_id INT REFERENCES artists (id)
 ON DELETE CASCADE
);
