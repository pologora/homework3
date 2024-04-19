/* eslint-disable no-undef */
const filterUniqueWords = require('../functions/task2-composition/filterUniqueWords');

describe('Filter unique words', () => {
  test('should filter unique words', () => {
    const arrWords = 'a b b c hello HeLlo';
    expect(filterUniqueWords(arrWords)).toEqual(['a', 'b', 'c', 'hello']);
  });
});
