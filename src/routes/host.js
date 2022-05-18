const express = require('express');
const router = express.Router();
const HostController = require('../app/controllers/HostController');

router.post('/buildingAdded', HostController.afterAddedBuilding);
router.get('/buildingDeleted/:id', HostController.afterDeletedBuilding);
router.post('/', HostController.postHost);
router.post('/delete/:id', HostController.afterDeleteRoom);
router.get('/add/building/:id', HostController.addRoom);
router.get('/addbuilding/:id', HostController.addBuilding);
router.get('/add', HostController.add);
router.get('/edit', HostController.edit);
router.get('/delete/building/:id', HostController.deleteRoom);
router.get('/delete', HostController.delete);
router.get('/', HostController.host);


module.exports = router;