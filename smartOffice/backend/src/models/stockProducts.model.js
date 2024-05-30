const stockProductModel = (sequelize, DataTypes) => {
    const StockProduct = sequelize.define('Stock', {
      nome: DataTypes.STRING,
      tipo: DataTypes.STRING,
      marca: DataTypes.STRING,
      quantidade: DataTypes.INTEGER,
      preco: DataTypes.FLOAT,
    }, {
        tableName: 'stockProducts',
        timestamps: false,
    });
  
    return StockProduct;
  };
  
  module.exports = stockProductModel;