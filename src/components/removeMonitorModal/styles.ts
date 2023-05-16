import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { Button } from '../button';
import { Typography } from '@mui/material';

export const Card = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingTop: '8px',
  gap: '24px',
  width: '100%',
})``;

export const TypographyTitle = styled(Typography).attrs({
  variant: 'h4',
})``;

export const TypographyData = styled(Typography).attrs({
  variant: 'body2',
})`
  color: ${theme.palette.grey[600]} !important;
`;

export const TypographyDataContainer = styled(Box).attrs({
  width: '90px',
})``;

export const TypographyDataMonitor = styled(Typography).attrs({
  variant: 'body2',
})``;

export const MonitorContainer = styled(Box).attrs({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '16px',
})``;

export const DataContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  gap: '16px',
})``;

export const ButtonContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '120px',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column-reverse !important;
    gap: 16px !important;
  }
`;

export const RemoveButtonContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '24px',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column-reverse !important;
    gap: 16px !important;
  }
`;

export const CloseButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
  width: '159px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const RemoveButton = styled(Button).attrs({
  color: 'primary',
  variant: 'text',
  width: '159px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const RemoveMonitorCard = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
})``;

export const TypographySubTitle = styled(Typography).attrs({
  variant: 'body1',
})``;

export const ConfirmRemoveButton = styled(Button).attrs({
  variant: 'contained',
  color: 'error',
  width: '160px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const ConfirmCloseButton = styled(Button).attrs({
  variant: 'outlined',
  color: 'secondary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const ConfirmationContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '24px',
  padding: '16px 0',
})``;

export const ConfirmationTextContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
})``;

export const LoadingContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  padding: '16px 0',
})``;
