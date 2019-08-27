'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('categoryActors',
        [
            {
                actorId: 1,
                categoryId: 532,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                actorId: 1,
                categoryId: 537,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                actorId: 1,
                categoryId: 539,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                actorId: 1,
                categoryId: 540,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 2,
                categoryId: 532,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                actorId: 2,
                categoryId: 556,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                actorId: 2,
                categoryId: 537,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                actorId: 2,
                categoryId: 539,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 3,
                categoryId: 532,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 3,
                categoryId: 537,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 3,
                categoryId: 539,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                actorId: 3,
                categoryId: 556,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 4,
                categoryId: 557,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 4,
                categoryId: 575,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 4,
                categoryId: 574,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 5,
                categoryId: 795,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 5,
                categoryId: 794,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 5,
                categoryId: 799,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 6,
                categoryId: 575,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 6,
                categoryId: 574,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 6,
                categoryId: 557,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 7,
                categoryId: 557,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 7,
                categoryId: 574,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 7,
                categoryId: 575,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 8,
                categoryId: 824,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 8,
                categoryId: 534,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 8,
                categoryId: 532,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 9,
                categoryId: 601,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 9,
                categoryId: 556,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 9,
                categoryId: 604,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 9,
                categoryId: 600,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 9,
                categoryId: 539,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 9,
                categoryId: 537,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 9,
                categoryId: 532,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 10,
                categoryId: 538,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 10,
                categoryId: 537,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 10,
                categoryId: 540,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                actorId: 10,
                categoryId: 532,
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