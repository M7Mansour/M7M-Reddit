const express = require('express');
const { join } = require('path');
const cookieparser = require('cookie-parser');
const compression = require('compression');
const { authCheck } = require('./middlewares');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(compression());
app.use(authCheck);
app.use(express.static(join(__dirname, '..', 'public')));

app.set('port', 3000);

module.exports = app;