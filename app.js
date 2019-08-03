let express = require('express');
let app = express();
// let db = require(`${__dirname}/models/index.js`);

/////////////////////// BODY PARSER /////////////////////////////
let bodyParser = require('body-parser');

//configuration body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/////////////////////////////// CONFIG ROUTEUR ////////////////////////////

const user = require('./routes/user.route');
const actor = require('./routes/actor.route');
const role = require('./routes/role.route');
const category = require('./routes/category.route');

////////////////////////////////// ROUTEUR ///////////////////////////////////////

app.use("/user", user);
app.use("/actor", actor);
app.use("/role", role);
app.use("/category", category);

///////////////////////////////// LISTENER ///////////////////////////////////////
app.listen(9090);