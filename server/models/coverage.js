const mongoose = require('mongoose');

const CoverageSchema = new mongoose.Schema({
    position: String,
    name: String,
    coverageStart: Date,
    coverageEnd: Date,
    mpid: String
});

const Coverage = mongoose.model('Coverage', CoverageSchema);

module.exports = { Coverage };