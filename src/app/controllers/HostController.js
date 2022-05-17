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
    async edit(req, res) {
        let data = await CRUDService.getHostRoom(req.query);   
        return res.render('host', {
            roomsData: data,
            id: req.query.id,
            type: req.query.type
        });
    }  
    async delete(req, res) {
        let data = await CRUDService.getHostRoom(req.query);   
        return res.render('host', {
            roomsData: data,
            id: req.query.id,
            type: req.query.type
        });
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}

module.exports = new HostController;
