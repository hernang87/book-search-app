const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/books', require('./api/books'));

app.listen(port, () => console.log(`Listening on port ${port}`));