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

    async postLogin(req, res, next) {
        let id = await CRUDServices.checkUser(req.body);
        if(!id) {
            res.send(id.body);
        }
        else {
            res.send('wrong info');
        }
    }
};

module.exports = new SiteController;
