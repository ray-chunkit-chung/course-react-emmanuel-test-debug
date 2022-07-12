/* eslint-disable no-undef */

import data from '../data/dummy.json';

// Test numbers
const numItems = data.length;

test('Number of items = 5', () => {
  expect(numItems).toBe(5);
});

test('Number of items = 5', () => {
  expect(numItems).toBeGreaterThanOrEqual(5);
});

// Test string
const dataTest = data[0].title;

test('title contains jack', () => {
  expect(dataTest).toMatch(/jack/);
});

test('title contains jack', () => {
  expect(dataTest).toContain('jack');
});

// Test items in array
const dataArray = ['fun', 'jack'];
test('title list contains jack', () => {
  expect(['fun', 'jack', 'tom']).toEqual(expect.arrayContaining(dataArray));
});

//  Test Object
test('title list contains jack', () => {
  expect(data[0]).toHaveProperty('title');
});
