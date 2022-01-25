import React from 'react';
import { Provider } from 'react-redux';
import { store } from '~/store';

import { Orderbook } from '~/screens/Orderbook';

const App = () => {
  return (
    <Provider store={store}>
      <Orderbook />
    </Provider>
  )
};

export default App;
