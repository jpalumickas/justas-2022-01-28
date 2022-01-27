import { round } from 'lodash';

export const bytesToGb = (bytes: number) => {
  return round(bytes / 1000 / 1000 / 1000, 2);
};
