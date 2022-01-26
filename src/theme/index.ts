import { space } from './space';

export const theme = {
  colors: {
    white: 'white',
    'gray-900': '#0F121B',
    'gray-700': '#131925',
    'gray-600': '#454D5F',
    'red-500': '#C30424',
    'red-700': '#32141E',
    'green-500': '#007149',
    'green-700': '#00302F',
  },
  space,
  sizes: space,
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
  fontWeights: {
    'semi-bold': '600',
  },
};

export type Theme = typeof theme;
