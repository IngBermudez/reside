var express = require("express"); //llamamos a Express
var app = express();
var router = require('./routes');
var cors = require('cors');
var port = process.env.PORT || 6969; // establecemos nuestro puerto


app.use(cors());
app.use('/api',router);

// iniciamos nuestro servidor
app.listen(port);
console.log("API escuchando en el puerto " + port);
