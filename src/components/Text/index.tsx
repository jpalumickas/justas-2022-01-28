import styled from '@emotion/native';
import { color, typography, flexbox, space } from 'styled-system';
import { StyledTextProps } from './types';

export const Text = styled.Text<StyledTextProps>`
  ${color}
  ${typography}
  ${space}
  ${flexbox}
`;

Text.defaultProps = {
  color: 'white',
  fontSize: 'md',
};
