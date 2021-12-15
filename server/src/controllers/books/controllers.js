const { validationResult } = require('express-validator');
const database = require('../../db');

const getBooks = (req, res) => {
    const sqlQuery = 'SELECT * FROM Book';

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.set('Access-Control-Allow-Origin', '*');
        res.json(result);
    });
};

module.exports = {
    getBooks,
}