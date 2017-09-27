const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const livereload = ('connect-livereload');

const users = require('./models/users');
const employees = require('./models/employees');
const customers = require('./models/customers');

let app = express();

app.use(livereload({
    port: 35729
  }));
app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/users/list', (req, res) => {
    res.send(users);
});

app.get('/employees', (req, res) => {
    res.send(employees);
});

app.get('/customers', (req, res) => {
    res.send(customers);
});

const server = app.listen(3000, () => {
    console.log(`Server started at 
    http://${server.address().address}:${server.address().port}`);
});