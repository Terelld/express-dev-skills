// Load express
const express = require('express');
const path = require('path'); 

// require the TO DO "database"

const todoDb = require ('./data/todo-db');

// Creat our express app
const app = express(); 

//Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount middleware* (app.use)


//Mount routes

// Define a "root" rout directly on app
//not best practice*
app.get('/', function(req, res) {
    res.redirect('/todos'); //redirect must start w/ leading slash.
});

app.get('/todos', function (req, res) {
    const todos = todoDb.getAll();
    res.render('todos/index', {todos});
});

app.get('/home', function(req, res) {
    // never beginthe name of the template w/ a slash
    res.render('home');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});