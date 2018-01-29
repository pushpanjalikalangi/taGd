var express = require('express');
var router = express.Router();
var users = require('./users');
var middleware = require('../middlewares/middleware');

module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.send('welcome to taGd');
  });
  app.get('/roles', users.roles);
  app.post('/logIn', users.logIn);
  app.post('/signUp', users.signUp);
};
