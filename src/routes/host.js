const express = require('express');
const router = express.Router();
const HostController = require('../app/controllers/HostController');

router.post('/buildingAdded', HostController.afterAddedBuilding);
router.post('/invoiceAdded', HostController.afterAddedInvoice);
router.post('/contractAdded', HostController.afterAddedContract);
router.get('/invoiceDeleted/:id', HostController.afterDeletedInvoice);
router.get('/contractDeleted/:id', HostController.afterDeletedContract);
router.get('/buildingDeleted/:id', HostController.afterDeletedBuilding);
router.post('/', HostController.postHost);
router.post('/delete/:id', HostController.afterDeleteRoom);
router.get('/add/building/:id', HostController.addRoom);
router.get('/addbuilding/:id', HostController.addBuilding);
router.get('/add', HostController.add);
router.get('/edit', HostController.edit);
router.get('/delete/building/:id', HostController.deleteRoom);
router.get('/delete', HostController.delete);
router.get('/invoice/add/:id', HostController.addInvoice);
router.get('/contract/add/:id', HostController.addContract);
router.get('/invoice/:id', HostController.invoice);
router.get('/', HostController.host);


module.exports = router;