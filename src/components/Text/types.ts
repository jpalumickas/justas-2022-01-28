import {
  TypographyProps,
  SpaceProps,
  ColorProps,
  FlexboxProps,
} from 'styled-system';
import { Theme } from '~/theme';

export type StyledTextProps = TypographyProps<Theme> &
  SpaceProps<Theme> &
  ColorProps<Theme> &
  FlexboxProps<Theme>;
