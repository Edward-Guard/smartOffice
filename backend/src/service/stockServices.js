const { Stock } = require('../models');

const findALLStock = async () => {
    const stock = await Stock.findAll();
    return { status: 200, data: stock };
};

const findByIdStock = async (id) => {
    const stock = await Stock.findByPk(id);
    if (!stock) return { status: 404, data: { message: 'Product not found' } };
    return { status: 200, data: stock };
};

const addNewProduct = async (product) => {
    const newProduct = await Stock.create(product);
    return { status: 201, data: newProduct };
};

const updateProduct = async (id, product) => {
    const { nome, marca, quantidade, preco } = product;
    const [updated] = await Stock.update({ ...product }, { where: { id } });
    if (!updated) return { status: 404, data: { message: 'Product not found' } };
    
    return { status: 200, data: { id, nome, marca, quantidade, preco } };
};

const deleteProduct = async (id) => {
    const deleted = await Stock.destroy({ where: { id } });
    if (!deleted) return { status: 404, data: { message: 'Product not found' } };
    return { status: 204, data: { message: 'Product deleted' } };
};

module.exports = { findALLStock, findByIdStock, addNewProduct, updateProduct, deleteProduct };