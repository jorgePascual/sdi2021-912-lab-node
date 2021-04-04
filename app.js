// Módulos
let express =require('express');
let app =  express();
let swig = require('swig');
let bodyParser = require('body-parser');
let mongo = require('mongodb');


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Variables
app.set('port', 8081);
app.set('db','mongodb://admin:sdi@tiendamusical-shard-00-00.bauxu.mongodb.net:27017,tiendamusical-shard-00-01.bauxu.mongodb.net:27017,tiendamusical-shard-00-02.bauxu.mongodb.net:27017/test?ssl=true&replicaSet=atlas-oizqub-shard-0&authSource=admin&retryWrites=true&w=majority');


//Rutas/controladores por lógica
require("./routes/rusuarios.js")(app, swig);
require("./routes/rcanciones.js")(app, swig, mongo);

// lanzar el servidor
app.listen(app.get('port'), function(){
    console.log('Servidor activo en puerto: ' + app.get('port'));
});