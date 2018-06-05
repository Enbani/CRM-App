const express = require('express');

const {
    getClientCoverage,
    addCoverageContact
} = require('../controllers/coverageController.js');


const router = express.Router();

router.get('/', getClientCoverage);

router.post('/', addCoverageContact);

module.exports = router;

