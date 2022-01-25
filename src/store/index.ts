import { configureStore } from '@reduxjs/toolkit';
import { createActionListenerMiddleware } from '@rtk-incubator/action-listener-middleware';
import orderbook from './slices/orderbook';
import { addOrderbookDataListener } from './actionListeners/orderbookData';

const listenerMiddleware = createActionListenerMiddleware();
addOrderbookDataListener(listenerMiddleware);

export const store = configureStore({
  reducer: {
    orderbook,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
