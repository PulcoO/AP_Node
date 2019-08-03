'use strict';
module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        datebegin: DataTypes.DATE,
        dateend: DataTypes.DATE,
        location: DataTypes.STRING,
        openhours: DataTypes.STRING
    }, {});
    Event.associate = function(models) {
        // associations can be defined here
        Event.belongsTo(models.Actor, {
            foreignKey: 'actorId'
        })
    };
    return Event;
};