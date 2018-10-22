const express = require('express');
const path = require('path');
const buyandsell = express();

const api = require('./server/routes/api');


// Angular DIST output folder
buyandsell.use(express.static(path.join(__dirname,'/dist/buyandsell')));

//API location
buyandsell.use('/api', api);

//Send all other requests to the Angular app
buyandsell.get('*', (req,res) => {
	res.sendFile(path.join(__dirname,'dist/buyandsell/index.html'));
});

const port = process.env.PORT || '3000';
buyandsell.listen(port, () => console.log(`Running on localhost :${port}`));

module.exports = buyandsell;