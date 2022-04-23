const CRUDService = require('../../services/CRUDServices');

class SearchController {
    async search(req, res) {
        console.log(req.params);
        let data = await CRUDService.getAllRoom();
        return res.render('search', {
            roomsData: data,
        });
    }
    async searchDetail(req, res) {
        console.log(req.params);
        res.send(req.query);
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

module.exports = new SearchController;
