const { Services } = require('../models');

const findAll = async () => {
    const services = await Services.findAll();
    return { status: 200, data: services };
};

const findById = async (id) => {
    const service = await Services.findByPk(id);
    if (!service) return { status: 404, data: { message: 'Service not found' } };
    return { status: 200, data: service };
};

const createService = async (service) => {
    const newProduct = await Services.create(service);
    return { status: 201, data: newProduct };
};

const updateService = async (id, service) => {
    const [updated] = await Services.update({ ...service }, { where: { id } });
    if (!updated) return { status: 404, data: { message: 'Serviço não encontrado.' } };
    
    return { status: 200, data: { id, ...service } };
};

const deleteService = async (id) => {
    const deleted = await Services.destroy({ where: { id } });
    if (!deleted) return { status: 404, data: { message: 'Serviço não encontrado' } };
    return { status: 204, data: { message: 'Serviço removido' } };
};

module.exports = { findAll, findById, deleteService, createService, updateService };