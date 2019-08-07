'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Actor belongsToMany Category
    return queryInterface.createTable(
      'ActorsCategories',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        ActorId: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        CategoryId: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable('ActorsCategories');
  }
};
