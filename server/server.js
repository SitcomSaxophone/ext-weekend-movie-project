console.log('server is up and running');

// server requirements
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pg = require('pg');
const pool = require('./modules/pool.js');

const movieRouter = require('./routes/movies.router');
const genreRouter = require('./routes/genres.router');

// globals
const PORT = process.env.PORT || 5000;

// enables front to talk to server using express
app.use(express.static('server/public'));
// for postman testing
app.use(bodyParser.urlencoded({ extended: true }));
// enables server side requests (CRUD)
app.use(bodyParser.json());

app.use('/movies', movieRouter);
app.use('/genres', genreRouter);




// spin up server
app.listen(PORT, () => {
    console.log('up and running on PORT 5000');
});