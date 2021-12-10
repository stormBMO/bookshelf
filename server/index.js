const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./src/routes/routes');

app.use(express.json());
app.use(routes);
app.use(cors());
app.options('*', cors());

app.listen(9898, () => {
    console.log('Server running!');
});