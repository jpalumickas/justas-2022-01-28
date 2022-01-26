import { useCallback } from 'react';
import { useWebSocket } from './useWebSocket';
import { useOnMessage } from './useOnMessage';
import { useAppDispatch, useAppStateChange } from '~/hooks';
import { pauseWebSocket } from '~/store/slices/orderbook';

export const useDataStream = () => {
  const dispatch = useAppDispatch();
  const onMessage = useOnMessage();
  useWebSocket({ onMessage });

  const onBackground = useCallback(() => {
    dispatch(pauseWebSocket());
  }, [dispatch]);

  useAppStateChange({ onBackground });
};
