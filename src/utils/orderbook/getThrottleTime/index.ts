import { Platform } from 'react-native';
import { getTotalMemory } from 'react-native-device-info';
import { getIosThrottleTime } from './getIosThrottleTime';

export const getThrottleTime = () => {
  if (Platform.OS === 'ios') {
    return getIosThrottleTime();
  }

  return 400;
};
