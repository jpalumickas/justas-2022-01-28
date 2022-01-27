import { bytesToGb } from './index';

test('returns correct value', () => {
  expect(bytesToGb(1975018240)).toEqual(1.98);
});
