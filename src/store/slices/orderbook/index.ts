import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { take, takeRight, orderBy, reduce, reduceRight } from 'lodash';
import {
  OrderbookState,
  OrderbookItem,
  RenderItem,
  MessageData,
} from './types';
import { mergeItem } from './mergeItem';
import { setItem } from './setItem';

const initialState: OrderbookState = {
  productId: 'PI_XBTUSD',
  asks: [],
  bids: [],
  render: {
    limit: 8,
    asks: [],
    bids: [],
  },
};

const processItems = (items: OrderbookItem[], type: 'asks' | 'bids') => {
  const orderedItems = orderBy(items, ['price'], ['desc']);

  const iterator = type === 'asks' ? reduceRight : reduce;

  return iterator<OrderbookItem, RenderItem[]>(
    orderedItems,
    (list, item) => {
      const newItem = {
        ...item,
        total: list[0] ? list[0].total + item.size : item.size,
      };

      return type === 'asks' ? [newItem, ...list] : [...list, newItem];
    },
    [],
  );
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
      state.render.asks = takeRight(
        processItems(state.asks, 'asks'),
        state.render.limit,
      );
      state.render.bids = take(
        processItems(state.bids, 'bids'),
        state.render.limit,
      );
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
