'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Clients.hasMany(models.Pets, {
        foreignKey: 'client_id',
        as: 'pets',
      })
    }
  };
  Clients.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    paranoid:true,
    modelName: 'Clients',
  });
  return Clients;
}; 