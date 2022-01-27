import React, { FC } from 'react';
import { StyleSheet, GestureResponderEvent, Pressable } from 'react-native';
import { Box, Text } from '~/components';

type Props = {
  actionTitle?: string;
  onActionPress?: (event: GestureResponderEvent) => void;
};

export const Toast: FC<Props> = ({ children, onActionPress, actionTitle }) => {
  return (
    <Box
      flexDirection="row"
      backgroundColor="white"
      borderRadius="md"
      paddingX={4}
      paddingY={3}
      style={styles.container}
    >
      <Text color="gray-900">{children} </Text>
      {actionTitle && onActionPress && (
        <Pressable onPress={onActionPress}>
          <Text color="purple-500">{actionTitle}</Text>
        </Pressable>
      )}
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
