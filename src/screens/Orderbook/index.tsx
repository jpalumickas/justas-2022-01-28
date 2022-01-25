import React from 'react';
import { StatusBar } from 'react-native';
import { take, orderBy } from 'lodash';
import { useAppSelector } from '~/hooks';
import { useDataStream } from './hooks/useDataStream';
import { Box, Text, SafeAreaView } from '~/components';
import { List } from './List';

export const Orderbook = () => {
  useDataStream();

  const asks = useAppSelector((state) => state.orderbook.asks);
  const bids = useAppSelector((state) => state.orderbook.bids);

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <Box flex={1} backgroundColor="gray-900">
        <Text fontSize="lg">Order Book</Text>
        <Text>x</Text>
        <Text>x</Text>
        <Text>x</Text>
        <List items={take(orderBy(bids, ['price'], ['desc']), 10)} />
        <List items={take(orderBy(asks, ['price'], ['asc']), 10)} />
      </Box>
    </SafeAreaView>
  );
};
