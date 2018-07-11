const express = require('express');

const {
    addFlow,
    updateFlow,
    deleteFlow,
    getFlows
} = require('../controllers/flowController');

const router = express.Router();

router.post('/', addFlow);
router.patch('/:flowType', updateFlow);
router.delete('/:flowType', deleteFlow);
router.get('/', getFlows);

module.exports = router;

