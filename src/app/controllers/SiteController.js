const db = require('../../models/index');
const CRUDServices = require('../../services/CRUDServices');
const userService = require('../../services/userService');
class SiteController{
    //GET home
    async home(req, res){
        res.render('home', req.query);
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

    async postLogin(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        if(!username || !password) {
            res.status(500).json({
                message : 'lack of information'
            })
        }
        let id = await CRUDServices.checkUser(username, password);
        if(id.length == 0) {
            res.status(500).json({
                message : 'wrong username/password'
            })  
        }
        else {
            let idd = id[0].id;
            let type = id[0].accounttype;
            res.redirect('/home?id=' + idd + '&type=' + type);
            //userService.sendHome(idd, type);
        }
    }

    postHome(req, res) {      
        res.status(302).json({
            message : 'ok'
        })
    }
    
};

module.exports = new SiteController;
