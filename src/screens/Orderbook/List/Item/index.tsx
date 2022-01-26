import React, { memo, FC } from 'react';
import { Box, Text } from '~/components';
import { RootState } from '~/store';
import { useAppSelector } from '~/hooks';
import { OrderbookItem } from '../../types';
import { formatNumber } from './lib/formatNumber';

type Props = {
  item: OrderbookItem;
  type: 'asks' | 'bids';
};

const maxTotalSelector = (state: RootState) => {
  const totals = [
    ...state.orderbook.render.asks,
    ...state.orderbook.render.bids,
  ].map((item) => item.total);

  return Math.max(...totals);
};

const Item: FC<Props> = ({ item, type }) => {
  const maxTotal = useAppSelector(maxTotalSelector);

  return (
    <Box height={8}>
      <Box
        height={8}
        width={`${(item.total * 100) / maxTotal}%`}
        backgroundColor={type === 'asks' ? 'red-700' : 'green-700'}
      />
      <Box
        flexDirection="row"
        top={0}
        left={0}
        right={0}
        bottom={0}
        height={8}
        alignItems="center"
        position="absolute"
        paddingX={8}
      >
        <Box flex={1} alignItems="flex-end">
          <Text
            fontWeight="semi-bold"
            color={type === 'asks' ? 'red-500' : 'green-500'}
            fontSize="sm"
          >
            {formatNumber(item.price)}
          </Text>
        </Box>
        <Box flex={1} alignItems="flex-end">
          <Text fontWeight="semi-bold" fontSize="sm">
            {formatNumber(item.size)}
          </Text>
        </Box>
        <Box flex={1} alignItems="flex-end">
          <Text fontWeight="semi-bold" fontSize="sm">
            {formatNumber(item.total)}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(Item);
