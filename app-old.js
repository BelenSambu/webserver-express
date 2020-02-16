const http = require('http');

http.createServer((req, res) => {
    //Una vez creado el servidor hay que configurar el puerto. Se comienza poniendo uno, pero cuando se desplegue en algún lugar como Heroku se configura distinto.

    res.writeHead(200, {'Content-Type': 'application/json'});

        let salida = {
            nombre : 'Belen',
            edad : 26,
            url : req.url
        }
    // res.write('Hola mundo');
    res.write(JSON.stringify(salida))
    res.end(); 

})
.listen(8080)