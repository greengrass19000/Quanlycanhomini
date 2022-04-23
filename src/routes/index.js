const SearchController = require('../app/controllers/SearchController');
const SiteRouter = require('./site');
const SearchRouter = require('./search');
const HostRouter = require('./host');
const RoomRouter = require('./room');

function route(app) {
    app.use('/search', SearchRouter);
    app.use('/room/detail', RoomRouter);
    app.use('/', SiteRouter);
    app.use('/host', HostRouter);
}
module.exports = route;