require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const {mongoose} = require('./db/mongoose');

// require routes
const coverage = require('./routes/coverageRoutes');
const clients = require('./routes/clientsRoutes');
const bios = require('./routes/biosRoutes');
const pages = require('./routes/pagesRoutes');


// init app
const app = express();

 // set port
const port = process.env.PORT;

// treat all requests as json
app.use(bodyParser.json());

// set view engine
app.set('view engine', 'ejs');

//set routes

app.use('/coverage', coverage);
app.use('/clients', clients);
app.use('/bios', bios);
app.use('/pages', pages);

// render pages

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});




// start server
app.listen(port, () => {
	console.log(`Started at port ${port}`);
});


module.exports = { app };