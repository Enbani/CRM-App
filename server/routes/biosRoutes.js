const express = require('express');
const {
    addClientInfo,
    getClientInfo,
    updateClientInfo,
    deleteClientInfo,
    addFlows,
    deleteFlows,
    updateFlows
} = require('../controllers/biosController');

const router = express.Router();


router.get('/', getClientInfo);

router.post('/', addClientInfo);

router.patch('/:mpid', updateClientInfo);

router.delete('/:mpid', deleteClientInfo);

router.patch('/:mpid/add-flows', addFlows);

router.patch('/:mpid/delete-flow', deleteFlows);

router.patch('/:mpid/update-flow', updateFlows);

module.exports = router;