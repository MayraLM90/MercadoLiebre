const express = require ('express');

const app = express();

const path = require('path');

let port = 8080

app.listen (port, () => console.log("Servidor andando"))

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(path.resolve('./views/home.html'))
});
app.get('/home', (req, res) =>{
    res.sendFile(path.resolve('./views/home.html'))
});

app.post('/', (req, res) =>{
    res.sendFile(path.resolve('./views/home.html'))
});

app.get('/index', (req, res) =>{
    res.sendFile(path.resolve('./views/index.html'))
});

app.get('/register', (req, res) =>{
    res.sendFile(path.resolve('./views/register.html'))
});

app.get('/login', (req, res) =>{
    res.sendFile(path.resolve('./views/login.html'))
});
