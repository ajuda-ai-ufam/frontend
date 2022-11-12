import styled from 'styled-components';
import { Box } from '@mui/system';
import theme from '../../utils/theme';

export const ContainerBottom = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    justify-content: space-between !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    justify-content: center !important;
  }
`;

export const PatternBox = styled(Box).attrs({
  display: 'flex',
  alignItems: 'flex-end',
})`
  @media (min-width: ${theme.breakpoints.values.lg}px) {
    display: none !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: none !important;
  }
`;
