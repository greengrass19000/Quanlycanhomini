const express = require('express');
const router = express.Router();
const InvoiceController = require('../app/controllers/InvoiceController');

router.get('/', InvoiceController.show);

module.exports = router;