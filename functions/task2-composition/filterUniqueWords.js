const compose = require('../helpers/compose');

const getWordsFromString = (str) => str.split(' ');

const makeAllLowerCase = (arr) => arr.map((i) => i.toLowerCase());

const filterUniq = (arr) => [...new Set(arr)];

const sortByAlphabet = (arr) => arr.toSorted();

const filterUniqueWords = compose(
  getWordsFromString,
  makeAllLowerCase,
  filterUniq,
  sortByAlphabet,
);

module.exports = filterUniqueWords;
