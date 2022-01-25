import {
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  BorderProps,
} from 'styled-system';
import { Theme } from '~/theme';

export type BoxSpaceProps = SpaceProps<Theme>;

export type StyledBoxProps = ColorProps<Theme> &
  BoxSpaceProps &
  LayoutProps<Theme> &
  FlexboxProps<Theme> &
  BorderProps<Theme> &
  PositionProps<Theme>;

export type BoxProps = StyledBoxProps;
