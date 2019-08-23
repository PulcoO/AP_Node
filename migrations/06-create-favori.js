'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Favoris', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING
      },
      actorId: {
        type: Sequelize.STRING
      },
      userId:{
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      },
      actorId:{
        type: Sequelize.INTEGER,
        references: {
          model: "actors",
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
    return queryInterface.dropTable('Favoris');
  }
};