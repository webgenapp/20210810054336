'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Coffee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coffee.init(
    {
      price: DataTypes.STRING,
      flavour: DataTypes.STRING,
      sugar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Coffee',
    }
  )
  return Coffee
}
