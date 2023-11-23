import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginTop: '24px',
})``;

export const MonitorsListHeaderTypography = styled(Typography)`
  color: ${theme.palette.secondary.light} !important;
`;

export const FallbackTypography = styled(Typography).attrs({
  textAlign: 'center',
  marginTop: '18px',
  marginBottom: '18px',
})`
  color: ${theme.palette.grey[500]} !important;
`;
