const express = require('express');

const {
    getClientContacts,
    addClientContact,
    updateClientContact,
    deleteClientContact
} = require('../controllers/clientController');

const router = express.Router();

router.get('/', getClientContacts);

router.post('/', addClientContact);

router.patch('/:id', updateClientContact);

router.delete('/:id', deleteClientContact);

module.exports = router;
