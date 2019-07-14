const db = require('mongoose');

const AuthorSchema = db.Schema({
    fullName: String,
    genre: String,
    nationality: String,
});

module.exports = db.model('Author', AuthorSchema);