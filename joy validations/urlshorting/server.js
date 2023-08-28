const express = require('express');
// const {nanoid} = require('nanoid');


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/shorten', (req, res) => {
  const id = nanoid(8);
  const url = req.body.url;
  // Store the URL-ID mapping in a database or cache
  const shortUrl = `http://localhost:${port}/${id}`;
  res.send(`Your shortened URL is: <a href="${shortUrl}">${shortUrl}</a>`);
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  // Look up the URL from the database using the ID
  const longUrl = 'https://www.example.com';
  res.redirect(longUrl);
});

app.listen(port, () => {
  console.log(`URL shortener listening at http://localhost:${port}`);
});