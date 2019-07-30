'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    name: DataTypes.STRING,
    geo: DataTypes.JSON,
    adress: DataTypes.STRING,
    city: DataTypes.STRING,
    cp: DataTypes.STRING,
    country: DataTypes.STRING,
    category: DataTypes.JSON,
    website: DataTypes.STRING,
    description: DataTypes.STRING,
    telephonnumber: DataTypes.INTEGER,
    openhours: DataTypes.STRING
  }, {});
  Actor.associate = function(models) {
    // associations can be defined here
    Actor.hasMany(models.Favori,{
      foreignKey: "actorId"
    });
    Actor.hasMany(models.Comment,{
      foreignKey: "actorId"
    });
    Actor.hasMany(models.Event,{
      foreignKey: "actorId"
    });


    Actor.hasMany(models.Category,{
      trough:'ActorAsCategory',
      foreignKey: "actorId"
    });
  };
  return Actor;
};