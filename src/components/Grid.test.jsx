/* eslint-disable no-undef */

import data from '../data/dummy.json';

const numItems = data.length;
const dataTest = data[0].title;

describe('num and string', () => {
// Test numbers
  test('Number of items = 5', () => {
    expect(numItems).toBe(5);
  });

  test('Number of items = 5', () => {
    expect(numItems).toBeGreaterThanOrEqual(5);
  });

  // Test string

  test('title contains jack', () => {
    expect(dataTest).toMatch(/jack/);
  });

  test('title contains jack', () => {
    expect(dataTest).toContain('jack');
  });
});

describe('array and object', () => {
  // Test items in array
  const dataArray = ['fun', 'jack'];
  test('title list contains jack', () => {
    expect(['fun', 'jack', 'tom']).toEqual(expect.arrayContaining(dataArray));
  });

  //  Test Object
  test('title list contains jack', () => {
    expect(data[0]).toHaveProperty('title');
  });
});
