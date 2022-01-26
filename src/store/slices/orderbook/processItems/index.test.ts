import { processItems } from './index';

describe('When providing asks', () => {
  test('returns correct items with totals', () => {
    const data = [
      { price: 1000, size: 50 },
      { price: 1005, size: 100 },
      { price: 1010, size: 1000 },
    ];

    const result = [
      { price: 1010, size: 1000, total: 1150 },
      { price: 1005, size: 100, total: 150 },
      { price: 1000, size: 50, total: 50 },
    ];

    expect(processItems(data, 'asks')).toEqual(result);
  });
});

describe('When providing bids', () => {
  test('returns correct items with totals', () => {
    const data = [
      { price: 1000, size: 50 },
      { price: 1005, size: 100 },
      { price: 1010, size: 1000 },
    ];

    const result = [
      { price: 1010, size: 1000, total: 1000 },
      { price: 1005, size: 100, total: 1100 },
      { price: 1000, size: 50, total: 1150 },
    ];

    expect(processItems(data, 'bids')).toEqual(result);
  });
});
