import React, { FC } from 'react';
import { StyleSheet, GestureResponderEvent, Pressable } from 'react-native';
import { Box, Text } from '~/components';

type Props = {
  type?: 'info' | 'error';
  title?: string;
  actionTitle?: string;
  onActionPress?: (event: GestureResponderEvent) => void;
};

export const Toast: FC<Props> = ({
  title,
  type = 'info',
  children,
  onActionPress,
  actionTitle,
}) => {
  return (
    <Box
      backgroundColor="white"
      borderRadius="md"
      paddingX={4}
      paddingY={3}
      style={styles.container}
    >
      {title && (
        <Text fontSize="sm" color="gray-900" mb={1} fontWeight="semi-bold">
          {title}
        </Text>
      )}
      <Box flexDirection="row">
        <Text fontSize="sm" color={type === 'error' ? 'red-500' : 'gray-900'}>
          {children}
        </Text>
        {actionTitle && onActionPress && (
          <Pressable onPress={onActionPress}>
            <Text fontSize="sm" color="purple-500">
              {' '}
              {actionTitle}
            </Text>
          </Pressable>
        )}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
