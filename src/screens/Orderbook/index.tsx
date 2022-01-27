import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useAppDispatch } from '~/hooks';
import { useDataStream } from './hooks/useDataStream';
import { Box, SafeAreaView } from '~/components';
import { useScreenDimensions } from './hooks/useScreenDimensions';
import { setRenderLimit } from '~/store/slices/orderbook';
import { AsksList } from './AsksList';
import { BidsList } from './BidsList';
import { Header } from './Header';
import { Footer } from './Footer';
import { Spread } from './Spread';
import { ConnectionTooltip } from './ConnectionTooltip';

export const Orderbook = () => {
  const dispatch = useAppDispatch();
  const { itemsCount } = useScreenDimensions();
  useDataStream();

  useEffect(() => {
    dispatch(setRenderLimit(itemsCount));
  }, [dispatch, itemsCount]);

  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <Box flex={1} backgroundColor="gray-900">
          <Header />
          <Box>
            <AsksList />
            <Spread />
            <BidsList />
          </Box>
          <Footer />
        </Box>
      </SafeAreaView>
      <ConnectionTooltip />
    </>
  );
};
