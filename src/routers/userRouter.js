const express = require('express');
const { register } = require('../controllers/usersController');
const route = express.Router();
const jwt = require('../helper/jwt');

route.post ('/regis', register);
route.post ('/auth', login); //req.body itu pake post 
route.get ('/keepLogin', readToken, keepLogin);

module.exports = route; 


