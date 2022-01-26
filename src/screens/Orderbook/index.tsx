import React from 'react';
import { StatusBar, Pressable } from 'react-native';
import { useAppDispatch } from '~/hooks';
import { useDataStream } from './hooks/useDataStream';
import { Box, Text, SafeAreaView } from '~/components';
import { toggleProduct } from '~/store/slices/orderbook';
import { AsksList } from './AsksList';
import { BidsList } from './BidsList';

export const Orderbook = () => {
  useDataStream();

  const dispatch = useAppDispatch();

  const onTogglePress = () => {
    dispatch(toggleProduct());
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <Box flex={1} backgroundColor="gray-900">
        <Text fontSize="lg">Order Book</Text>
        <Box
          flexDirection="row"
          paddingX={8}
          paddingY={2}
          borderTopWidth={1}
          borderBottomWidth={1}
        >
          <Box flex={1} alignItems="flex-end">
            <Text fontSize="sm">PRICE</Text>
          </Box>
          <Box flex={1} alignItems="flex-end">
            <Text fontSize="sm">SIZE</Text>
          </Box>
          <Box flex={1} alignItems="flex-end">
            <Text fontSize="sm">TOTAL</Text>
          </Box>
        </Box>
        <Text color="red">Asks</Text>
        <AsksList />
        <Text color="green">Bids</Text>
        <BidsList />
      </Box>
      <Pressable onPress={onTogglePress}>
        <Text>Toggle</Text>
      </Pressable>
    </SafeAreaView>
  );
};
