-- id, name, cohort
-- -- Delete the table students
-- DROP TABLE students CASCADE;
-- DROP TABLE pets CASCADE;
-- Recreate it

-- INTEGER, SERIAL, TEXT
-- DROP TABLE list_of_movies;
-- CREATE TABLE list_of_movies(id SERIAL PRIMARY KEY, title TEXT NOT NULL, release_year INTEGER NOT NULL);

-- DDL - Data Definition Laguage -- Schemas!

-- Defining the information or the database (Creation)


CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);



CREATE TABLE pets(
    id SERIAL PRIMARY KEY,
    name TEXT,
    breed TEXT,
    type TEXT,
    age INTEGER,
    -- student_id INTEGER
    student_id INTEGER REFERENCES students(id)
);