const express = require('express');
const controllerBook = require('../controllers/books/controllers');
const controllerNovel = require('../controllers/novels/controllers');
const {
    body
} = require('express-validator');
const router = new express.Router();


router.get('/books', controllerBook.getBooks);
router.get('/novels', controllerNovel.getNovels);

module.exports = router;