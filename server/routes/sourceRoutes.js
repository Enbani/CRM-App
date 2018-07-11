const express = require('express');
const { 
    getSourceInfo, 
    addSourceInfo, 
    updateSourceInfo 
    
} = require('../controllers/sourceController');

const router = express.Router();

router.post('/', addSourceInfo);
router.get('/:clientMnemonic', getSourceInfo);
router.patch('/:clientMnemonic', updateSourceInfo);

module.exports = router;

