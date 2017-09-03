import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import livereload from 'connect-livereload';

const users = require('./models/users');
const employees = require('./models/employees');
const customers = require('./models/customers');

let app = express();

app.use(livereload());
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