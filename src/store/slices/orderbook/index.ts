import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { uniqBy, zipObject } from 'lodash';

type Item = {
  price: number;
  size: number;
};

export interface OrderbookState {
  asks: Item[];
  bids: Item[];
}

type MessageData = {
  bids: [number, number][];
  asks: [number, number][];
};

const arrayDataToObj = (data: [number, number][]) =>
  data.map((item) => zipObject(['price', 'size'], item) as Item);

const filterItems = (items: Item[]) => items.filter((item) => item.size > 0);

const mergeItem = (
  data: MessageData,
  state: OrderbookState,
  key: 'asks' | 'bids',
) => {
  if (!data[key] || data[key].length === 0) {
    return state[key];
  }

  return filterItems(
    uniqBy([...arrayDataToObj(data[key]), ...state[key]], 'price'),
  );
};

const initialState: OrderbookState = {
  asks: [],
  bids: [],
};

export const orderbookSlice = createSlice({
  name: 'orderbook',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<MessageData>) => {
      state.bids =
        action.payload.bids && action.payload.bids.length > 0
          ? filterItems(arrayDataToObj(action.payload.bids))
          : state.bids;
      state.asks =
        action.payload.asks && action.payload.asks.length > 0
          ? filterItems(arrayDataToObj(action.payload.asks))
          : state.asks;
    },
    mergeData: (state, action: PayloadAction<MessageData>) => {
      state.bids = mergeItem(action.payload, state, 'bids');
      state.asks = mergeItem(action.payload, state, 'asks');
    },
  },
});

export const { setData, mergeData } = orderbookSlice.actions;

export default orderbookSlice.reducer;
