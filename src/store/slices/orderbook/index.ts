import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { take, takeRight } from 'lodash';
import { OrderbookState, MessageData } from './types';
import { mergeItem } from './mergeItem';
import { snapshotItems } from './snapshotItems';
import { processItems } from './processItems';

const initialState: OrderbookState = {
  productId: 'PI_XBTUSD',
  webSocket: {
    isPaused: false,
    isConnected: false,
    error: null,
  },
  asks: [],
  bids: [],
  render: {
    limit: 9,
    asks: [],
    bids: [],
    highestTotal: 0,
  },
};

export const orderbookSlice = createSlice({
  name: 'orderbook',
  initialState,
  reducers: {
    snapshotData: (state, action: PayloadAction<MessageData>) => {
      state.asks = snapshotItems(action.payload, state, 'asks');
      state.bids = snapshotItems(action.payload, state, 'bids');
    },
    mergeData: (state, action: PayloadAction<MessageData>) => {
      state.asks = mergeItem(action.payload, state, 'asks');
      state.bids = mergeItem(action.payload, state, 'bids');
    },
    setRenderData: (state) => {
      state.render.asks = takeRight(
        processItems(state.asks, 'asks'),
        state.render.limit,
      );
      state.render.bids = take(
        processItems(state.bids, 'bids'),
        state.render.limit,
      );

      const totals = [...state.render.asks, ...state.render.bids].map(
        (item) => item.total,
      );

      state.render.highestTotal = Math.max(...totals);
    },
    setRenderLimit: (state, action: PayloadAction<number>) => {
      state.render.limit = action.payload;
    },
    pauseWebSocket: (state) => {
      state.webSocket.isPaused = true;
    },
    resumeWebSocket: (state) => {
      state.webSocket.isPaused = false;
    },
    setWebSocketError: (state, action: PayloadAction<string>) => {
      state.webSocket.error = action.payload;
    },
    webSocketConnected: (state) => {
      state.webSocket.isConnected = true;
      state.webSocket.error = null;
    },
    webSocketDisconnected: (state) => {
      state.webSocket.isConnected = false;
    },
    toggleProduct: (state) => {
      state.bids = [];
      state.asks = [];
      state.render = initialState.render;
      state.webSocket.isPaused = false;
      state.productId =
        state.productId === 'PI_XBTUSD' ? 'PI_ETHUSD' : 'PI_XBTUSD';
    },
  },
});

export const {
  snapshotData,
  mergeData,
  setRenderData,
  toggleProduct,
  pauseWebSocket,
  resumeWebSocket,
  webSocketConnected,
  webSocketDisconnected,
  setWebSocketError,
  setRenderLimit,
} = orderbookSlice.actions;

export default orderbookSlice.reducer;
