import { arrayDataToObj } from './index';

test('returns correct data', () => {
  const data = [
    [1000, 50],
    [1005, 100],
    [1010, 1000],
  ];

  const result = [
    { price: 1000, size: 50 },
    { price: 1005, size: 100 },
    { price: 1010, size: 1000 },
  ];

  expect(arrayDataToObj(data)).toEqual(result);
});
