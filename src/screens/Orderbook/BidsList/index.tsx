import React from 'react';
import { useAppSelector } from '~/hooks';
import { List } from '../List';

export const BidsList = () => {
  const bids = useAppSelector((state) => state.orderbook.render.bids);

  return <List items={bids} type="bids" />;
};
