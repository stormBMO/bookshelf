const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./src/routes/routes');

app.use(express.json());
app.options('*', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set("Access-Control-Allow-Headers", "Content-Type");
});
app.use(routes);

app.listen(9898, () => {
    console.log('Server running!');
});