const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
app.use(bodyParser.json());

const { mongoose } = require('./db.js');

//var employeeController = require('./controllers/employeeController');
var question = require('./controllers/question');
var student =require('./controllers/student')


app.use(cors({ origin: 'http://localhost:4200' }));


app.use('/', question);
app.use('/student',student);
app.listen(3000, () => console.log('Server started at port : 3000'));