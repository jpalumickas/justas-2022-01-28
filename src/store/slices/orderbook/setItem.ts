import { isEmpty } from 'lodash';
import { OrderbookState, MessageData } from './types';
import { filterItems } from './filterItems';
import { arrayDataToObj } from './arrayDataToObj';

export const setItem = (
  data: MessageData,
  state: OrderbookState,
  key: 'asks' | 'bids',
) => {
  return isEmpty(data[key])
    ? state[key]
    : filterItems(arrayDataToObj(data[key]));
};
