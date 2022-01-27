import { OrderbookState, MessageData } from '../types';
import { filterItems } from '../filterItems';
import { arrayDataToObj } from '../arrayDataToObj';

export const snapshotItems = (
  data: MessageData,
  state: OrderbookState,
  key: 'asks' | 'bids',
) => {
  return data[key] ? filterItems(arrayDataToObj(data[key])) : state[key];
};
