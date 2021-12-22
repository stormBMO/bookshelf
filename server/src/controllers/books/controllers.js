const {
    validationResult
} = require('express-validator');
const database = require('../../db');

const getBooks = (req, res) => {
    const sqlQuery = 'SELECT * FROM Book';

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
}