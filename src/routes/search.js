const express = require('express');
const router = express.Router();
const SearchController = require('../app/controllers/SearchController');

router.post('/', SearchController.searchDetail);
router.get('/', SearchController.search);

module.exports = router;