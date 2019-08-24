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
                allowNull: true,
                type: Sequelize.STRING
            },
            lastname: {
                allowNull: true,
                type: Sequelize.STRING
            },
            pseudo: {
                allowNull: false,
                type: Sequelize.STRING
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING
            },
            birthdate: {
                allowNull: true,
                type: Sequelize.DATE
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING
            },
            adress: {
                allowNull: true,
                type: Sequelize.STRING
            },
            city: {
                allowNull: true,
                type: Sequelize.STRING
            },
            cp: {
                allowNull: true,
                type: Sequelize.STRING
            },
            country: {
                allowNull: true,
                type: Sequelize.STRING
            },
            image: {
                allowNull: true,
                type: Sequelize.STRING,
                defaultValue: ''
            },
            roleId: {
                allowNull: false,
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