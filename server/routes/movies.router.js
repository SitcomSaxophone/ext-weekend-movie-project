let express = require('express');
let router = express.Router();
let pool = require('../modules/pool');


// GET movies
router.get('/', (req, res) => {
    console.log('getting movies');
    // Ask database for all movies
    pool.query(`SELECT * FROM "movies";`).then((results) => {
        //send back all movies
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error with server-side GET:', error);
        res.send(500);
    })
});

// POST
// Add a movie into the database(by title, release date, run time, image, genre)
router.post('/', (req, res) => {
    console.log('post successful');
    pool.query(`INSERT INTO "movies" ("title", "release_date", "run_time", "image", "genre_id")
    VALUES ($1,$2,$3,$4,$5);`, [req.body.title, req.body.release_date, req.body.run_time, req.body.image, req.body.genre_id])
        .then(() => {
            console.log('req.body is', req.body);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error in server-side POST:', error);
            res.sendStatus(500);
        })
});

// DELETE a movie from the database 
router.delete('/:id', (req, res) => {

    let id = req.params.id; // params - used when editing/deleting
    console.log('attempting to delete with id =' + id  );
    pool.query(`DELETE FROM "movies" WHERE id = $1;`, [id])
        .then((results) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error in server-side POST:', error);
            res.sendStatus(500);
        })
});




module.exports = router;