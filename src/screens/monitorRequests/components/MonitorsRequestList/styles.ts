import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})``;

export const ProgressContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '40vh',
})``;

export const FallbackContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '10vh',
})`
  p {
    color: ${theme.palette.grey[500]} !important;
    text-align: center;
  }
`;

export const FallbackTypography = styled(Typography).attrs({
  variant: 'body1',
  color: theme.palette.grey[500],
  textAlign: 'center',
})``;

export const MonitorsContainer = styled(Box).attrs({
  display: 'grid',
  gap: '16px',
  flexWrap: 'wrap',
})`
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: flex !important;
  }
`;

export const PaginationContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '32px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 32px 0 !important;
  }
`;
