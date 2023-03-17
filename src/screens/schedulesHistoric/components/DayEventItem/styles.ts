import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  gap: '24px',
  width: '100%',
  padding: '16px 0',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    gap: 16px !important;
  }
`;

export const DateContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '15%',
  textAlign: 'center',
  gap: '8px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 0 8px !important;
    width: 20% !important;
  }
  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 25% !important;
  }
`;

export const DateDayContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '8px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 0 8px !important;
  }
`;

export const EventsContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '90%',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 75% !important;
  }
`;
