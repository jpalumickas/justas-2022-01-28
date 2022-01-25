import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { store } from '~/store';
import { theme } from '~/theme';

import { Orderbook } from '~/screens/Orderbook';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Orderbook />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
