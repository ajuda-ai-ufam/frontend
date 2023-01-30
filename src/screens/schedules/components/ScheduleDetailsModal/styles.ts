import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const DataContainer = styled(Box).attrs({
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
})``;

export const ButtonContainer = styled(Box).attrs({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
})``;

export const ButtonsContainer = styled(Box).attrs({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column-reverse;
    justify-content: center !important;
    align-items: center !important;
    gap: 16px;
  }
`;

export const Label = styled(Typography).attrs({
  variant: 'body2',
})`
  color: ${theme.palette.grey[600]} !important;
`;
