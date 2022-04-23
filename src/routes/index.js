const SearchController = require('../app/controllers/SearchController');
const SiteRouter = require('./site');
const SearchRouter = require('./search');
<<<<<<< HEAD
const HostRouter = require('./host');

function route(app) {
    app.use('/search', SearchRouter);
    app.use('/host', HostRouter);
=======
const RoomRouter = require('./room');

function route(app) {
    app.use('/search', SearchRouter);
    app.use('/room/detail', RoomRouter);
>>>>>>> dda72acf02a07639465c5548058b7eebe6cf2efd
    app.use('/', SiteRouter);
}
module.exports = route;