var express = require('express');
var bodyParser = require('body-parser');

var RESTapi = express();

RESTapi.use(bodyParser.json());
RESTapi.use(bodyParser.urlencoded({extended: true}));

RESTapi.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/form.html');
});

RESTapi.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = RESTapi;