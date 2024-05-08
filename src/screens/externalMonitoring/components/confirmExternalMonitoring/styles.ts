import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const DataContainer = styled(Box).attrs({
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
  margin: 0,
})``;

export const Label = styled(Typography).attrs({
  variant: 'body2',
})`
  color: ${theme.palette.grey[600]} !important;
`;

export const FeedbackContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  padding: '0 20px',
  flexDirection: 'column',
})``;
