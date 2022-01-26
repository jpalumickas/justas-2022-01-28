import { Item } from './types';

export const filterItems = (items: Item[]) =>
  items.filter((item) => item.size > 0);
