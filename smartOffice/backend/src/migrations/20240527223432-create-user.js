/* eslint-disable max-lines-per-function */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stockProducts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('stockProducts');
  },
};
