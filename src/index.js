const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const { reset } = require('nodemon');
const port = 3000;
const path = require('path');
const route = require('./routes');

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
app.set('views', path.join(__dirname, 'resources', 'views'));

/*Web routes */
route(app);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
});
