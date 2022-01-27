import { snapshotItems } from './index';

test('correctly overwrites state', () => {
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

  const asksResult = [
    { price: 1000, size: 100 },
    { price: 1020, size: 200 },
  ];

  expect(snapshotItems(data, state, 'asks')).toEqual(asksResult);
  expect(snapshotItems(data, state, 'bids')).toEqual([]);
});
