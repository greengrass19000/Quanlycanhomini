const CRUDService = require('../../services/CRUDServices');

class HostController {
    async host(req, res) {
        let data = await CRUDService.getHostRoom(req.query);   
        return res.render('host', {
            roomsData: data,
            id: req.query.id,
            type: req.query.type
        });
    }
    async postHost(req, res) {
        let data = await CRUDService.getHostRoomAfterAdd(req.body);
        return res.render('host', {
            roomsData: data,
            id: req.query.id,
            type: req.query.type
        });
    }
    async add(req, res) {
        let data = await CRUDService.getHostBuilding(req.query);   
        return res.render('add', {
            buildingData: data,
            id: req.query.id,
            type: req.query.type
        });
    }
    async addRoom(req, res) {
        let data = await CRUDService.addRoom(req.params);   
        return res.render('addRoom', {
            buildingData: data,
            id: req.query.id,
            type: req.query.type
        });
    }
    async addBuilding(req, res) {
        let data = await CRUDService.addBuilding(req.params);
  
        return res.render('addBuilding', {
            buildingData: data,
            id: req.query.id,
            type: req.query.type
        });
    }
    async afterAddedBuilding(req, res) {
        let data = await CRUDService.afterAddedBuilding(req.body);   
        return res.render('add', {
            buildingData: data,
            id: req.query.id,
            type: req.query.type
        });
    }       
    async edit(req, res) {
        let data = await CRUDService.getHostRoom(req.query);   
        return res.render('host', {
            roomsData: data,
            id: req.query.id,
            type: req.query.type
        });
    }  
    async delete(req, res) {
        let data = await CRUDService.getHostBuilding(req.query); 
        return res.render('delete', {
            buildingData: data,
            id: req.query.id,
            type: req.query.type
        });
    }   
    async deleteRoom(req, res) {
        let data = await CRUDService.deleteRoom(req.params);
        return res.render('deleteRoom', {
            roomData: data,
            id: req.query.id,
            type: req.query.type
        });
    }
    async afterDeleteRoom(req, res) {
        let data = await CRUDService.afterDeleteRoom(req.params);    
        return res.render('delete', {
            buildingData: data,
            id: req.query.id,
            type: req.query.type
        });
    }
    async afterDeletedBuilding(req, res) {
        let data = await CRUDService.afterDeletedBuilding(req.params);
        return res.render('delete', {
            buildingData: data,
            id: req.query.id,
            type: req.query.type
        });
    }
    
    async invoice(req, res) {
        let data = await CRUDService.getRoomInvoice(req.params); 
        let room = await CRUDService.findRoom(req.params);
        return res.render('roomInvoice', {
            roomID: room,
            invoiceData: data,
            id: req.query.id,
            type: req.query.type
        });
    }
    async addInvoice(req, res) {
        let room = await CRUDService.findRoom(req.params);
        return res.render('addInvoice', {
            id: req.query.id,
            invoiceData: room,
            type: req.query.type
        });
    }
    async afterAddedInvoice(req, res) {
        let data = await CRUDService.afterAddedInvoice(req.body);
        return res.render('host', {
            roomsData: data,
            id: req.query.id,
            type: req.query.type
        });
    }
    async afterDeletedInvoice(req, res) {
        let data = await CRUDService.afterDeletedInvoice(req.params);
        return res.render('host', {
            roomsData: data,
            id: req.query.id,
            type: req.query.type
        });
    }  
}

module.exports = new HostController;
