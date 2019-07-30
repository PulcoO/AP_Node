'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      datebegin: {
        type: Sequelize.DATE
      },
      dateend: {
        type: Sequelize.DATE
      },
      location: {
        type: Sequelize.STRING
      },
      openhours: {
        type: Sequelize.STRING
      },
      actorId:{
        type: Sequelize.INTEGER,
        references: {
          model: "Actors",
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
    return queryInterface.dropTable('Events');
  }
};