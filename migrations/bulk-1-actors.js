'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('actors',
        [
        {   id: 1,
            name: 'Actor1',
            geoLongitude: -73.9772,
            geoLatitude: 40.7808,
            adress: 'New York',
            city: 'New York',
            cp: '59000',
            country: 'USA',
            website: 'test.com',
            description: 'test',
            telephonnumber: '0625895472',
            openhours: 'Lundi: ...',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {   id: 2,
            name: 'Actor2',
            geoLongitude: -73.9772,
            geoLatitude: 40.7808,
            adress: 'New York',
            city: 'New York',
            cp: '59000',
            country: 'USA',
            website: 'test.com',
            description: 'test',
            telephonnumber: '0625895472',
            openhours: 'Lundi: ...',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {   id: 3,
            name: 'Actor3',
            geoLongitude: -73.9772,
            geoLatitude: 40.7808,
            adress: 'New York',
            city: 'New York',
            cp: '59000',
            country: 'USA',
            website: 'test.com',
            description: 'test',
            telephonnumber: '0625895472',
            openhours: 'Lundi: ...',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        ]
        ,{individualHooks: true});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('actors');
    }
};


