import React from 'react';
import { Box, Text } from '~/components';

export const Header = () => {
  return (
    <Box height={20} justifyContent="flex-end">
      <Box paddingX={4} height={8}>
        <Text fontWeight="semi-bold" fontSize="lg">
          Order Book
        </Text>
      </Box>
      <Box
        flexDirection="row"
        paddingX={8}
        paddingY={2}
        borderTopColor="gray-600"
        borderBottomColor="gray-700"
        borderTopWidth={1}
        borderBottomWidth={1}
      >
        <Box flex={1} alignItems="flex-end">
          <Text fontWeight="semi-bold" color="gray-600" fontSize="sm">
            PRICE
          </Text>
        </Box>
        <Box flex={1} alignItems="flex-end">
          <Text fontWeight="semi-bold" color="gray-600" fontSize="sm">
            SIZE
          </Text>
        </Box>
        <Box flex={1} alignItems="flex-end">
          <Text fontWeight="semi-bold" color="gray-600" fontSize="sm">
            TOTAL
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
