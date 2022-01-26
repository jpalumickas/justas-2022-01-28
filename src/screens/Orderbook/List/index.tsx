import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { Box, Text } from '~/components';
import { OrderbookItem } from '../types';

const keyExtractor = (item: OrderbookItem) => item.price.toString();

const renderItem = ({ item }: { item: OrderbookItem }) => {
  return (
    <Box>
      <Text>
        Price: {item.price} Size: {item.size} Total: {item.total}
      </Text>
    </Box>
  );
};

type Props = {
  items: OrderbookItem[];
};

export const List: FC<Props> = ({ items }) => {
  return (
    <FlatList
      style={{ height: 300 }}
      data={items}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};
