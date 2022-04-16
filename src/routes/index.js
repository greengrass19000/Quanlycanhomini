const SearchController = require('../app/controllers/SearchController');
const SiteRouter = require('./site');
const SearchRouter = require('./search');

function route(app) {
    app.use('/search', SearchRouter);
    app.use('/', SiteRouter);
}
module.exports = route;