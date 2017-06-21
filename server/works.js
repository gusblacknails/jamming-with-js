const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require ('path')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const app = express()

const PORT=process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }))
//extendet tru si la información que recibimos del browser esta anidada en muchos niveles

app.use(session({
  name: 'jm-server-session-cookie-id',
  secret: '4u6mVaJtJrrhZb2iHx2ugBof',
  saveUninitialized: true,
  resave: true,
  store: new FileStore()
}))
app.use((req, res, next) => {
  req.session.cart = req.session.cart || []
  next()
})
app.use(function (err, req, res, next) {
    console.error(err, err.stack);
    res.status(500).send(err);
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.post('/', (req,res) => {
	const info =req.body
	console.log(info)
})

app.listen(process.env.PORT || 3000)
console.log(`Port ${PORT} on fire!!`)
