import styled from 'styled-components';
import { Box } from '@mui/material';

export const ModalContent = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})``;

export const ModalButtonContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '24px',
})``;
