const express = require('express');
const {engine} = require('express-handlebars')

const myconnection = require('express-myconnection')

const bodyParser = require('body-parser')

const mysql = require('mysql')

const app = express();
app.set('port', 5000)

app.use(myconnection(mysql, {
    host:'localhost',
    user:'root',
    password:'',
    database:'crudsimple'
}))

app.listen(app.get('port'),()=>{
    console.log('listening on port', app.get('port'))
})