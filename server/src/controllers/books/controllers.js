const {
    validationResult
} = require('express-validator');
const database = require('../../db');

const getBooks = (req, res) => {
    const sqlQuery = 'SELECT * FROM Book ORDER BY bookshelf';

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.set('Access-Control-Allow-Origin', '*');
        res.json(result);
    });
};

const getBookById = (req, res) => {
    const sqlQuery = 'SELECT * FROM Book WHERE id = ' + req.params.bookId;

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.set('Access-Control-Allow-Origin', '*');
        res.json(result);
    });
}

const getBooksByNovel = (req, res) => {
    const sqlQuery = `SELECT DISTINCT book.* FROM Book as book JOIN BookNovelLink AS link ON book.id = link.id_book JOIN Novel as novel ON link.id_novel = novel.id WHERE novel.title LIKE '%${req.query.title}%' AND novel.genre LIKE '%${req.query.genre}%' AND novel.genre LIKE '%${req.query.author}%' ORDER BY book.bookshelf`;

    
    
    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.set('Access-Control-Allow-Origin', '*');
        res.json(result);
    });
}

const getBookByParams = (req, res) => {
    let sqlQuery = `SELECT * FROM Book WHERE author LIKE '%${req.query.author || ''}%' AND title LIKE '%${req.query.title || ''}%' AND edition LIKE '%${req.query.edition || ''}%'`;

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.set('Access-Control-Allow-Origin', '*');
        res.json(result);
    });
}

module.exports = {
    getBooks,
    getBookById,
    getBookByParams,
    getBooksByNovel,
}