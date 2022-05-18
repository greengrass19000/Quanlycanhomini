const express = require('express');
const router = express.Router();
const SiteController = require('../app/controllers/SiteController');

router.get('/login', SiteController.login);
router.get('/register', SiteController.register);
router.post('/post-register', SiteController.postRegister);
router.post('/login', SiteController.postLogin);
router.get('/home', SiteController.home);
router.post('/home', SiteController.postHome);
module.exports = router;