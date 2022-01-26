import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderbookState, MessageData } from './types';
import { mergeItem } from './mergeItem';
import { setItem } from './setItem';

const initialState: OrderbookState = {
  productId: 'PI_XBTUSD',
  asks: [],
  bids: [],
  render: {
    asks: [],
    bids: [],
  },
};

export const orderbookSlice = createSlice({
  name: 'orderbook',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<MessageData>) => {
      state.asks = setItem(action.payload, state, 'asks');
      state.bids = setItem(action.payload, state, 'bids');
    },
    mergeData: (state, action: PayloadAction<MessageData>) => {
      state.asks = mergeItem(action.payload, state, 'asks');
      state.bids = mergeItem(action.payload, state, 'bids');
    },
    setRenderData: (state) => {
      state.render.asks = state.asks;
      state.render.bids = state.bids;
    },
    toggleProduct: (state) => {
      state.bids = [];
      state.asks = [];
      state.render = initialState.render;
      state.productId =
        state.productId === 'PI_XBTUSD' ? 'PI_ETHUSD' : 'PI_XBTUSD';
    },
  },
});

export const { setData, mergeData, setRenderData, toggleProduct } =
  orderbookSlice.actions;

export default orderbookSlice.reducer;
