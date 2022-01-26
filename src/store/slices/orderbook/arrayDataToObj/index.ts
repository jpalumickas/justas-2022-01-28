import { zipObject } from 'lodash';
import { OrderbookItem } from '../types';

export const arrayDataToObj = (data: [number, number][]) =>
  data.map((item) => zipObject(['price', 'size'], item) as OrderbookItem);
