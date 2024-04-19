const getLength = (arr) => arr.length;

const studentAvarageGrade = (grades) =>
  grades.reduce((acc, grade) => acc + grade, 0) / grades.length;

const sumGrades = (students) =>
  students.reduce(
    (acc, student) => acc + studentAvarageGrade(student.grade),
    0,
  );

const divide = (a, b) => Math.floor(a / b);

const getAverageGrade = (arr) => divide(sumGrades(arr), getLength(arr));

module.exports = getAverageGrade;
