const database = require('../db');

const initDatabase = (req, res) => {
  const sqlQuery = 'CREATE TABLE IF NOT EXISTS emails(id int AUTO_INCREMENT, firstname VARCHAR(50), lastname VARCHAR(50), email VARCHAR(50), PRIMARY KEY(id))';

  database.query(sqlQuery, (err) => {
    if (err) throw err;

    res.send('Table created!')
  });
};

const getAmountOfBookshelfs = (req, res) => {
  const sqlQuery = 'SELECT DISTINCT bookshelf FROM Book'

  database.query(sqlQuery, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
}

const getAllBookshelfs = (req, res) => {
  const sqlQuery = 'SELECT DISTINCT bookshelf FROM Book'

  const bshelfs = [];

  database.query(sqlQuery, (err, result) => {
    if (err) throw err;

    result.forEach((el, i) => {
      const innerSql = 'SELECT * FROM Book WHERE bookshelf = ' + el.bookshelf

      database.query(innerSql, (err, results) => {
        if (err) throw err;

        bshelfs.push({
          bookshelf: el.bookshelf,
          books: results
        })

        if (i == result.length - 1) {
          res.set('Access-Control-Allow-Origin', '*');
          res.send(bshelfs);
        }
      });
    })

  });
}

module.exports = {
  getAllBookshelfs,
  getAmountOfBookshelfs
}