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

    const sqlQuery = `SELECT DISTINCT b.* 
    FROM Novel n JOIN BookNovelLink l 
    on n.id = l.id_novel 
    JOIN Book b on b.id = l.id_book 
    WHERE INSTR(n.title, '${req.query.title || ''}') > 0 
    AND 
    INSTR(n.author, '${req.query.author || ''}') > 0
    AND 
    INSTR(n.genre, '${req.query.genre || ''}') > 0 
    ORDER BY b.bookshelf 
    LIMIT 0, 100;
    `

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.set('Access-Control-Allow-Origin', '*');
        res.json(result);
    });
}

const getDuplicateBooks = (req, res) => {
    const sqlQuery = `
    SELECT * 
    FROM Book
    WHERE INSTR(title, '${req.query.title}') > 0 
    AND 
    INSTR(author, '${req.query.author}') > 0
    ORDER BY bookshelf 
    LIMIT 0, 100;
    `

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.set('Access-Control-Allow-Origin', '*');
        res.json(result);
    });
}

const getBooksCountByGenre = (req, res) => {
    const sqlQuery = `
    SELECT COUNT(*) as Amount FROM Novel 
    WHERE INSTR(author, '${req.query.author || ''}') > 0 
    ${req.query.conc == 'true' ? 'OR' : 'AND'}
    INSTR(title, '${req.query.title || ''}') > 0
    LIMIT 0, 100;
    `;

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.set('Access-Control-Allow-Origin', '*');
        res.json(result);
    });
}

const getBookByParams = (req, res) => {

    if (req.query.bookshelf.length > 0 && isNaN(parseInt(req.query.bookshelf))) {
        return
    }

    let sqlQuery = `
    SELECT DISTINCT b.* FROM Novel n 
    JOIN BookNovelLink l ON l.id_novel = n.id
    JOIN Book b ON b.id = l.id_book
    WHERE INSTR(n.genre, '${req.query.genre || ''}') > 0
    AND INSTR(b.author, '${req.query.author || ''}') > 0
    ${req.query.conc == 'true' ? 'OR' : 'AND'}
    INSTR(b.title, '${req.query.title || ''}') > 0
    ${req.query.bookshelf.length > 0 ? `AND bookshelf = ${req.query.bookshelf}` : ``}
    ORDER BY bookshelf
    LIMIT 0, 100;
    `;

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
    getBooksCountByGenre,
    getDuplicateBooks
}