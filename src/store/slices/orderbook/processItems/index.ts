import _ from 'lodash';
import { OrderbookItem, RenderItem } from '../types';

export const processItems = (items: OrderbookItem[], type: 'asks' | 'bids') => {
  const orderedItems = _.orderBy(items, ['price'], ['desc']);

  const iterator = type === 'asks' ? _.reduceRight : _.reduce;

  return iterator<OrderbookItem, RenderItem[]>(
    orderedItems,
    (list, item) => {
      const nextItem = type === 'asks' ? list[0] : _.last(list);
      const newItem = {
        ...item,
        total: nextItem ? nextItem.total + item.size : item.size,
      };

      return type === 'asks' ? [newItem, ...list] : [...list, newItem];
    },
    [],
  );
};
