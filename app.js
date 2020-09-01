const express = require('express');
const app = express();
const fs = require('fs');

const websiteName = 'Tatry Restaurant';
const port = process.env.PORT || 3050;
const host = 'localhost';

// Rendering template
app.set("view engine", "pug");
app.set('views', __dirname + '/src');
// Folder hosting all static files
app.use(express.static(__dirname + '/public'));

app.get('/member/:name/planet/:home', (req, res) => {
	const memberDetails = {
		member: req.params.name,
		planet: req.params.home
	}
	res.render('guardian', memberDetails);
});

// ROUTING
// Landing page
app.get('/', function(req, res) {
    res.render('pages/landing');
    console.log('DEV-Message: Home/landing page has correclty loaded')
});

// Food page
app.get('/food', function(req, res) {
    res.render('pages/food');
    console.log('DEV-Message: Food page has correclty loaded')
});

// News page
app.get('/news', function(req, res) {
    res.render('pages/news');
    console.log('DEV-Message: News page has correclty loaded')
});

// Gallery page
app.get('/gallery', function(req, res) {
    res.render('pages/gallery');
    console.log('DEV-Message: Gallery page has correclty loaded')
});

// About us page
app.get('/about', function(req, res) {
    res.render('pages/about');
    console.log('DEV-Message: About us page has correclty loaded')
});

// Contact page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
    console.log('DEV-Message: Contact page has correclty loaded')
});

app.get('*', (req, res, next) => {
	res.status(200).send('Sorry, page not found');
	next();
});

app.listen(port, host, () => {
	console.log(`DEV-Message: ${websiteName} server started at ${host} port ${port}`);
});