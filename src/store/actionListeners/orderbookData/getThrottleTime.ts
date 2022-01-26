import { Platform } from 'react-native';

export const getThrottleTime = () => {
  if (Platform.OS === 'ios') {
    return 280;
  }

  return 320;
};
