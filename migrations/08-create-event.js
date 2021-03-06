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
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      datebegin: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dateend: {
        allowNull: true,
        type: Sequelize.DATE
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      openhours: {
        allowNull: true,
        type: Sequelize.STRING
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: ''
      },
      actorId: {
        allowNull: true,
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