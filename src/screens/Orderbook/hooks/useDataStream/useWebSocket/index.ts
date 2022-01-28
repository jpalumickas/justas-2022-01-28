import { useRef, useCallback, useEffect } from 'react';
import { useAppDispatch } from '~/hooks';
import {
  webSocketConnected,
  webSocketDisconnected,
  setWebSocketError,
} from '~/store/slices/orderbook';

type Props = {
  onMessage?: (event: WebSocketMessageEvent) => void;
};

export const useWebSocket = ({ onMessage }: Props = {}) => {
  const dispatch = useAppDispatch();
  const webSocketRef = useRef<WebSocket | null>(null);

  const openConnection = useCallback(() => {
    webSocketRef.current = new WebSocket(process.env.ORDERBOOK_WEBSOCKET_URL);

    webSocketRef.current.onopen = () => {
      dispatch(webSocketConnected());
    };

    webSocketRef.current.onclose = () => {
      dispatch(webSocketDisconnected());
    };

    webSocketRef.current.onerror = (error) => {
      if (error.message) {
        dispatch(setWebSocketError(error.message));
      }
    };

    return webSocketRef.current;
  }, [dispatch]);

  useEffect(() => {
    const webSocket = openConnection();

    return () => webSocket.close();
  }, [openConnection]);

  useEffect(() => {
    if (webSocketRef.current && onMessage) {
      webSocketRef.current.onmessage = onMessage;
    }
  }, [onMessage, webSocketRef]);

  return {
    webSocket: webSocketRef.current,
  };
};
