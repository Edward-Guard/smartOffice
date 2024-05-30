/* eslint-disable max-lines-per-function */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    queryInterface.bulkInsert('services', [{
      id: 1,
      nome: 'Manutenção preventiva',
      data: '2024-05-01',
      funcionario: 'João',
      txServico: 260.00,
      produto: JSON.stringify([{ id: 2, quantidade: 1, preco: 38.00 }]),
      cliente: JSON.stringify({ nome: 'Maria', Id: '988.691.400-91' }),
      veiculo: JSON.stringify({ placa: 'JUB-3795', modelo: 'CG 160' }),
      descricao: 'Troca de óleo e filtro',
      garantia: '3 meses',
    },
    {
      id: 2,
      nome: 'Manutenção corretiva',
      data: '2024-05-05',
      funcionario: 'José',
      txServico: 80.00,
      produto: JSON.stringify([{ id: 5, quantidade: 2, preco: 50.90 }]),
      cliente: JSON.stringify({ nome: 'Joao', Id: '895.380.700-03' }),
      veiculo: JSON.stringify({ placa: 'HVI-9238', modelo: 'XRE 300' }),
      descricao: 'Troca de lâmpada',
      garantia: '1 mês',
    },
    {
      id: 3,
      nome: 'Manutenção preventiva',
      data: '2024-05-08',
      funcionario: 'José',
      txServico: 50.00,
      produto: JSON.stringify([{ id: 2, quantidade: 1, preco: 38.00 }]),
      cliente: JSON.stringify({ nome: 'Antonio', Id: '845.166.100-94' }),
      veiculo: JSON.stringify({ placa: 'MXE-5329', modelo: 'CB 500' }),
      descricao: 'Troca de óleo e filtro',
      garantia: '6 meses',
    },
    {
      id: 4,
      nome: 'Manutenção corretiva',
      data: '2024-05-10',
      funcionario: 'João',
      txServico: 60.00,
      produto: JSON.stringify([{ id: 5, quantidade: 2, preco: 50.90 }]),
      cliente: JSON.stringify({ nome: 'Maria', Id: '988.691.400-91' }),
      veiculo: JSON.stringify({ placa: 'HVI-9238', modelo: 'XRE 300' }),
      descricao: 'Troca de lâmpada do farol frontal',
      garantia: '3 meses',
    },
    {
      id: 5,
      nome: 'Venda de Peça',
      data: '2024-05-10',
      funcionario: 'Henrique',
      txServico: 50.00,
      produto: JSON.stringify([{ id: 4, quantidade: 1, preco: 85.00 }]),
      cliente: JSON.stringify({ nome: 'Maria', Id: '988.691.400-91' }),
      veiculo: JSON.stringify({ placa: 'MWS-9605', modelo: 'CG 160' }),
      descricao: 'Venda e troca de um Kit de transmissão.',
      garantia: '2 meses',
    }]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('services', null, {});
  },
};
