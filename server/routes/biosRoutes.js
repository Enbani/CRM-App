const express = require('express');
const {
    addClientInfo,
    getClientInfo,
    updateClientInfo,
    deleteClientInfo
} = require('../controllers/biosController');

const router = express.Router();


router.get('/', getClientInfo);

router.post('/', addClientInfo);

router.patch('/:mpid', updateClientInfo);

router.delete('/:mpid', deleteClientInfo);


module.exports = router;