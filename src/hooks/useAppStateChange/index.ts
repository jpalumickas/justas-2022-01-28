import { useRef, useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';

type Props = {
  onForeground?: () => void;
  onBackground?: () => void;
};

export const useAppStateChange = ({ onForeground, onBackground }: Props) => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        if (onForeground) {
          onForeground();
        }
      } else {
        if (onBackground) {
          onBackground();
        }
      }

      appState.current = nextAppState;
    };

    const listener = AppState.addEventListener('change', handleAppStateChange);

    return () => listener.remove();
  }, [onForeground, onBackground]);
};
