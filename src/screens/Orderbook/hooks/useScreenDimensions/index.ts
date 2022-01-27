import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { height: screenHeight } = Dimensions.get('window');

export const ITEM_HEIGHT = 8 * 4; // Multiply by theme
const HEADER_HEIGHT = 20 * 4;
const FOOTER_HEIGHT = 16 * 4;
const SPREAD_HEIGHT = 8 * 4;

export const useScreenDimensions = () => {
  const { top: safeAreaTop, bottom: safeAreaBottom } = useSafeAreaInsets();

  const headerHeight = HEADER_HEIGHT + safeAreaTop;
  const footerHeight = FOOTER_HEIGHT + safeAreaBottom;
  const listHeight =
    (screenHeight - headerHeight - footerHeight - SPREAD_HEIGHT) / 2;

  return {
    spreadHeight: SPREAD_HEIGHT,
    footerHeight,
    listHeight,
    itemHeight: ITEM_HEIGHT,
    itemsCount: Math.floor(listHeight / ITEM_HEIGHT),
  };
};
