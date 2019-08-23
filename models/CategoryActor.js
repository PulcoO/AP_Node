'use strict';
module.exports = (sequelize, DataTypes) => {
    const CategoryActor = sequelize.define('CategoryActor', {
        actorId: DataTypes.INTEGER,
        categoryId : DataTypes.INTEGER
    }, {});
    CategoryActor.associate = function(models) {
        // associations can be defined here
        CategoryActor.belongsTo(models.Actor,{
            foreignKey: "actorId"
            });
        CategoryActor.belongsTo(models.Category,{
            foreignKey: "categoryId"
            });
        
    };
    return CategoryActor;
};