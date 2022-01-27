import { useRef, useState, useCallback, useEffect } from 'react';
import { useAppDispatch } from '~/hooks';
import {
  webSocketConnected,
  webSocketDisconnected,
} from '~/store/slices/orderbook';

type Props = {
  onMessage?: (event: WebSocketMessageEvent) => void;
};

export const useWebSocket = ({ onMessage }: Props = {}) => {
  const dispatch = useAppDispatch();
  const webSocketRef = useRef<WebSocket | null>(null);
  const [connected, setConnected] = useState(false);

  const openConnection = useCallback(() => {
    webSocketRef.current = new WebSocket(process.env.ORDERBOOK_WEBSOCKET_URL);

    webSocketRef.current.onopen = () => {
      setConnected(true);
      dispatch(webSocketConnected());
    };

    webSocketRef.current.onclose = () => {
      setConnected(false);
      dispatch(webSocketDisconnected());
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
  }, [connected, onMessage, webSocketRef]);

  return {
    connected,
    webSocket: webSocketRef.current,
  };
};
