const CRUDService = require('../../services/CRUDServices');
const { Sequelize } = require('sequelize');
const { QueryTypes } = require('sequelize');
const sequelize = new Sequelize('canhomini', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
  });

class ContractController {
    async show(req, res) {
        let contract = await sequelize.query("SELECT * FROM contracts WHERE renterid = ?", {
            replacements: [req.query.id],
            type: QueryTypes.SELECT
           })
        let c = contract[0];
        console.log(c);
        res.render('contract', {
            contract: c,
            id: req.query.id,
            type: req.query.type
        });
    }      
    async create(req, res) {
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}

module.exports = new ContractController;
