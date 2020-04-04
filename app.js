const express = require('express')
const app = express()
const router = require('./routes')
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use('/',router)

app.listen(3000,()=>{
    console.log('listening')
})