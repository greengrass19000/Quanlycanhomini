const express = require('express');
const router = express.Router();
const SiteController = require('../app/controllers/SiteController');

router.get('/login', SiteController.login);
router.get('/home', SiteController.home);

module.exports = router;