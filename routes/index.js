const routes = require('express').Router();

const airplane = require('../data/animals');

routes.get('/', (req, res) => {
    return res.render('index',{'title':'Pagina Inicial','data':airplane})
});



routes.post("/new-record", (req, res) => {
    const { id, name, value} = req.body;
    console.log(`se recibiereon id = ${id} name = ${name}`);

    //TODO agrega al mapa
    const ids = Number(req.body.id);

    airplane.set(ids, {id:ids , name: name, nickname: value});

    //Se redirecciona a la ruta ("/"), para actualizar los registros
    console.log("Vamos a redireccionar");
    res.redirect('/');
});


module.exports = routes;
