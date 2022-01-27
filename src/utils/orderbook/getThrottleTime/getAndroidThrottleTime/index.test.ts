import { getAndroidThrottleTime } from './index';

test('returns correct time', () => {
  expect(getAndroidThrottleTime()).toEqual(800);
});
