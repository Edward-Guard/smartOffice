const stockService = require('../service/stockServices');

const getAllStocks = async (_req, res) => {
  const { status, data } = await stockService.findALLStock();
  res.status(status).json(data);
};

const getStockById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await stockService.findByIdStock(id);
  res.status(status).json(data);
};

const addNewProduct = async (req, res) => {
  const product = req.body;
  const { status, data } = await stockService.addNewProduct(product);
  res.status(status).json(data);
};  

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
   const { status, data } = await stockService.updateProduct(id, product);
  res.status(status).json(data);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
   const { status, data } = await stockService.deleteProduct(id);
  res.status(status).json(data);
};

module.exports = { getAllStocks, getStockById, addNewProduct, updateProduct, deleteProduct };