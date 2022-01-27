import React, { FC, memo } from 'react';
import { useAppSelector } from '~/hooks';
import { List } from '../List';

export const BidsList: FC = memo(() => {
  const bids = useAppSelector((state) => state.orderbook.render.bids);

  return <List items={bids} type="bids" />;
});
