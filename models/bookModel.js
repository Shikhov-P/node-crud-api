const db = require('mongoose');

const BookSchema = db.Schema({
    title: String,
    author: String,
    yearPublished: Number
});

module.exports = db.model('Book', BookSchema);