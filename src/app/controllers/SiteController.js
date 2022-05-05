const db = require('../../models/index');
const CRUDServices = require('../../services/CRUDServices');
const userService = require('../../services/userService');
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
        let username = req.body.username;
        let password = req.body.password;
        if(!username || !password) {
            return res.status(500).json({
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
            return await userService.sendHome(id[0]);
            res.status(200).json({
                message : 'OK'
            })
    }
    }

    postHome(req, res) {
        res.send("hello");
    }
    
};

module.exports = new SiteController;
