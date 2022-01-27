import { Platform } from 'react-native';
import { getIosThrottleTime } from './getIosThrottleTime';
import { getAndroidThrottleTime } from './getAndroidThrottleTime';

export const getThrottleTime = () => {
  if (Platform.OS === 'ios') {
    return getIosThrottleTime();
  }

  return getAndroidThrottleTime();
};
