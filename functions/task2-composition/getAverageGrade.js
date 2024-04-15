const getLength = (arr) => arr.length;

const sumGrades = (students) =>
  students.reduce((acc, student) => acc + student.grade, 0);

const divide = (a, b) => a / b;

const getAverageGrade = (arr) => divide(sumGrades(arr), getLength(arr));

module.exports = getAverageGrade;
