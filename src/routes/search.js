const express = require('express');
const router = express.Router();
const SearchController = require('../app/controllers/SearchController');

router.use('/', SearchController.search);

module.exports = router;