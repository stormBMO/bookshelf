const database = require('../../db');

const getNovels = (req, res) => {
    const sqlQuery = 'SELECT * FROM Novel';

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.set('Access-Control-Allow-Origin', '*');
        res.json(result);
    });
};

const getNovelById = (req, res) => {
    const sqlQuery = 'SELECT * FROM Novel WHERE id = ' + req.params.novelId;

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.set('Access-Control-Allow-Origin', '*');
        res.json(result);
    });
};

module.exports = {
    getNovels,
    getNovelById,
}