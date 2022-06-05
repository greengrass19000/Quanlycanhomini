const CRUDService = require('../../services/CRUDServices');
const { Sequelize } = require('sequelize');
const { QueryTypes } = require('sequelize');
const sequelize = new Sequelize('canhomini', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
  });

class InvoiceController {
    async show(req, res) {
        console.log(req.params.id);
        let invoice = await sequelize.query("SELECT * from invoices where roomid in (SELECT id from rooms where id = (SELECT roomid from contracts where renterid = ?))", {
            replacements: [req.query.id],
            type: QueryTypes.SELECT
           })
        res.render('invoice', {
            invoice : invoice[0],
            id: req.query.id,
            type: req.query.type
        });
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

module.exports = new InvoiceController;
