const CRUDService = require('../../services/CRUDServices');

class HostController {
    async host(req, res) {
        let data = await CRUDService.getHostRoom();
        return res.render('host', {
            roomsData: data,
        });
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

module.exports = new HostController;
