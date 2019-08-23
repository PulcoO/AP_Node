'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('events',
        [
            {
                id : 1,
                title: 'Braderie de Lille',
                content: 'Il s\'agit de la plus grande braderie D\'Europe',
                datebegin: '2019-08-31 12:00:00',
                dateend: '2019-09-01 12:00:00',
                location: 'Lille',
                openhours: 'All Day-Night',
                image: '',
                createdAt: new Date(),
                updatedAt: new Date()
                },
        ]
            // ,{individualHooks: true}
        );
    },
down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('events');
}
};