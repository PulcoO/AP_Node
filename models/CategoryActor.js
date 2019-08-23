'use strict';
module.exports = (sequelize, DataTypes) => {
    const CategoryActor = sequelize.define('CategoryActor', {
        actorId: DataTypes.INTEGER,
        categoryId : DataTypes.INTEGER
    }, {});
    CategoryActor.associate = function(models) {
        // associations can be defined here
        CategoryActor.belongsTo(models.Actor,{
            field: "actor_id",
            foreignKey: "actorId"
            });
        CategoryActor.belongsTo(models.Category,{
            field: "actor_id",
            foreignKey: "categoryId"
            });
        
    };
    return CategoryActor;
};