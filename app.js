// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));
app.get('/photo-gallery', (request, response, next) => response.sendFile(__dirname + '/views/photo-gallery.html'));


// Server Started
app.listen(3000, () => console.log(__dirname));

// ...


    