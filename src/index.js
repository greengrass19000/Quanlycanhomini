const express = require('express');
const app = express();
var router = express.Router();
const handlebars = require('express-handlebars');
const port = 3000;
const path = require('path');

/*Use static file*/
app.use(express.static(path.join(__dirname, 'public')));

/*template engine */
app.engine('handlebars', handlebars.engine({
  extname: 'handlebars'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources\\views'));

/* GET home page. */
console.log(path.join(__dirname, 'resources\\views'));
app.get('/', (req, res) => {
  return res.render('home');
})
app.get('/login', (req, res) => {
  return res.render('login');
})

app.post('/home', (req, res) => {
  return res.render('home');
  //return res.send(req);
})

app.listen(port, () => console.log('Example app listening  at http:://localhost:${port}'))
