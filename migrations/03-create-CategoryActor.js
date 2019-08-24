'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CategoryActors', {
      actorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "actors",
          key: "id"
        }
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
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