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
const actor = require('./routes/actor.route')

////////////////////////////////// ROUTEUR ///////////////////////////////////////

app.use("/user", user);
app.use("/actor", actor);

///////////////////////////////// LISTENER ///////////////////////////////////////
app.listen(9090);