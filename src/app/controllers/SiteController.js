const db = require('../../models/index');
const CRUDServices = require('../../services/CRUDServices');
class SiteController{
    //GET home
    async home(req, res){
        res.render('home', req.query);
    }
    //GET login
    login(req, res) {
        res.render('login', req.query);
    }

    register(req, res) {
        res.render('register', req.query);
    }
    async postRegister(req, res) {
        let user = await CRUDServices.checkUser2(req.body.username);
        let idd = user[0];
        if(!req.body.username || !req.body.password || !req.body.firstName || !req.body.lastName || !req.body.birthdate || !req.body.accountType){
            res.redirect('/register?message=Thiếu thông tin!!');
        } else {
            if(!idd) {
                await CRUDServices.createNewUser(req.body);
                res.redirect('/register?ok=Đăng ký thành công!!');
            }
            else res.redirect('/register?message=Tài khoản đã tồn tại!!');
        }    
    }

    async postLogin(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        if(!username || !password) {
            return res.redirect('/login?message=Thiếu thông tin!!');
        }
        let id = await CRUDServices.checkUser(username, password);
        if(id.length == 0) {
            return res.redirect('/login?message=Nhập sai tài khoản/mật khẩu!!');
        }
        else {
            let idd = id[0].id;
            let type = id[0].accounttype;
            res.redirect('/home?id=' + idd + '&type=' + type);
        }
    }

    postHome(req, res) {      
        res.status(302).json({
            message : 'ok'
        })
    }
    
};

module.exports = new SiteController;
