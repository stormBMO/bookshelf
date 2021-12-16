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
    let sqlQuery = 'SELECT * FROM Book';
    // author: 
    // title: 
    // edition:
    // publishing:
    // console.log(req.body[0].author)
    
    if (req.body[0].author && req.body[0].author.length > 0){
        console.log('here')
        // sqlQuery += (` \`author\` LIKE '%${req.body[0].author}%'`)
    }
    if (req.body[0].title && req.body[0].title.length > 0){
        sqlQuery.concat(` title like %${req.body[0].title}% `)
    }

    console.log(sqlQuery)

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