import styled from '@emotion/native';
import { border, color, space, layout, flexbox, position } from 'styled-system';
import { StyledBoxProps } from './types';

export const Box = styled.View<StyledBoxProps>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
`;
