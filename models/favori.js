'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favori = sequelize.define('Favori', {
    userId: DataTypes.STRING,
    actorId: DataTypes.STRING
  }, {});
  Favori.associate = function(models) {
    // associations can be defined here
    Favori.belongsTo(models.User,{
      foreignKey: "UserId"
    });
    Favori.belongsTo(models.Actor,{
      foreignKey: "ActorId"
    });
  };
  return Favori;
};