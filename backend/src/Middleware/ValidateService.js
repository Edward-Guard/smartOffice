const ValidateClient = (req, res, next) => {
    const { cliente } = req.body;
    if (!cliente) return res.status(400).json({ message: 'Campo cliente ausente ou não preenchido' });
    if (!cliente.nome) return res.status(400).json({ message: 'Nome cliente ausente' });
    if (!cliente.Id) return res.status(400).json({ message: 'ID cliente ausente' });

    next();
};

const ValidateVehicle = (req, res, next) => {
    const { veiculo } = req.body;
    if (!veiculo) return res.status(400).json({ message: 'Campo veículo ausente ou não preenchido' });
    if (!veiculo.modelo) return res.status(400).json({ message: 'Modelo veículo ausente' });
    if (!veiculo.placa) return res.status(400).json({ message: 'Placa veículo ausente' });

    next();
};

const ValidateService = (req, res, next) => {
    const { nome, funcionario, garantia } = req.body;
    if (!nome || !funcionario || !garantia) {
        return res.status(400).json({ message: 'Nome, funcionario ou garantia ausentes.' });
    }
    next();
};

module.exports = { ValidateService, ValidateClient, ValidateVehicle };