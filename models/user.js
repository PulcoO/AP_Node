'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    pseudo: DataTypes.STRING,
    email: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    password: DataTypes.STRING,
    adress: DataTypes.STRING,
    city: DataTypes.STRING,
    cp: DataTypes.STRING,
    country: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Role,{
      foreignKey: "roleId"
    });

    User.hasMany(models.Favori,{
      foreignKey: "userId"
    });
    User.hasMany(models.Comment,{
      foreignKey: "userId"
    })
  };
  return User;
};