'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CategoryActors', {
      actorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Actors",
          key: "id"
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
	      onUpdate : Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    },
  );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CategoryActors');
  }
};