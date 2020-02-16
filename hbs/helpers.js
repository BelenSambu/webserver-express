//Helpers
const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        //splice(1) toma a partir de la segunda posición de la palabra, al ser la primera en posición 0 la que se paso a mayúscula
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    //Join agarra el array y lo vuelve a pasar a texto 
    return palabras.join(' ');
})