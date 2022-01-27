import React, { memo } from 'react';
import _ from 'lodash';
import { Box, Text } from '~/components';
import { RootState } from '~/store';
import { useAppSelector } from '~/hooks';

const selector = (state: RootState) => {
  const lowestAsk = _.last(state.orderbook.render.asks)?.price;
  const highestBid = _.first(state.orderbook.render.bids)?.price;

  return { lowestAsk, highestBid };
};

export const Spread = memo(() => {
  const { lowestAsk, highestBid } = useAppSelector(selector);

  if (!lowestAsk || !highestBid) {
    return (
      <Box alignItems="center" justifyContent="center" height={8}>
        <Text color="gray-600">Loading...</Text>
      </Box>
    );
  }

  const spread = Math.abs(highestBid - lowestAsk);
  const spreadPercent =
    lowestAsk > 0 ? _.round((spread / lowestAsk) * 100, 2) : 0;

  return (
    <Box alignItems="center" justifyContent="center" height={8}>
      <Text textAlign="center" color="gray-600">
        Spread: {spread.toFixed(1)} ({spreadPercent.toFixed(2)}%)
      </Text>
    </Box>
  );
});
