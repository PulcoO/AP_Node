'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('ActorAsCategories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            actorId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: "Actors",
                    key: "id"
                }
            },
            categoryId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: "Categories",
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
        return queryInterface.dropTable('ActorAsCategories');
    }
};