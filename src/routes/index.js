const SiteRouter = require('./site');

function route(app) {
    app.use('/', SiteRouter);
}

module.exports = route;