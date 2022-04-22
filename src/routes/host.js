const express = require('express');
const router = express.Router();
const HostController = require('../app/controllers/HostController');

router.get('/', HostController.host);

module.exports = router;