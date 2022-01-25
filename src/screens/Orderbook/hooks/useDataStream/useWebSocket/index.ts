import { useRef, useState, useCallback, useEffect } from 'react';
import { useAppSelector } from '~/hooks';

export const useWebSocket = () => {
  const appProductId = useAppSelector((state) => state.orderbook.productId);
  const webSocketRef = useRef(
    new WebSocket(process.env.ORDERBOOK_WEBSOCKET_URL),
  );
  const [connected, setConnected] = useState(false);
  const [currentProductId, setCurrentProductId] = useState<string | null>(null);

  useEffect(() => {
    const { current: webSocket } = webSocketRef;

    webSocketRef.current.onopen = () => {
      setConnected(true);
    };

    webSocketRef.current.onclose = () => {
      setConnected(false);
    };

    return () => webSocket.close();
  }, [webSocketRef]);

  const subscribeProduct = useCallback(
    (productId: string) => {
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
    if (!connected) return;
    if (appProductId === currentProductId) {
      return;
    }

    if (currentProductId) {
      unsubscribeProduct(currentProductId);
    }
    subscribeProduct(appProductId);
  }, [
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
