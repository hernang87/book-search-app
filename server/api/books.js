const express = require('express');
const rp = require('request-promise');

const router = express.Router();

let books = [];
const refreshRate = 1000 * 60 * 60; // Every hour

const fetchBooks = () => rp('http://de-coding-test.s3.amazonaws.com/books.json');

const refreshBookData = (response) => fetchBooks().then(response => books = JSON.parse(response));

const init = () => {
  refreshBookData();
  setInterval(() => refreshBookData(), refreshRate);
};

router.get('/', (req, res) => {
  res.status(200).send(books);
});

router.get('/search', (req, res) => {
  const query = req.query.q;
  const page = parseInt(req.query.page) || 1;
  const pageSize = 10;
  const startIndex = pageSize * (page - 1);

  if (!query) res.status(400).send({ message: 'No q param provided'});

  const regex = new RegExp(`.*(${query}).*`, 'gi');

  const results = books.filter(book => (
    book.title.match(regex)
    || (book.author && book.author.match(regex))
  ));

  const totalResults = results.length;
  const totalPages = Math.ceil(results.length / pageSize);

  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  res.status(200).send({
    totalResults,
    totalPages,
    page,
    results: results.splice(startIndex, pageSize)
  });

});

init();

module.exports = router;