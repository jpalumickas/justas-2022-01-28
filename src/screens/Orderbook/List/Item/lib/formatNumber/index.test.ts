import { formatNumber } from './index';

test('returns correct value for 123', () => {
  expect(formatNumber(123)).toEqual('123.00');
});

test('returns correct value for 123456.78', () => {
  expect(formatNumber(123456.78)).toEqual('123,456.78');
});
