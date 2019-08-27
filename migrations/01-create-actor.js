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
                allowNull: false,
                type: Sequelize.STRING
            },
            geoLongitude: {
                allowNull: false,
                type: Sequelize.STRING
            },
            geoLatitude: {
                allowNull: false,
                type: Sequelize.STRING
            },
            adress: {
                allowNull: false,
                type: Sequelize.STRING
            },
            city: {
                allowNull: false,
                type: Sequelize.STRING
            },
            cp: {
                allowNull: true,
                type: Sequelize.STRING,
                defaultValue:
                    'Non disponible pour le moment'
            },
            country: {
                allowNull: false,
                type: Sequelize.STRING
            },
            website: {
                allowNull: true,
                type: Sequelize.STRING
            },
            description: {
                allowNull: true,
                type: Sequelize.TEXT,
                defaultValue:
                    'Non disponible pour le moment',
            },
            telephonnumber: {
                allowNull: true,
                type: Sequelize.STRING
            },
            openhours: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            image: {
                allowNull: true,
                type: Sequelize.STRING,
                defaultValue: 
                    ''
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        },
    );
    },
    
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Actors');
    }
};