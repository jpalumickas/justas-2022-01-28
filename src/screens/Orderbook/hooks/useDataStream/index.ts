import { useCallback } from 'react';
import { useAppDispatch, useAppStateChange } from '~/hooks';
import { pauseWebSocket } from '~/store/slices/orderbook';
import { useWebSocket } from './useWebSocket';
import { useOnMessage } from './useOnMessage';
import { useProductSubscribe } from './useProductSubscribe';

export const useDataStream = () => {
  const dispatch = useAppDispatch();
  const onMessage = useOnMessage();
  const { webSocket } = useWebSocket({ onMessage });
  useProductSubscribe({ webSocket });

  const onBackground = useCallback(() => {
    dispatch(pauseWebSocket());
  }, [dispatch]);

  useAppStateChange({ onBackground });
};
