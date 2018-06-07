require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');


const {mongoose} = require('./db/mongoose');

// require routes
const coverage = require('./routes/coverageRoutes');
const clients = require('./routes/clientsRoutes');

// init app
const app = express();

 // set port
const port = process.env.PORT;

// treat all requests as json
app.use(bodyParser.json());

//set routes

app.use('/coverage', coverage);
app.use('/clients', clients)


// start server
app.listen(port, () => {
	console.log(`Started at port ${port}`);
});


module.exports = { app };