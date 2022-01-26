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

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, [onForeground, onBackground]);
};
