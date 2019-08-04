let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();
// let db = require(`${__dirname}/models/index.js`);

<<<<<<< HEAD
//Body Parser configuration
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//ajout cors
app.use(cors());
=======
/////////////////////// BODY PARSER /////////////////////////////
let bodyParser = require('body-parser');

//configuration body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
>>>>>>> 44478f63a39ee8a1f67f872a5896b0a1e505cff0

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