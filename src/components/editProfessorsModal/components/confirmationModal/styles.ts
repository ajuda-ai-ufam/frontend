import { Box } from '@mui/material';
import styled from 'styled-components';
import { Button } from '../../../button';
import theme from '../../../../utils/theme';

export const ButtonsContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '24px',
  marginTop: '16px',
})``;

export const BackButton = styled(Button).attrs({
  width: '150px',
  color: 'secondary',
  variant: 'outlined',
  sx: {
    borderColor: '#2D2D2C29',
    ':hover': {
      borderColor: '#2D2D2C29',
      backgroundColor: '#2D2D2C14',
    },
  },
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const ContinueButton = styled(Button).attrs({
  width: '150px',
  color: 'error',
  variant: 'contained',
  sx: {
    ':hover': {
      backgroundColor: '#F55858',
    },
  },
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
  &:disabled {
    background-color: ${theme.palette.error.main}66 !important;
  }
`;
