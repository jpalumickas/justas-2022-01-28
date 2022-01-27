import RNDeviceInfo from 'react-native-device-info';
import { getIosThrottleTime } from './index';

const getDeviceId = RNDeviceInfo.getDeviceId as jest.MockedFunction<any>;

beforeEach(() => {
  getDeviceId.mockReset();
});

describe('When iPhone13,1', () => {
  test('returns correct time', () => {
    getDeviceId.mockImplementation(() => {
      return 'iPhone13,1';
    });

    expect(getIosThrottleTime()).toEqual(320);
  });
});

describe('When iPhone12,2', () => {
  test('returns correct time', () => {
    getDeviceId.mockImplementation(() => {
      return 'iPhone12,2';
    });

    expect(getIosThrottleTime()).toEqual(320);
  });
});

describe('When iPhone10,2', () => {
  test('returns correct time', () => {
    getDeviceId.mockImplementation(() => {
      return 'iPhone10,2';
    });

    expect(getIosThrottleTime()).toEqual(450);
  });
});

describe('When iPhone9,1', () => {
  test('returns correct time', () => {
    getDeviceId.mockImplementation(() => {
      return 'iPhone9,1';
    });

    expect(getIosThrottleTime()).toEqual(800);
  });
});
