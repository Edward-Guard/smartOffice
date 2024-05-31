const route = require('express').Router();
 const servicesController = require('../controller/servicesController');

route.post('/', servicesController.createService);

module.exports = route;