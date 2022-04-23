const CRUDService = require('../../services/CRUDServices');
const { Sequelize } = require('sequelize');
const { QueryTypes } = require('sequelize');
const sequelize = new Sequelize('canhomini', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
  });

class RoomController {
    async show(req, res) {
        console.log(req.params.id);
        let RoomView = await sequelize.query("SELECT * FROM ROOMS WHERE id = ?", {
            replacements: [req.params.id],
            type: QueryTypes.SELECT
           })
        console.log(RoomView);
        res.render('roomView', {
            Room: RoomView,
        });
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

module.exports = new RoomController;
