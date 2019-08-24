'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('roles',
        [
            {
            id : 1,
            name: 'SuperAdministrator',
            createdAt: new Date(),
            updatedAt: new Date()
            }, {
            id : 2,
            name: 'Administrator',
            createdAt: new Date(),
            updatedAt: new Date()
            }, {
            id : 3,
            name: 'Utilisateur',
            createdAt: new Date(),
            updatedAt: new Date()
            }
        ]
            ,{individualHooks: true});
    },
down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles');
}
};