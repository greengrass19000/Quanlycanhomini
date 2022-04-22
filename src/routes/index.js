const SearchController = require('../app/controllers/SearchController');
const SiteRouter = require('./site');
const SearchRouter = require('./search');
const HostRouter = require('./host');

function route(app) {
    app.use('/search', SearchRouter);
    app.use('/host', HostRouter);
    app.use('/', SiteRouter);
}
module.exports = route;