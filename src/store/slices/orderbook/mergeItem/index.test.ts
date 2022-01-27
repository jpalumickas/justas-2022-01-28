import { mergeItem } from './index';

test('returns correct data', () => {
  const data = {
    asks: [
      [1000, 100],
      [1020, 200],
    ],
    bids: [],
  };

  const state = {
    asks: [
      { price: 1000, size: 300 },
      { price: 1030, size: 33 },
    ],
    bids: [{ price: 1000, size: 300 }],
  };

  const result = [
    { price: 1000, size: 100 },
    { price: 1020, size: 200 },
    { price: 1030, size: 33 },
  ];

  expect(mergeItem(data, state, 'asks')).toEqual(result);
});
