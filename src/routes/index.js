const SearchController = require('../app/controllers/SearchController');
const SiteRouter = require('./site');
const SearchRouter = require('./search');
const HostRouter = require('./host');
const RoomRouter = require('./room');
const ContractRouter = require('./viewcontract');
const InvoiceRouter = require('./viewinvoice');

function route(app) {
    app.use('/search', SearchRouter);
    app.use('/room/detail', RoomRouter);
    app.use('/viewcontract', ContractRouter);
    app.use('/viewinvoice', InvoiceRouter);
    app.use('/', SiteRouter);
    app.use('/host', HostRouter);
}
module.exports = route;