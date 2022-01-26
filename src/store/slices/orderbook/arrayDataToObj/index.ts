import { zipObject } from 'lodash';
import { Item } from '../types';

export const arrayDataToObj = (data: [number, number][]) =>
  data.map((item) => zipObject(['price', 'size'], item) as Item);
