const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;




//TODO require hbs
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Middlewares / Servir contenido estatico

app.use(express.static('public'));

    app.get('/',  (req, res) => {
        res.render('home', {
            nombre: 'Leonardo',
            titulo: 'Curso de Node'
        }); //enviar agurmentos, son opciones
    });    

    app.get('/generic',  (req, res) => {
        res.render('generic', {
            nombre: 'Leonardo',
            titulo: 'Curso de Node'
        }); //enviar agurmentos, son opciones
    });   

    app.get('/elements',  (req, res) => {
        res.render('elements', {
            nombre: 'Leonardo',
            titulo: 'Curso de Node'
        }); //enviar agurmentos, son opciones
    });   
    app.get('*',  (req, res) => {
        res.sendFile(__dirname + '/public/404.html');
    });

    app.listen(port,  () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
