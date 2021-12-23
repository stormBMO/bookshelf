const express = require('express');
const controllerBook = require('../controllers/books/controllers');
const controllerNovel = require('../controllers/novels/controllers');
const controllerMain = require('../controllers/index')
const router = new express.Router();


router.get('/books', controllerBook.getBooks);
router.get('/book/:bookId', controllerBook.getBookById);
router.get('/novels', controllerNovel.getNovels);
router.get('/novel/:novelId', controllerNovel.getNovelById);
router.get('/book', controllerBook.getBookByParams);
router.get('/book-by-novel', controllerBook.getBooksByNovel);
router.get('/novel', controllerNovel.getNovelByParams);
router.get('/bookshelfs-amount', controllerMain.getAmountOfBookshelfs);
router.get('/bookshelfs', controllerMain.getAllBookshelfs);


module.exports = router;