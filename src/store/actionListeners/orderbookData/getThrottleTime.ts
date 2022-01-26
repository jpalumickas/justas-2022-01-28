import { Platform } from 'react-native';

export const getThrottleTime = () => {
  if (Platform.OS === 'ios') {
    return 300;
  }

  return 400;
};
