const CRUDService = require('../../services/CRUDServices');

class SearchController {
    async search(req, res) {
        let data = await CRUDService.getAllRoom();
        return res.render('search', {
            roomsData: data,
            title: "TEST TITLE",
        });
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

module.exports = new SearchController;
