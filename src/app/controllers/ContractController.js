const CRUDService = require('../../services/CRUDServices');
const { Sequelize } = require('sequelize');
const { QueryTypes } = require('sequelize');
const sequelize = new Sequelize('canhomini', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
  });

class ContractController {
    async show(req, res) {
        console.log(req.params.id);
        let contract = await sequelize.query("SELECT * FROM contracts WHERE renterid = ?", {
            replacements: [req.query.id],
            type: QueryTypes.SELECT
           })
        res.render('contract', {
            contract,
            id: req.query.id,
            type: req.query.type
        });
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

module.exports = new ContractController;
