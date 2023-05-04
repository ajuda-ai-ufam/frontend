import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { Button } from '../button';

export const ButtonsContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '24px',
})``;

export const Placeholder = styled(Typography).attrs({
  variant: 'body1',
})`
  color: ${theme.palette.grey[600]} !important;
`;

export const ChipsContainer = styled(Box).attrs({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 0.5,
})``;

export const AddProfessorsButton = styled(Button)`
  min-width: 280px !important;
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    min-width: 100% !important;
  }
`;
