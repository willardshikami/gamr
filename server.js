const express = require('express');
const path = require('path');
const http = require('http');
const mongoose = require('mongoose');
const unirest = require('unirest');
const router = express.Router();
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('client'));


//port var
const port = 5000;

//route to homepage(will be invalid after creating views)
app.get('/', (req, res) => {
    res.send('Invalid Endpoint')
});

app.listen(port, () => {
    console.log('Server started on port ' + port)
});
