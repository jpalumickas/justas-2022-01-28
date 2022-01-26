import React, { memo, FC } from 'react';
import { Box, Text } from '~/components';
import { OrderbookItem } from '../../types';
import { formatNumber } from './lib/formatNumber';

type Props = {
  item: OrderbookItem;
  type: 'asks' | 'bids';
};

const Item: FC<Props> = ({ item, type }) => {
  return (
    <Box flexDirection="row" paddingX={8} paddingY={2}>
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
  );
};

export default memo(Item);
