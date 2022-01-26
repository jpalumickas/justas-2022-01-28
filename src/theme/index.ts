import { space } from './space';

export const theme = {
  colors: {
    white: 'white',
    'gray-900': '#0F121B',
  },
  space,
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  borderWidths: {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  },
};

export type Theme = typeof theme;
