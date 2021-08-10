'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Sandwich extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sandwich.init(
    {
      price: DataTypes.STRING,
      type: DataTypes.STRING,
      warm: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Sandwich',
    }
  )
  return Sandwich
}
