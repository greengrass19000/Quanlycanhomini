const express = require('express');
const router = express.Router();
const SiteController = require('../app/controllers/SiteController');

router.use('/login', SiteController.login);
router.use('/home', SiteController.home);

module.exports = router;