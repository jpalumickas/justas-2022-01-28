import React, { FC } from 'react';
import { Pressable, GestureResponderEvent } from 'react-native';
import { Box } from '../Box';
import { Text } from '../Text';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
};

export const Button: FC<Props> = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        backgroundColor="purple-500"
        paddingX={4}
        paddingY={2}
        borderRadius="sm"
      >
        <Text fontWeight="semi-bold" color="white">
          {children}
        </Text>
      </Box>
    </Pressable>
  );
};
