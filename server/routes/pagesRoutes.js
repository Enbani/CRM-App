const express = require('express');
const { renderMpidPage, renderIndexPage } = require('../controllers/pagesController');

const router = express.Router();

router.get('/', renderIndexPage);
router.get('/:mpid', renderMpidPage);

module.exports = router;