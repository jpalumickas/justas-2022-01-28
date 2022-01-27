import React, { useCallback, FC } from 'react';
import { FlatList } from 'react-native';
import { useScreenDimensions, ITEM_HEIGHT } from '../hooks/useScreenDimensions';
import { OrderbookItem } from '../types';
import Item from './Item';

const keyExtractor = (item: OrderbookItem) => item.price.toString();

const getItemLayout = (
  data: OrderbookItem[] | null | undefined,
  index: number,
) => ({
  length: ITEM_HEIGHT,
  offset: ITEM_HEIGHT * index,
  index,
});

type Props = {
  items: OrderbookItem[];
  type: 'asks' | 'bids';
};

export const List: FC<Props> = ({ items, type }) => {
  const { listHeight } = useScreenDimensions();
  const renderItem = useCallback(
    ({ item }: { item: OrderbookItem }) => {
      return <Item item={item} type={type} />;
    },
    [type],
  );

  return (
    <FlatList
      style={{ height: listHeight }}
      scrollEnabled={false}
      getItemLayout={getItemLayout}
      data={items}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};
