const express = require('express');
const router = express.Router();
const ContractController = require('../app/controllers/ContractController');

router.get('/:id', ContractController.show);

module.exports = router;