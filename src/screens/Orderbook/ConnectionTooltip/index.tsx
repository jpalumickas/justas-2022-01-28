import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { resumeWebSocket } from '~/store/slices/orderbook';
import { useAppSelector, useAppDispatch } from '~/hooks';
import { Box, Toast } from '~/components';

export const ConnectionTooltip = () => {
  const { top: safeAreaTop } = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const isWebSocketPaused = useAppSelector(
    (state) => state.orderbook.isWebSocketPaused,
  );

  const onResume = () => {
    dispatch(resumeWebSocket());
  };

  if (!isWebSocketPaused) {
    return null;
  }

  return (
    <Box
      position="absolute"
      left={4}
      right={4}
      style={{ top: safeAreaTop + 24 }}
    >
      <Toast onActionPress={onResume} actionTitle="Resume">
        Data updating is currently paused.
      </Toast>
    </Box>
  );
};
