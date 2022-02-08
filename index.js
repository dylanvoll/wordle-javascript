const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

app.get('/style.css', function(request, response){
    response.sendFile(__dirname + '/style.css');
});

app.get('/app.js', function(request, response){
    response.sendFile(__dirname + '/app.js');
});

app.listen(8080);