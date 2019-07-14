const express = require('express');
const router = express.Router();


const Author = require('../models/authorModel');

router.get('/', (req, res) => {
    Author.find((err, authors) => {
        if (err)
            console.log(err);
        res.json(authors);
    })
});

router.post('/', (req, res) => {
    Author.create({
        fullName: req.body.fullName,
        genre: req.body.genre,
        nationality: req.body.nationality,
    }, (err, authors) => {
        if (err)
            console.log(err);
        Author.find((err, authors) => {
            if (err)
                console.log(err);
            res.json(authors);
        })
    })
});

router.put('/:id', (req, res) => {
    Author.findById(req.params.id, (err, author) => {
        author.update(req.body, (err, authors) => {
            if (err)
                console.log(err);
            Author.find((err, authors) => {
                if (err)
                    console.log(err);
                res.json(authors);
            })
        })
    })
});

router.delete('/:id', (req, res) => {
    Author.remove({_id: req.params.id}, (err, authors) => {
        if (err)
            console.log(err);
        Author.find((err, authors) => {
            if (err)
                console.log(err);
            res.json(authors);
        })
    })
});

module.exports = router;
