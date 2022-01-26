import React, { memo, FC } from 'react';
import { Box, Text } from '~/components';
import { OrderbookItem } from '../../types';
import { formatNumber } from './lib/formatNumber';

type Props = {
  item: OrderbookItem;
};

const Item: FC<Props> = ({ item }) => {
  return (
    <Box flexDirection="row" paddingX={8} paddingY={2}>
      <Box flex={1} alignItems="flex-end">
        <Text fontSize="sm">{formatNumber(item.price)}</Text>
      </Box>
      <Box flex={1} alignItems="flex-end">
        <Text fontSize="sm">{formatNumber(item.size)}</Text>
      </Box>
      <Box flex={1} alignItems="flex-end">
        <Text fontSize="sm">{formatNumber(item.total)}</Text>
      </Box>
    </Box>
  );
};

export default Item;
