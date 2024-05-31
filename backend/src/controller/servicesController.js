const servicesServ = require('../service/servicesServices');

const getAll = async (_req, res) => {
  const { status, data } = await servicesServ.findAll();
  res.status(status).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await servicesServ.findById(id);
  res.status(status).json(data);
};

const createService = async (req, res) => {
  const service = req.body;
   const { status, data } = await servicesServ.createService(service);
  res.status(status).json(data);
};  

const updateService = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
   const { status, data } = await servicesServ.updateService(id, product);
  res.status(status).json(data);
};

const deleteService = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await servicesServ.deleteService(id);
  res.status(status).json(data);
};

module.exports = { getAll, getById, deleteService, createService, updateService };