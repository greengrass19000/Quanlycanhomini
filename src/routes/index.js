const SearchController = require('../app/controllers/SearchController');
const SiteRouter = require('./site');
const SearchRouter = require('./search');
const RoomRouter = require('./room');

function route(app) {
    app.use('/search', SearchRouter);
    app.use('/room/detail', RoomRouter);
    app.use('/', SiteRouter);
}
module.exports = route;