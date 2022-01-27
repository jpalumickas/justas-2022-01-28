import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../theme';
import { Box } from './index';

describe('Box', () => {
  it('renders the correct style', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Box testID="box" color="purple-500" />
      </ThemeProvider>,
    );

    const box = getByTestId('box');
    expect(box.props.style[0]).toEqual({ color: '#4B14DA' });
  });
});
