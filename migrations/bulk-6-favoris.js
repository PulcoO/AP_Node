'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('favoris',
        [
            {
                id : 1,
                userId: 1,
                actorId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                id : 2,
                userId: 1,
                actorId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                id : 3,
                userId: 1,
                actorId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                id : 4,
                userId: 2,
                actorId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                id : 5,
                userId: 2,
                actorId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                id : 6,
                userId: 3,
                actorId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                id : 7,
                userId: 3,
                actorId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            } 
        ]
            ,{individualHooks: true});
    },
down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('favoris');
}
};