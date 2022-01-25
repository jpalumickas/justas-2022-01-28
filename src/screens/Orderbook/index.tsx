import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { take, orderBy } from 'lodash';
import { useAppSelector } from '~/hooks';
import { useDataStream } from './hooks/useDataStream';

const keyExtractor = (item) => item.price;

const renderItem = ({ item: bid }) => {
  return (
    <View key={bid.price}>
      <Text>
        Price: {bid.price} Size: {bid.size}
      </Text>
    </View>
  );
};

export const Orderbook = () => {
  useDataStream();

  const asks = useAppSelector((state) => state.orderbook.asks);
  const bids = useAppSelector((state) => state.orderbook.bids);

  return (
    <View>
      <FlatList
        style={{ height: 300 }}
        data={take(orderBy(bids, ['price'], ['desc']), 10)}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />

      <FlatList
        style={{ height: 300 }}
        data={take(orderBy(asks, ['price'], ['asc']), 10)}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};
