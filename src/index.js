const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const { reset } = require('nodemon');
const port = 3000;
const path = require('path');
const webRouters = require('./resources/routes/routes');

/*Use static file*/
app.use(express.static(path.join(__dirname, 'public')));

/*Middleware*/
app.use(express.urlencoded());
app.use(express.json());

/*template engine */
app.engine('handlebars', handlebars.engine({
  extname: 'handlebars'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources\\views'));

/*Web routes */
app.use(webRouters);

app.listen(port, () => console.log('Example app listening  at http:://localhost:${port}'))
