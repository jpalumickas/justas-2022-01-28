import { Platform } from 'react-native';
import { getDeviceId } from 'react-native-device-info';

// Throttle iOS devices by model year
const getIosThrottleItem = (): number => {
  const deviceId = getDeviceId(); // Example: iPhone7,2
  const versionString = deviceId.replace('iPhone', '');

  if (!versionString) {
    return 500;
  }

  const version = parseInt(versionString, 10);

  // https://www.theiphonewiki.com/wiki/Models#iPhone
  if (version >= 12) {
    // iPhone 11 or up
    return 320;
  } else if (version >= 10) {
    // iPhone 8, iPhone X
    return 450;
  }

  return 800;
};

export const getThrottleTime = () => {
  if (Platform.OS === 'ios') {
    return getIosThrottleItem();
  }

  return 400;
};
