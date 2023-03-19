const http = require('http');

http.createServer((req, res)=> {
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write( '1id, nombre\n' );
    res.write( '1, fer\n' );
    res.write( '2, maria\n' );
    res.write( '3, juan\n');
    res.end();
})
.listen(8080);
console.log('Escuchando el puerto', 8080);  
