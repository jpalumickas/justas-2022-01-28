import React from 'react';
import { useAppDispatch } from '~/hooks';
import { toggleProduct } from '~/store/slices/orderbook';
import { Box, Button } from '~/components';

export const Footer = () => {
  const dispatch = useAppDispatch();

  const onTogglePress = () => {
    dispatch(toggleProduct());
  };

  return (
    <Box alignItems="center" justifyContent="center" height={16}>
      <Button onPress={onTogglePress}>Toggle Feed</Button>
    </Box>
  );
};
