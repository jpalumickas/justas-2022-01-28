import React from 'react';
import { useAppSelector } from '~/hooks';
import { List } from '../List';
import { takeRight } from 'lodash';

export const AsksList = () => {
  const asks = useAppSelector((state) => state.orderbook.render.asks);

  return <List items={takeRight(asks, 10)} type="asks" />;
};
