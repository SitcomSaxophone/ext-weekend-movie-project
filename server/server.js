console.log('server is up and running');

// requires
const express = require('express');
const app = express();
const bodyParser = require('bodyParser');
const pg = require('pg');
const pool = require('./modules/pool.js');

// globals
const PORT = process.env.PORT || 5000;

// uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyparser.json());


app.get('/movies', function (req, res) {
    res.send(['movies']);
});

app.get('/genres', function (req, res) {
    res.send(['genres']);
});


// spin up server
app.listen(PORT, () => {
    console.log('up and running on PORT 5000');
});