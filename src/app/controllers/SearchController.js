const CRUDService = require('../../services/CRUDServices');

class SearchController {
    async search(req, res) {
        console.log(req.params);
        let data = await CRUDService.getAllRoom();
        return res.render('search', {
            roomsData: data,
            id: req.query.id,
            type: req.query.type
        });
    }
    async searchDetail(req, res) {
        let data = await CRUDService.getRoom(req.body.search);
        //console.log(req.body.search);
        return res.render('search', {
            roomsData: data,
            id: req.query.id,
            type: req.query.type
        });
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

module.exports = new SearchController;
