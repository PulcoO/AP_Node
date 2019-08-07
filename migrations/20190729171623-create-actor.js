'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Actors', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            geoLongitude: {
                type: Sequelize.STRING
            },
            geoLatitude: {
                type: Sequelize.STRING
            },
            adress: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            cp: {
                type: Sequelize.STRING
            },
            country: {
                type: Sequelize.STRING
            },
            website: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.STRING
            },
            telephonnumber: {
                type: Sequelize.INTEGER
            },
            openhours: {
                type: Sequelize.STRING
            },
            // actorId: {
            //     type: Sequelize.INTEGER,
            //     references: {
            //         model: "actorscategories",
            //         key: "ActorId"
            //     }
            // },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Actors');
    }
};