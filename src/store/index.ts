import { configureStore } from '@reduxjs/toolkit';
import orderbook from './slices/orderbook';

export const store = configureStore({
  reducer: {
    orderbook,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
