const route = require('express').Router();
 const { ValidId } = require('../Middleware/ValidateStock');
 const servicesController = require('../controller/servicesController');
 const Validate = require('../Middleware/ValidateService');

 const { ValidateClient, ValidateVehicle, ValidateService } = Validate;
const listValidate = [ValidateClient, ValidateVehicle, ValidateService];

route.get('/', servicesController.getAll);
route.get('/:id', ValidId, servicesController.getById);
route.post('/', listValidate, servicesController.createService);
route.put('/:id', listValidate, ValidId, servicesController.updateService);
route.delete('/:id', ValidId, servicesController.deleteService);

module.exports = route;