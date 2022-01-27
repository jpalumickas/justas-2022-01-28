import React, { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { resumeWebSocket } from '~/store/slices/orderbook';
import { useAppSelector, useAppDispatch } from '~/hooks';
import { Box, Toast } from '~/components';

export const Wrapper: FC = ({ children }) => {
  const { top: safeAreaTop } = useSafeAreaInsets();

  return (
    <Box
      position="absolute"
      left={4}
      right={4}
      style={{ top: safeAreaTop + 24 }}
    >
      {children}
    </Box>
  );
};

export const ConnectionTooltip: FC = () => {
  const dispatch = useAppDispatch();
  const { isPaused, error } = useAppSelector(
    (state) => state.orderbook.webSocket,
  );

  if (!isPaused && !error) {
    return null;
  }

  const onResume = () => {
    dispatch(resumeWebSocket());
  };

  if (error) {
    return (
      <Wrapper>
        <Toast title="Failed to get data" type="error">
          {error}
        </Toast>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Toast onActionPress={onResume} actionTitle="Resume">
        Data updating is currently paused.
      </Toast>
    </Wrapper>
  );
};
