const express = require('express');

const {
    getClientCoverage,
    addCoverageContact,
    updateCoverageContact,
    deleteCoverageContact
} = require('../controllers/coverageController.js');


const router = express.Router();

router.get('/', getClientCoverage);

router.post('/', addCoverageContact);

router.patch('/:id', updateCoverageContact);

router.delete('/:id', deleteCoverageContact);

module.exports = router;

