const express = require('express');
const api = express();

const booksRouter = require('./books');
const authorsRouter = require('./authors');

api.use('/books', booksRouter);
api.use('/authors', authorsRouter);


module.exports = api;