const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/home', (req, res) => {
  return res.render('home');
})
router.get('/login', (req, res) => {
  return res.render('login');
})

router.post('/login', (req, res) => {
  return res.send(req.body)
})

router.post('/home', (req, res) => {
  return res.render('home');
})

router.post('/login', (req, res) => {
  return res.render('login');
})

module.exports = router;