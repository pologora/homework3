/* eslint-disable function-paren-newline */
/* eslint-disable no-undef */
const getFullName = require('../functions/task2-composition/getFullName');

describe('Get full name', () => {
  test('function should returns full name', () => {
    const person = { age: 33, firstName: 'Name', lastName: 'Last' };
    expect(getFullName(person)).toEqual('Name Last');
  });
  test('function should throw an error if object lack of one of the properties', () => {
    expect(() => getFullName({ firstName: 'Goga' })).toThrow();
  });
  test('function should throw an error if an argument is null', () => {
    expect(() => getFullName(null)).toThrow();
  });
  test('function should throw an error if argument is not an object', () => {
    expect(() => getFullName(54)).toThrow();
    expect(() => getFullName([54, 33])).toThrow();
    expect(() => getFullName('kosmos')).toThrow();
  });
  test('function should throw if required properties in object are not strings', () => {
    expect(() => getFullName({ firstName: 35, lastName: 'Last' })).toThrow();
    expect(() => getFullName({ firstName: {}, lastName: 'Last' })).toThrow();
    expect(() =>
      getFullName({ firstName: ['Micha'], lastName: 'Last' }),
    ).toThrow();
  });
});
