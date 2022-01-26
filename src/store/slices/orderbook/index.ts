import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { take, takeRight } from 'lodash';
import { OrderbookState, MessageData } from './types';
import { mergeItem } from './mergeItem';
import { setItem } from './setItem';
import { processItems } from './processItems';

const initialState: OrderbookState = {
  productId: 'PI_XBTUSD',
  asks: [],
  bids: [],
  render: {
    limit: 8,
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
      state.asks = setItem(action.payload, state, 'asks');
      state.bids = setItem(action.payload, state, 'bids');
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
    toggleProduct: (state) => {
      state.bids = [];
      state.asks = [];
      state.render = initialState.render;
      state.productId =
        state.productId === 'PI_XBTUSD' ? 'PI_ETHUSD' : 'PI_XBTUSD';
    },
  },
});

export const { snapshotData, mergeData, setRenderData, toggleProduct } =
  orderbookSlice.actions;

export default orderbookSlice.reducer;
