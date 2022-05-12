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
        console.log("+++++++++++++++");
        console.log("+++++++++++++++");
        console.log(req.body);
        console.log("+++++++++++++++");
        console.log("+++++++++++++++");
        return res.render('host', {
        });
    }
    async add(req, res) {
        let data = await CRUDService.getHostBuilding(req.query);   
        return res.render('add', {
            buildingData: data,
        });
    }
    async addRoom(req, res) {
        let data = await CRUDService.addRoom(req.params);   
        return res.render('addRoom', {
            buildingData: data,
        });
    }    
    async edit(req, res) {
        let data = await CRUDService.getHostRoom(req.query);   
        return res.render('host', {
            roomsData: data,
        });
    }  
    async delete(req, res) {
        let data = await CRUDService.getHostRoom(req.query);   
        return res.render('host', {
            roomsData: data,
        });
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}

module.exports = new HostController;
