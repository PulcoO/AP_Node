'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CategoryActors', {
      actorId: {
        type: Sequelize.INTEGER,
        field: "actor_id",
        references: {
          model: "Actors",
          key: "id"
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        field: "category_id",
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
    },
  );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CategoryActors');
  }
};