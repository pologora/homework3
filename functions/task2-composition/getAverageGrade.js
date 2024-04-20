const compose = require('../helpers/compose');

const getAllGrades = (arr) => arr.flatMap((student) => student.grade);

const getAverage = (arr) =>
  arr.reduce((acc, item) => acc + item, 0) / arr.length;

const getRound = (num) => Math.round(num);

const getAverageGrade = compose(getAllGrades, getAverage, getRound);

module.exports = getAverageGrade;
