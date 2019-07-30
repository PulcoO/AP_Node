'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActorAsCategory = sequelize.define('ActorAsCategory', {
    actorId: DataTypes.STRING,
    categoryId: DataTypes.STRING
  }, {});
  ActorAsCategory.associate = function(models) {
    // associations can be defined here
  };
  Comment.belongsToMany(models.User,{
    foreignKey: "UserId"
  });
  Comment.belongsToMany(models.Actor,{
    foreignKey: "ActorId"
  });
  return ActorAsCategory;
};