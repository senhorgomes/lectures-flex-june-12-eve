DROP TABLE albums CASCADE;
DROP TABLE songs CASCADE;
CREATE TABLE albums (
    id SERIAL PRIMARY KEY NOT NULL,
    album_name VARCHAR(255) NOT NULL,
    artist_name VARCHAR(255) NOT NULL,
    release_date DATE
);
CREATE TABLE songs (
    id SERIAL PRIMARY KEY NOT NULL,
    album_id INTEGER REFERENCES albums(id),
    track_number INTEGER NOT NULL,
    song_name VARCHAR(255) NOT NULL,
    rating INTEGER NOT NULL
);