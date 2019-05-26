const quotes = require('../../data/quotes')

const Query = {
  quotes: (_, params) => {
    const index = Math.floor(Math.random() * quotes.length)
    return quotes[index]
  },
}

module.exports = Query
