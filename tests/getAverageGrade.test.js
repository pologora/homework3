/* eslint-disable no-undef */
const getAverageGrade = require('../functions/task2-composition/getAverageGrade');

describe('Get average grade', () => {
  test('should return average grade of array of students', () => {
    const students = [
      { name: 'John', grade: [88, 92, 100] },
      { name: 'Jane', grade: [82, 90, 86] },
      { name: 'Liza', grade: [82, 97, 86] },
      { name: 'Susan', grade: [77, 80, 82] },
    ];
    expect(getAverageGrade(students)).toBe(80);
  });
});
