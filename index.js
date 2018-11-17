require('dotenv').config();

const express = require('express');
const http_errors = require('http-errors');
const consign = require('consign');
const helmet = require('helmet');
const path = require('path');

const app = express();

app.use(helmet());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(express.static(path.join(__dirname, 'public')));

consign({ cwd: 'app' }).include('api').then('routes').into(app);

app.use(function (req, res, next) {
    if (!req.user) return res.render('error', { error: http_errors(404, 'Page not found.') });
    next();
});

app.listen(process.env.PORT);