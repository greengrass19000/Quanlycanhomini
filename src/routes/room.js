const express = require('express');
const router = express.Router();
const RoomController = require('../app/controllers/RoomController');

router.get('/:id', RoomController.show);

module.exports = router;