const database = require('../../db');

const getNovel = (req, res) => {
    const sqlQuery = 'SELECT * FROM Novel';

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.set('Access-Control-Allow-Origin', '*');
        res.json(result);
    });
};

module.exports = {
    getNovel,
}