console.log('server is up and running');

// server requirements
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const pool = require('./modules/pool.js');

// globals
const PORT = process.env.PORT || 5000;

// enables front to talk to server using express
app.use(express.static('server/public'));
// for postman testing
app.use(bodyParser.urlencoded({ extended: true }));
// enables server side requests (CRUD)
app.use(bodyParser.json());


// GET movies
app.get('/movies', (req, res) => {
    // Ask database for all movies
    pool.query(`SELECT * FROM "movies";`).then((results) => {
        //send back all movies
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error with server-side GET:', error);
        res.send(500);
    })
})

// GET genres 

// Show total number of movies next to each genre
app.get('/genre', (req, res) => { 
    // Ask data base for total number of movies next to each genre
    pool.query(`SELECT "genre", count("movies"."genre_id")
    FROM "genres"
    JOIN "movies"
    ON "genres"."id" = "movies"."genre_id"
    GROUP BY "genres"."genre";`).then((results) => {
            res.send(results.rows)
        }).catch((error) => {
            console.log('Error with server-side GET:', error);
            res.send(500);
        })
})

// POST
// Add a movie into the database(by title, release date, run time, image, genre)
app.post('/movies', (req, res) => {
    console.log('post successful');
    pool.query(`INSERT INTO "movies" ("title", "release_date", "run_time", "image", "genre_id")
    VALUES ($1,$2,$3,$4,$5);`, [
            req.body.title, req.body.release_date, req.body.run_time, req.body.image, req.body.genre_id]).then(() => {
                console.log('req.body is', req.body);
                res.sendStatus(201);
            }).catch((error) => {
                console.log('Error in server-side POST:', error);
                res.sendStatus(500);
            })
})

// DELETE a movie from the database 
app.delete('/:id'), (req, res) => { 
    let id = req.params.id; // params - used when editing/deleting

    pool.query(`DELETE FROM "listings" WHERE id = $1;`, [id])
    .then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in server-side POST:', error);
        res.sendStatus(500);
    })
}















// app.get('/movies', function (req, res) {
//     res.send(['movies']);
// });

// app.get('/genres', function (req, res) {
//     res.send(['genres']);
// });

// spin up server
app.listen(PORT, () => {
    console.log('up and running on PORT 5000');
});