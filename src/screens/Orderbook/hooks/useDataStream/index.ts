import { useEffect } from 'react';
import { useWebSocket } from './useWebSocket';
import { useOnMessage } from './useOnMessage';

export const useDataStream = () => {
  const { connected, webSocket, subscribeProduct } = useWebSocket();
  const onMessage = useOnMessage();

  useEffect(() => {
    webSocket.onmessage = onMessage;
  }, [onMessage, webSocket]);

  useEffect(() => {
    if (connected) {
      // subscribeProduct('PI_XBTUSD')
    }
  }, [connected, subscribeProduct]);
};
