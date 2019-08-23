'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('categoryActors',
        [
            {
                actorId: 1,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 1,
                categoryId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 1,
                categoryId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 1,
                categoryId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 1,
                categoryId: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 2,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 2,
                categoryId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 2,
                categoryId: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 2,
                categoryId: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 3,
                categoryId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 3,
                categoryId: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 3,
                categoryId: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]
            // ,{individualHooks: true}
        );
    },
down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categoryActors');
}
};