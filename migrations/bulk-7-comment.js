'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('comments',
        [
            {
                id: 1,
                content: 'je suis superman, et j\'aime ce magasin',
                userId: 1,
                actorId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                id: 2,
                content: 'Ce magasin est trop cool, je vous le recommande',
                userId: 2,
                actorId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },{
                id: 3,
                content: 'Je ne suis pas vraiment fan de ce magasin, ne pas y aller',
                userId: 3,
                actorId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]
            ,{individualHooks: true}
        );
    },
down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments');
}
};