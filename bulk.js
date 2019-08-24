const db = require('./models/index.js');

db.Category.bulkCreate([
    {id: 1, name: 'Alimentation'},
    {id: 2, name: 'Habitat / Jardin'},
    {id: 3, name: 'Artisanat'},
    {id: 4, name: 'Collectifs citoyens'},
    {id: 5, name: 'Educations'},
    {id: 6, name: 'Mobilité'},
    {id: 7, name: 'Sorties / Culture'},
    {id: 8, name: 'Lieux collaboratifs'},
    {id: 9, name: 'Voyages'},
    // {id: 10, name: 'Economie / Echange'},
    ],{individualHooks: true})
    .then(() => { // Notice: There are no arguments here, as of right now you'll have to...
        return Category.findAll();
    })
    .then(categories => {
    console.log(categories) // ... in order to get the array of user objects
    });


db.Actor.bulkCreate([
    { id: 1, name: 'Actor1', geoLongitude: -73.9772, geoLatitude: 40.7808, adress: 'New York', city: 'New York', cp: '59000', country: 'USA', website: 'test.com', description: 'test', telephonnumber: '0625895472', openhours: 'Lundi: ...'},
    { id: 2, name: 'Actor2', geoLongitude: -73.9772, geoLatitude: 40.7808, adress: 'New York', city: 'New York', cp: '59000', country: 'USA', website: 'test.com', description: 'test', telephonnumber: '0625895472', openhours: 'Lundi: ...'},
    { id: 3, name: 'Actor3', geoLongitude: -73.9772, geoLatitude: 40.7808, adress: 'New York', city: 'New York', cp: '59000', country: 'USA', website: 'test.com', description: 'test', telephonnumber: '0625895472', openhours: 'Lundi: ...'}
  ],
  {individualHooks: true})
  .then(() => { // Notice: There are no arguments here, as of right now you'll have to...
        return Actor.findAll();
  })
  .then(actors => {
    console.log(actors) // ... in order to get the array of user objects
  });

db.CategoryActor.bulkCreate([
    {actorId: 1, categoryId: 1},
    {actor_id: 1, category_id: 2},
    {actor_id: 1, category_id: 3},
    {actor_id: 2, category_id: 1},
    {actor_id: 2, category_id: 6},
    {actor_id: 3, category_id: 2},
    {actor_id: 3, category_id: 3},
    {actor_id: 3, category_id: 4},
    ],
    {individualHooks: true})
    .then(() => { // Notice: There are no arguments here, as of right now you'll have to...
        return CategoryActor.findAll();
    })
    .then(CategoryActors => {
    console.log(CategoryActors) // ... in order to get the array of user objects
    });




