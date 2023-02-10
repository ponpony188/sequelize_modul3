'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.ENUM('Male', 'Female'),
    birthdate: DataTypes.DATE,
    occupation: DataTypes.STRING,
    currency: DataTypes.STRING,
    role: DataTypes.STRING,
    currency: DataTypes.STRING, 
    statusId: DataTypes.INTEGER,
    attempt: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
  });

  users.associate=(models) => {
    users.belongsTo(models.status,{foreignKey: 'statusId'})
  }
  return users;
};