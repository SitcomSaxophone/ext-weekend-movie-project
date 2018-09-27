console.log ('server is up and running');

// requires
const express = require('express');
const app = express();

// globals
const PORT = process.env.PORT || 5000;

// uses
app.use(express.static('server/public'));




// spin up server
app.listen( PORT, () => {
    console.log('up and running on PORT 5000');
});