import React, { useCallback, FC } from 'react';
import { FlatList } from 'react-native';
import { OrderbookItem } from '../types';
import Item from './Item';

const keyExtractor = (item: OrderbookItem) => item.price.toString();

type Props = {
  items: OrderbookItem[];
  type: 'asks' | 'bids';
};

export const List: FC<Props> = ({ items, type }) => {
  const renderItem = useCallback(
    ({ item }: { item: OrderbookItem }) => {
      return <Item item={item} type={type} />;
    },
    [type],
  );

  return (
    <FlatList
      style={{ height: 300 }}
      data={items}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};
