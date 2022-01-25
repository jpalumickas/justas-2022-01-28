import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { store } from '~/store';
import { theme } from '~/theme';

import { Orderbook } from '~/screens/Orderbook';

const App = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <Orderbook />
        </ThemeProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
};

export default App;
