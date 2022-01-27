import { isEmpty, uniqBy } from 'lodash';
import { OrderbookState, MessageData } from '../types';
import { filterItems } from '../filterItems';
import { arrayDataToObj } from '../arrayDataToObj';

export const mergeItem = (
  data: MessageData,
  state: OrderbookState,
  key: 'asks' | 'bids',
) => {
  if (isEmpty(data[key])) {
    return state[key];
  }

  return filterItems(
    uniqBy([...arrayDataToObj(data[key]), ...state[key]], 'price'),
  );
};
