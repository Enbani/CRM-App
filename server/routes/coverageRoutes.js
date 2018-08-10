const express = require('express');

const {
    getClientCoverage,
    addCoverageContact,
    deleteCoverageContact,
    updateCoverageContact
} = require('../controllers/coverageController.js');


const router = express.Router();

router.get('/', getClientCoverage);

router.post('/', addCoverageContact);

router.delete('/:id', deleteCoverageContact);

router.patch('/:id', updateCoverageContact);

module.exports = router;

