const express = require('express')
const app = express()
const router = require('./router')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.set('views','views')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/',router)
app.listen(3000)