import { useRef, useState, useCallback, useEffect } from 'react';

export const useWebSocket = () => {
  const webSocketRef = useRef(
    new WebSocket(process.env.ORDERBOOK_WEBSOCKET_URL),
  );
  const [connected, setConnected] = useState(false);

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

  return {
    connected,
    subscribeProduct,
    unsubscribeProduct,
    webSocket: webSocketRef.current,
  };
};
