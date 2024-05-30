const route = require('express').Router();
const Validate = require('../Middleware/ValidateStock');
const stockController = require('../controller/stockController');

const { ValidateStock, ValidId } = Validate;

route.get('/', stockController.getAllStocks);
route.get('/:id', stockController.getStockById);
route.post('/', ValidateStock, stockController.addNewProduct);
route.put('/:id', ValidateStock, ValidId, stockController.updateProduct);
route.delete('/:id', ValidId, stockController.deleteProduct);

module.exports = route;