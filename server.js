const path = require('path');
const express = require('express');

//set up a web server
const app = express();

//serve files
app.use(express.static(path.join(__dirname, '/public')));
app.get('/web.js', (req, res) => {
	res.sendFile(path.join(__dirname, '/build/web.js'));
});
app.get('/web.js.map', (req, res) => {
	res.sendFile(path.join(__dirname, '/build/web.js.map'));
});

//start the web server
app.listen(process.env.PORT || 3000);