import React from 'react';
import { useAppSelector } from '~/hooks';
import { List } from '../List';
import { take } from 'lodash';

export const BidsList = () => {
  const bids = useAppSelector((state) => state.orderbook.render.bids);

  return <List items={take(bids, 10)} type="bids" />;
};
