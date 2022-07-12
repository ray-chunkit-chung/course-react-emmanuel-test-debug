/* eslint-disable no-undef */

import data from '../data/dummy.json';

const numItems = data.length;

test('Number of items = 5', () => {
  expect(numItems).toBe(5);
});

test('Number of items = 5', () => {
  expect(numItems).toBeGreaterThanOrEqual(5);
});
