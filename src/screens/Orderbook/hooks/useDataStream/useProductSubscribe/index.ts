import { useState, useCallback, useEffect } from 'react';
import { useAppSelector } from '~/hooks';

export const useProductSubscribe = ({
  webSocket,
}: {
  webSocket: WebSocket | null;
}) => {
  const appProductId = useAppSelector((state) => state.orderbook.productId);
  const { isPaused, isConnected } = useAppSelector(
    (state) => state.orderbook.webSocket,
  );
  const [currentProductId, setCurrentProductId] = useState<string | null>(null);

  const subscribeProduct = useCallback(
    (productId: string) => {
      if (!webSocket) {
        return;
      }

      setCurrentProductId(productId);
      webSocket.send(
        JSON.stringify({
          event: 'subscribe',
          feed: 'book_ui_1',
          product_ids: [productId],
        }),
      );
    },
    [webSocket],
  );

  const unsubscribeProduct = useCallback(
    (productId: string) => {
      if (!webSocket) {
        return;
      }

      setCurrentProductId(null);
      webSocket.send(
        JSON.stringify({
          event: 'unsubscribe',
          feed: 'book_ui_1',
          product_ids: [productId],
        }),
      );
    },
    [webSocket],
  );

  useEffect(() => {
    if (!isConnected) {
      setCurrentProductId(null);
      return;
    }

    if (isPaused) {
      if (currentProductId) {
        unsubscribeProduct(currentProductId);
      }

      return;
    }
    if (appProductId === currentProductId) {
      return;
    }

    if (currentProductId) {
      unsubscribeProduct(currentProductId);
    }

    subscribeProduct(appProductId);
  }, [
    isPaused,
    appProductId,
    currentProductId,
    subscribeProduct,
    unsubscribeProduct,
    isConnected,
  ]);
};
