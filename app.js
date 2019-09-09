let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();
// let db = require(`${__dirname}/models/index.js`);

//Body Parser configuration
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//ajout cors
app.use(cors());

/////////////////////////////// CONFIG ROUTEUR ////////////////////////////

const user = require('./routes/user.route');
const actor = require('./routes/actor.route');
const role = require('./routes/role.route');
const category = require('./routes/category.route');
const favori = require('./routes/favori.route');
const event = require('./routes/event.route');

////////////////////////////////// ROUTEUR ///////////////////////////////////////

app.use("/user", user);
app.use("/actor", actor);
app.use("/role", role);
app.use("/category", category);
app.use("/favori", favori);
app.use("/events", event);

///////////////////////////////// LISTENER ///////////////////////////////////////
app.listen(9090);