/* eslint-disable max-lines-per-function */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('services', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      funcionario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      txServico: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      produto: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      cliente: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      veiculo: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      garantia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('services');
  },
};
