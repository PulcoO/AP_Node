'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('categories',
        [{
            id : 532,
            name: 'Alimentation et agriculture',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 557,
            name: 'Habitat / Jardin',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 802,
            name: 'Collectifs citoyens',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 794,
            name: 'Lieux collaboratifs',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 612,
            name: 'Artisanat',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          
          
          // Les sous cats //
          
          
          {
            id: 575,
            name: "Jardin partagé",
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id: 574,
            name: "Jardin",
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 537,
            name: 'Circuits courts',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 539,
            name: 'Amap/Paniers',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 540,
            name: 'Légumes',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 556,
            name: 'Autre produit',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 795,
            name: 'création/Réparation',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 799,
            name: 'Hacker Space',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 824,
            name: 'Association',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 534,
            name: 'Epicerie & Supérette',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 600,
            name: "Sortie & Culture",
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 604,
            name: 'Sortie Nature',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 601,
            name: 'Lieu pour sortir',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            id : 538,
            name: 'Producteur & Artisan',
            createdAt: new Date(),
            updatedAt: new Date()
          }
          
          // {
          //   id : 5,
          //   name: 'Educations',
          //   createdAt: new Date(),
          //   updatedAt: new Date()
          // }, {
          //   id : 6,
          //   name: 'Mobilité',
          //   createdAt: new Date(),
          //   updatedAt: new Date()
          // }, {
          //   id : 7,
          //   name: 'Sorties / Culture',
          //   createdAt: new Date(),
          //   updatedAt: new Date()
          // }, 
          // {
          //   id : 9,
          //   name: 'Voyages',
          //   createdAt: new Date(),
          //   updatedAt: new Date()
          // }
        ]
          ,{individualHooks: true});
    },
down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories');
}
};