const CRUDService = require('../../services/CRUDServices');

class SearchController {
    async search(req, res) {
        let data = await CRUDService.getAllRoom();
        console.log(data);
        return res.send("DCMMM");
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

module.exports = new SearchController;
