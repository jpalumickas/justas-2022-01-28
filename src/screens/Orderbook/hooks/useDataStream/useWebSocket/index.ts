import { useRef, useState, useCallback, useEffect } from 'react';
import { useAppSelector } from '~/hooks';

type Props = {
  onMessage?: (event: WebSocketMessageEvent) => void;
};

export const useWebSocket = ({ onMessage }: Props = {}) => {
  const appProductId = useAppSelector((state) => state.orderbook.productId);
  const isWebSocketPaused = useAppSelector(
    (state) => state.orderbook.isWebSocketPaused,
  );
  const webSocketRef = useRef<WebSocket | null>(null);
  const [connected, setConnected] = useState(false);
  const [currentProductId, setCurrentProductId] = useState<string | null>(null);

  const openConnection = useCallback(() => {
    webSocketRef.current = new WebSocket(process.env.ORDERBOOK_WEBSOCKET_URL);

    webSocketRef.current.onopen = () => {
      setConnected(true);
    };

    webSocketRef.current.onclose = () => {
      setConnected(false);
    };

    return webSocketRef.current;
  }, []);

  useEffect(() => {
    const webSocket = openConnection();

    return () => webSocket.close();
  }, [openConnection]);

  useEffect(() => {
    if (webSocketRef.current && onMessage) {
      webSocketRef.current.onmessage = onMessage;
    }
  }, [connected, onMessage, webSocketRef]);

  const subscribeProduct = useCallback(
    (productId: string) => {
      if (!webSocketRef.current) return;

      setCurrentProductId(productId);
      webSocketRef.current.send(
        JSON.stringify({
          event: 'subscribe',
          feed: 'book_ui_1',
          product_ids: [productId],
        }),
      );
    },
    [webSocketRef],
  );

  const unsubscribeProduct = useCallback(
    (productId: string) => {
      if (!webSocketRef.current) return;

      setCurrentProductId(null);
      webSocketRef.current.send(
        JSON.stringify({
          event: 'unsubscribe',
          feed: 'book_ui_1',
          product_ids: [productId],
        }),
      );
    },
    [webSocketRef],
  );

  useEffect(() => {
    if (isWebSocketPaused) {
      if (currentProductId) {
        unsubscribeProduct(currentProductId);
      }

      return;
    }
    if (!connected || appProductId === currentProductId) {
      return;
    }

    if (currentProductId) {
      unsubscribeProduct(currentProductId);
    }

    subscribeProduct(appProductId);
  }, [
    isWebSocketPaused,
    appProductId,
    currentProductId,
    subscribeProduct,
    unsubscribeProduct,
    connected,
  ]);

  return {
    connected,
    subscribeProduct,
    unsubscribeProduct,
    webSocket: webSocketRef.current,
  };
};
