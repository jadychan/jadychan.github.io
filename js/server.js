var express = require('express')
var app = express()

app.get('/', function(request, response){
    response.render('index.html')
})