'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstname: {
                allowNull: false,
                type: Sequelize.STRING
            },
            lastname: {
                allowNull: false,
                type: Sequelize.STRING
            },
            pseudo: {
                type: Sequelize.STRING
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING
            },
            birthdate: {
                type: Sequelize.DATE
            },
            password: {
                allowNull: false,
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
            roleId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Roles",
                    key: "id"
                }
            },
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
        return queryInterface.dropTable('Users');
    }
};