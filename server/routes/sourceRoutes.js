const express = require('express');
const { 
    getSourceInfo, 
    addSourceInfo, 
    updateSourceInfo 
    
} = require('../controllers/sourceController');

const router = express.Router();

router.post('/', addSourceInfo);
router.get('/:qvm', getSourceInfo);
router.patch('/', updateSourceInfo);

module.exports = router;

