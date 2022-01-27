import React, { FC, memo } from 'react';
import { useAppSelector } from '~/hooks';
import { List } from '../List';

export const AsksList: FC = memo(() => {
  const asks = useAppSelector((state) => state.orderbook.render.asks);

  return <List items={asks} type="asks" />;
});
