# ext-weekend-movie-project

In this project, I am creating a movie database. 
Functionality includes adding movies by:
- name, genre, image url, release date and run time
- remove movies
- delete existing movies
- ability to show total number of movies next to each genre

There will be two views:
1. Enables user to add a movie
2. Allows for managing genres

Below are the queries I used to set up my tables in Postico:

CREATE TABLE "genres" (
"genre_id" SERIAL PRIMARY KEY,
"genre" VARCHAR (50) NOT NULL
);

SELECT * FROM "genres";

INSERT INTO "genres" ("genre")
VALUES ('documentary'), ('comedy'), ('rom-com'), ('action'), ('super-hero'), ('sci-fi'), ('holiday'), ('classic');

CREATE TABLE "movies" (
"movie id" SERIAL PRIMARY KEY,
"title" VARCHAR (50) NOT NULL,
"release_date" DATE,
"run_time" VARCHAR,
"image" VARCHAR (80),
"genre_id" INT REFERENCES "genres"
);

SELECT * FROM "movies";

INSERT INTO "movies" ("title", "release_date", "run_time", "image", "genre_id")
VALUES ('Citizen Kane', '9-5-1941', '1h 59m', 'citizen-kane.jpg', '8');

INSERT INTO "movies" ("title", "release_date", "run_time", "image", "genre_id")
VALUES ('The Big Sick', '7-14-2017', '2h', 'the-big-sick.jpg', '3'), 
('Spider-Man', '5-3-2002', '2h 13m', 'spider-man.jpg', '5'),
('Avatar', '12-18-2009', '2h 42m', 'avatar.jpg', '4'),
('It''s a Wonderful Life', '12-25-1946', '2h 15m', 'wonderful-life.jpg', '7'),
('RBG', '5-4-2018', '1h 38m', 'rbg.jpg', '1'),
('The Matrix', '3-31-1999', '2h 30m', 'matrix.jpg', '6');

UPDATE "movies"
SET "image" = 'citizen-kane.jpg'
WHERE "title" = 'Citizen Kane';

INSERT INTO "movies" ("title", "release_date", "run_time", "image", "genre_id")
VALUES ('Crazy Rich Asians', '8-15-2018', '2h 1m', 'crazy-rich-asians.jpg', '2');

CREATE TABLE "movie_genre"(
	SELECT * FROM "movies"
	JOIN "genres" ON "genre"."id" = "title"."genre.id";

