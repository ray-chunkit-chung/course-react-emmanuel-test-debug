/* eslint-disable no-undef */

// function to be test
const countLetters = (data) => data.length;

// TDD test driven development
describe('TDD example -- write the test first, then write the code to pass the test', () => {
  const data = 'abc';
  it('count letters correctly', () => {
    const results = countLetters(data);
    expect(results).toEqual(3);
  });
});
