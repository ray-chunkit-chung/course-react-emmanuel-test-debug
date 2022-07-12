/* eslint-disable no-undef */
import dummyData from '../data/dummy.json';

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

// Mocking data
jest.mock('../data/dummy.json', () => [
  {
    id: 999,
    title: 'mock',
    category: 'mock',
    description: 'mock',
    link: 'mock',
    release_date: 'mock',
    views: 'mock',
    image: 'mock',
  },
]);
describe('mock data for string-equal-string test', () => {
  it('count letters correctly', () => {
    expect(dummyData).toEqual([
      {
        id: 999,
        title: 'mock',
        category: 'mock',
        description: 'mock',
        link: 'mock',
        release_date: 'mock',
        views: 'mock',
        image: 'mock',
      },
    ]);
  });
});
