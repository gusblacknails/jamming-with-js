const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require ('path')
const app = express()

app.set('port', (process.env.PORT || 3000));
//rutas estáticas

app.use('/styles', express.static(path.join(__dirname, '../styles')))
app.use('/scripts', express.static(path.join(__dirname, '../scripts')))
app.use('/samples', express.static(path.join(__dirname, '../samples')))
app.use('/images', express.static(path.join(__dirname, '../images')))



app.use(express.static('public'));

app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000)