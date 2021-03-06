'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users',
            [
                {
                    id: 1,
                    firstname: 'Clack',
                    lastname: 'Kent',
                    pseudo: 'SuperMan',
                    email: 'super.man@gmail.com',
                    birthdate: new Date(),
                    password: '$2b$05$umQRzsKDZtOXkyhR71KPBe3W/bVZMrW6HsNa.BXNNpbabZec3uRMS',
                    adress: 'super Maison au bord de la deule',
                    city: 'Metropolis',
                    cp: '62960',
                    country: 'USA',
                    image: '',
                    roleId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }, {
                    id: 2,
                    firstname: 'Stéphanie',
                    lastname: 'Percheron',
                    pseudo: 'Steph',
                    email: 'percheron.stephanie@gmail.com',
                    birthdate: '1991-06-02 08:58:51',
                    password: '$2b$05$umQRzsKDZtOXkyhR71KPBe3W/bVZMrW6HsNa.BXNNpbabZec3uRMS',
                    adress: 'lille, pas trés loin',
                    city: 'Lille',
                    cp: '59000',
                    country: 'FR',
                    image: '',
                    roleId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }, {
                    id: 3,
                    firstname: 'Mathieu',
                    lastname: 'Veys',
                    pseudo: 'PulcOox',
                    email: 'oominimathoo@gmail.com',
                    birthdate: '1988-11-28 08:58:51',
                    password: '$2b$05$umQRzsKDZtOXkyhR71KPBe3W/bVZMrW6HsNa.BXNNpbabZec3uRMS',
                    adress: 'Lille, proche aussi',
                    city: 'Lille',
                    cp: '59000',
                    country: 'FR',
                    image: '',
                    roleId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ]
            , { individualHooks: true });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users');
    }
};