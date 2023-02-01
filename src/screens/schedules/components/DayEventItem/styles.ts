import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  gap: '24px',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    gap: 16px !important;
  }
`;

export const DateContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '8px',
  padding: '0 32px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 0 8px !important;
  }
`;

export const EventsContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
})``;
