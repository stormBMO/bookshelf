const database = require('../db');

const initDatabase = (req, res) => {
  const sqlQuery =  'CREATE TABLE IF NOT EXISTS emails(id int AUTO_INCREMENT, firstname VARCHAR(50), lastname VARCHAR(50), email VARCHAR(50), PRIMARY KEY(id))';

  database.query(sqlQuery, (err) => {
      if (err) throw err;

      res.send('Table created!')
  });
};
