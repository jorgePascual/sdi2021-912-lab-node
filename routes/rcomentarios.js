module.exports = function(app, swig, gestorBD) {

    app.post('/comentarios/:cancion_id', function (req, res) {
        let id = req.params.id;
        let comentario = {
            autor: gestorBD.mongo.ObjectID(id),
            texto: req.body.texto,
            cancion_id: req.body.cancion_id
        }
        gestorBD.añadirComentarios(comentario, function(id){
            if(id==null){
                res.send("Error al añadir un comentario")
            }else{
                res.send("Agregado el comentario")
            }

        })

    });

}