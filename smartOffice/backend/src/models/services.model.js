const stockProductModel = (sequelize, DataTypes) => {
    const ServiceModel = sequelize.define('Services', {
      nome: DataTypes.STRING,
      data: DataTypes.STRING,
      funcionario: DataTypes.STRING,
      txServico: DataTypes.FLOAT,
      produto: DataTypes.JSON,
      cliente: DataTypes.JSON,
      veiculo: DataTypes.JSON,
      descricao: DataTypes.STRING,
      garantia: DataTypes.STRING,
    }, {
        tableName: 'services',
        timestamps: false,
    });
  
    return ServiceModel;
  };
  
  module.exports = stockProductModel;