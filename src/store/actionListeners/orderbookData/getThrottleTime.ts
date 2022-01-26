import { Platform } from 'react-native';

export const getThrottleTime = () => {
  if (Platform.OS === 'ios') {
    return 250;
  }

  return 300;
};
