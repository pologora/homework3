const compose = require('../helpers/compose');

const getWordsFromString = (str) => str.split(' ');

const filterUniq = (arr) => [...new Set(arr)];

const sortByAlphabet = (arr) => arr.toSorted();

const filterUniqueWords = compose(
  getWordsFromString,
  filterUniq,
  sortByAlphabet,
);

module.exports = filterUniqueWords;
