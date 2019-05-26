const express = require("express");
const app = express();

const quotes = require('./data/quotes')

app.get("/", (req, res) => {
  const index = Math.floor(Math.random() * quotes.length)
  res.json(quotes[index]);
});

// const port = 3000;
// app.listen(port, () => console.log(`App running at http://localhost:${port}!`));

module.exports = app
