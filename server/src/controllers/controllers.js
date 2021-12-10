const { validationResult } = require('express-validator');
const database = require('../db');

const initDatabase = (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS emails(id int AUTO_INCREMENT, firstname VARCHAR(50), lastname VARCHAR(50), email VARCHAR(50), PRIMARY KEY(id))';

    database.query(sqlQuery, (err) => {
        if (err) throw err;

        res.send('Table created!')
    });
};

const getBooks = (req, res) => {
    const sqlQuery = 'SELECT * FROM Book';

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.set('Access-Control-Allow-Origin', '*');
        res.json({ 'Books': result });
    });
};

const addSubscriber = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const Book = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
        };

        const sqlQuery = 'INSERT INTO emails SET ?';

        database.query(sqlQuery, subscriber, (err, row) => {
            if (err) throw err;

            res.send('Subscribed successfully!');
        });
    }
};

module.exports = {
    initDatabase,
    getBooks,
    addSubscriber
}