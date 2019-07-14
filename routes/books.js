const express = require('express');
const router = express.Router();


const Book = require('../models/bookModel');

router.get('/', (req, res) => {
  Book.find((err, books) => {
    if (err)
      console.log(err);
    res.json(books);
  })
});

router.post('/', (req, res) => {
  Book.create({
    title: req.body.title,
    author: req.body.author,
    yearPublished: req.body.yearPublished
  }, (err, books) => {
    if (err)
      console.log(err);
    Book.find((err, books) => {
      if (err)
        console.log(err);
      res.json(books);
    })
  })
});

router.put('/:id', (req, res) => {
  Book.findById(req.params.id, (err, book) => {
    book.update(req.body, (err, books) => {
      if (err)
        console.log(err);
      Book.find((err, books) => {
        if (err)
          console.log(err);
        res.json(books);
      })
    })
  })
});

router.delete('/:id', (req, res) => {
  Book.remove({_id: req.params.id}, (err, books) => {
      if (err)
        console.log(err);
      Book.find((err, books) => {
        if (err)
          console.log(err);
        res.json(books);
      })
    })
});

module.exports = router;
