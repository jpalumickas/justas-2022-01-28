import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../theme';
import { Button } from '../index';

const props = {
  children: 'My button',
  onPress: jest.fn(),
};

beforeEach(() => {
  props.onPress.mockClear();
});

it('should call onPress prop on click', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Button {...props} />
    </ThemeProvider>,
  );
  const button = getByTestId('button');
  fireEvent(button, 'press');

  expect(props.onPress).toHaveBeenCalledTimes(1);
});
