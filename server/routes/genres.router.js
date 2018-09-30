let express = require('express');
let router = express.Router();
let pool = require('../modules/pool');

// GET genres 
// Show total number of movies next to each genre
router.get('/', (req, res) => {
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
});

router.post('/', (req, res) => {
    pool.query(`INSERT INTO "genres" ("genre")
    VALUES ($1);`, [req.body.genre])
        .then((results) => {
            res.send(results.rows)
        }).catch((error) => {
            console.log('Error with server-side GET:', error);
            res.send(500);
        })
});

router.get('/all', (req,res) => {
    pool.query(`SELECT * FROM "genres";`)
    .then((results) => {
        res.send(results.rows)
    }).catch((error) => {
        res.send(500);
    })
});


module.exports = router;