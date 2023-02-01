import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 0 16px !important;
  }
`;

export const FallbackTypography = styled(Typography).attrs({
  textAlign: 'center',
})`
  color: ${theme.palette.grey[500]} !important;
`;

export const Card = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  padding: '32px',
  width: '1128px',
  margin: '24px',
  backgroundColor: 'white',
})`
  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 100% !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
    padding: 0 !important;
    margin: 16px 0 !important;
    box-shadow: none;
  }
`;

export const LegendTypography = styled(Typography).attrs({
  color: 'secondary',
  variant: 'body2',
})`
  margin-top: 8px !important;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin-top: 16px !important;
  }
`;
