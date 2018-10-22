const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const http = require('http')
const app = express();

const api = require('./server/routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


// Angular DIST output folder
app.use(express.static(path.join(__dirname,'/dist/buyandsell')));

//API location
app.use('/api', api);

//Send all other requests to the Angular app
app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname));
});
