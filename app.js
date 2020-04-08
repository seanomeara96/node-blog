const express = require('express')
const app = express()
const router = require('./router')
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views','views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', router);
const server = require('http').createServer(app)
module.exports = server;
app.listen(3000)