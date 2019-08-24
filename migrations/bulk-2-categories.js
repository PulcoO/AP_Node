'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('categories',
        [{
            id : 1,
            name: 'Alimentation',
            createdAt: new Date(),
            updatedAt: new Date()
          }, {
            id : 2,
            name: 'Habitat / Jardin',
            createdAt: new Date(),
            updatedAt: new Date()
          }, {
            id : 3,
            name: 'Artisanat',
            createdAt: new Date(),
            updatedAt: new Date()
          }, {
            id : 4,
            name: 'Collectifs citoyens',
            createdAt: new Date(),
            updatedAt: new Date()
          }, {
            id : 5,
            name: 'Educations',
            createdAt: new Date(),
            updatedAt: new Date()
          }, {
            id : 6,
            name: 'Mobilité',
            createdAt: new Date(),
            updatedAt: new Date()
          }, {
            id : 7,
            name: 'Sorties / Culture',
            createdAt: new Date(),
            updatedAt: new Date()
          }, {
            id : 8,
            name: 'Lieux collaboratifs',
            createdAt: new Date(),
            updatedAt: new Date()
          }, {
            id : 9,
            name: 'Voyages',
            createdAt: new Date(),
            updatedAt: new Date()
          }]
          ,{individualHooks: true});
    },
down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories');
}
};