const express = require('express')
const app = express()
const hbs = require('hbs');

//Al requerirlo se ejecuta de forma automática las funciones
require('./hbs/helpers');

//Usar contenido estático y público
app.use( express.static( __dirname + '/public'));


//Express HBS ENGINE
//__dirname significa que agarra cualquier path en donde se encuentre la app de forma dinámica y concaténamle la siguiente ruta
hbs.registerPartials( __dirname + '/views/partials')
app.set('view engine', 'hbs');
 
app.get('/',  (req, res) => {
  
    res.render('home', {
        nombre: 'belén',
        anio : new Date().getFullYear()
    });

})
 
app.get('/about',  (req, res) => {
  
    res.render('about', {
        anio : new Date().getFullYear()
    });

})

// app.get('/data',  (req, res) => {

//         //Send manda la respuesta automáticamente detecta que tipo es y lo serializa en formato json
//         res.send('Hola data');
// })

    //listen también tiene un callback
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000')
})