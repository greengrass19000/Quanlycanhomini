const CRUDService = require('../../services/CRUDServices');

class SearchController {
    async search(req, res) {
        let data = await CRUDService.getAllRoom();
        return res.render('search', {
            roomsData: data,
        });
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

module.exports = new SearchController;
