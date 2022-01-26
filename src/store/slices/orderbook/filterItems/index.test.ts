import { filterItems } from './index';

test('returns correct data', () => {
  const data = [
    { price: 1000, size: 0 },
    { price: 1005, size: 100 },
    { price: 1010, size: 1000 },
  ];

  const result = [
    { price: 1005, size: 100 },
    { price: 1010, size: 1000 },
  ];

  expect(filterItems(data)).toEqual(result);
});
