class SiteController {
    //GET home
    home(req, res) {
        res.render('home');
    }
    //GET login
    login(req, res) {
        res.render('login');
    }

    postlogin(req, res) {
        res.send(req.body);
    }
    
}

module.exports = new SiteController;
