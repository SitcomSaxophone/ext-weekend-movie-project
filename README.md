# ext-weekend-movie-project

In this project, I am created a movie database. 

There are two views:
1. The movie view
2. The genre view


Functionality includes --
On the Movie page, adding movies by:
- name, genre, image url, release date and run time
- delete existing movies
On the Genre page,:
- ability to show total number of movies next to each genre

Below are the queries I used to set up my tables in Postico:

CREATE TABLE "genres" (
"genre_id" SERIAL PRIMARY KEY,
"genre" VARCHAR (220) NOT NULL
);

SELECT * FROM "genres";

INSERT INTO "genres" ("genre")
VALUES ('Documentary'), ('Comedy'), ('Rom-Com'), ('Action'), ('Superhero'), ('Sci-Fi'), ('Holiday'), ('Classic');

CREATE TABLE "movies" (
"movie id" SERIAL PRIMARY KEY,
"title" VARCHAR (50) NOT NULL,
"release_date" DATE,
"run_time" VARCHAR,
"image" VARCHAR (80),
"genre_id" INT REFERENCES "genres"
);

SELECT * FROM "movies";

Examples of insertions into the database:
INSERT INTO "movies" ("title", "release_date", "run_time", "image", "genre_id")
VALUES ('Citizen Kane', '9-5-1941', '1h 59m', 'http://www.gstatic.com/tv/thumb/movieposters/1485/p1485_p_v8_aa.jpg', '8'),('Crazy Rich Asians', '8-15-2018', '2h 1m', 'http://media.pauline.org/Portals/media/xBlog/uploads/2018/8/28/Poster_Title_Crazy_Rich_Asians.jpg', '2';

UPDATE "movies"
SET "image" = 'citizen-kane.jpg'
WHERE "title" = 'Citizen Kane';

-- Show total number of movies next to each genre
SELECT "genre", count("movies"."genre_id")
FROM "genres"
JOIN "movies"
ON "genres"."id" = "movies"."genre_id"
GROUP BY "genres"."genre";

-- Delete a movie from the database
DELETE FROM "movies"
WHERE "id" = '2';

