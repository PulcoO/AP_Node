'use strict';
module.exports = (sequelize, DataTypes) => {
    const ActorAsCategory = sequelize.define('ActorAsCategory', {
        actorId: DataTypes.STRING,
        categoryId: DataTypes.STRING
    }, {});
    ActorAsCategory.associate = function(models) {
        // associations can be defined here
        ActorAsCategory.belongsTo(models.Category, {
            foreignKey: "categoryId"
        });
        ActorAsCategory.belongsTo(models.Actor, {
            foreignKey: "actorId"
        });
    };
    return ActorAsCategory;
};