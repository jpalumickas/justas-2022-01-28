import React from 'react';
import { StatusBar, Pressable } from 'react-native';
import { take, orderBy } from 'lodash';
import { useAppSelector, useAppDispatch } from '~/hooks';
import { useDataStream } from './hooks/useDataStream';
import { Box, Text, SafeAreaView } from '~/components';
import { List } from './List';
import { toggleProduct } from '~/store/slices/orderbook';

export const Orderbook = () => {
  useDataStream();

  const dispatch = useAppDispatch();

  const asks = useAppSelector((state) => state.orderbook.render.asks);
  const bids = useAppSelector((state) => state.orderbook.render.bids);

  const onTogglePress = () => {
    dispatch(toggleProduct());
  };

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
      <Pressable onPress={onTogglePress}>
        <Text>Toggle</Text>
      </Pressable>
    </SafeAreaView>
  );
};
