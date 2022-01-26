import { useCallback } from 'react';
import { useAppDispatch } from '~/hooks';
import { snapshotData, mergeData } from '~/store/slices/orderbook';

type Message = {
  feed: 'book_ui_1' | 'book_ui_1_snapshot';
  product_id: string;
  bids: [number, number][];
  asks: [number, number][];
};

export const useOnMessage = () => {
  const dispatch = useAppDispatch();

  const onMessage = useCallback(
    ({ data: rawData }) => {
      const data: Message = JSON.parse(rawData);

      if (data.feed === 'book_ui_1_snapshot') {
        dispatch(snapshotData(data));
      } else if (data.feed === 'book_ui_1') {
        dispatch(mergeData(data));
      }
    },
    [dispatch],
  );

  return onMessage;
};
