/* eslint-disable complexity */
const ValidateStock = (req, res, next) => {
    const { nome, tipo, marca, quantidade, preco } = req.body;
    if (!nome || !tipo || !marca || !quantidade || !preco) {
        return res.status(400).json({ message: 'Campo ausente' });
    }
    next();
};

const ValidId = (req, res, next) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'Id ausente' });
    next();
};

module.exports = { ValidateStock, ValidId }; 