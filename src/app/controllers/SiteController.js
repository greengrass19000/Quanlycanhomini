const db = require('../../models/index');
const CRUDServices = require('../../services/CRUDServices');

class SiteController{
    //GET home
    async home(req, res){
        res.render('home');
    }
    //GET login
    login(req, res) {
        res.render('login');
    }

    register(req, res) {
        res.render('register');
    }
    async postRegister(req, res) {
        await CRUDServices.createNewUser(req.body);
        
    }
};

module.exports = new SiteController;
