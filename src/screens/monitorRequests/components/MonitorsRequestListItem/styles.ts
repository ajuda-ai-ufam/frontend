import { Box, Card } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const Container = styled(Card)`
  display: flex !important;
  align-items: center !important;
  background-color: ${theme.palette.background.default} !important;
  border-radius: 16px !important;
  padding: 24px;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }

  @media (max-width: ${theme.breakpoints.values.md}px) {
    padding: 16px !important;
  }
`;

export const DataContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
})``;

export const ButtonsContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: '100%',
  marginTop: '24px',
})``;
