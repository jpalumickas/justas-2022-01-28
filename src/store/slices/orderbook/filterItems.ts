import { OrderbookItem } from './types';

export const filterItems = (items: OrderbookItem[]) =>
  items.filter((item) => item.size > 0);
