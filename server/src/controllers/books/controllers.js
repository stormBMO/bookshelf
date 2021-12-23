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
    // const sqlQuery = `SELECT DISTINCT book.* FROM Book as book JOIN BookNovelLink AS link ON book.id = link.id_book JOIN Novel as novel ON link.id_novel = novel.id WHERE novel.title LIKE '%${req.query.title}%' AND novel.genre LIKE '%${req.query.genre}%' AND novel.genre LIKE '%${req.query.author}%' ORDER BY book.bookshelf`;

    const sqlQuery = `SELECT DISTINCT b.* FROM Novel n JOIN BookNovelLink l on n.id = l.id_novel JOIN Book b on b.id = l.id_book WHERE INSTR(n.title, '${req.query.title}') > 0 AND INSTR(n.author, '${req.query.author}') > 0 AND INSTR(n.genre, '${req.query.genre}') > 0 ORDER BY b.bookshelf LIMIT 0, 100;`

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.set('Access-Control-Allow-Origin', '*');
        res.json(result);
    });
}

const getBooksCountByGenre = (req, res) => {
    const sqlQuery = `
    SELECT COUNT(*) FROM 
    (SELECT MAX(b.id), MAX(b.bookshelf),  MAX(b.publishing), MAX(b.author), MAX(b.edition), b.title
    FROM Book b
    JOIN BookNovelLink l on b.id = l.id_book
    JOIN Novel n on n.id = l.id_novel
    WHERE INSTR(b.author, '') > 0 AND INSTR(n.genre, '${req.query.genre}') > 0
    group by b.title) as tmp
    LIMIT 0, 100;
    `;

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
    getBooksCountByGenre
}