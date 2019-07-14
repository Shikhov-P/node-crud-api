const express = require('express');
const db = require('mongoose');
const apiRouter = require('./routes/api');

db.connect('mongodb://localhost:27017/nodejsapi');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
