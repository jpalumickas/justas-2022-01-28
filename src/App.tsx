import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { ErrorBoundary } from '~/components/ErrorBoundary';
import { store } from '~/store';
import { theme } from '~/theme';

import { Orderbook } from '~/screens/Orderbook';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <ReduxProvider store={store}>
            <Orderbook />
          </ReduxProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
