require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');


const {mongoose} = require('./db/mongoose');

// init app
const app = express();

 // set port
const port = process.env.PORT;

// treat all requests as json
app.use(bodyParser.json());


// start server
app.listen(port, () => {
	console.log(`Started at port ${port}`);
});


module.exports = { app };