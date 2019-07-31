let express = require('express');
let app = express();
// let db = require(`${__dirname}/models/index.js`);
let bodyParser = require('body-parser');

//configuration body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/////////////////////////////// CONFIG ROUTEUR ////////////////////////////

let users = require('./routes/user.route');



////////////////////////////////// ROUTEUR ///////////////////////////////////////

app.use("/user", users);






app.listen(9090);