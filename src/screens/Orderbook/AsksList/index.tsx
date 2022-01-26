import React from 'react';
import { useAppSelector } from '~/hooks';
import { List } from '../List';

export const AsksList = () => {
  const asks = useAppSelector((state) => state.orderbook.render.asks);

  return <List items={asks} type="asks" />;
};
