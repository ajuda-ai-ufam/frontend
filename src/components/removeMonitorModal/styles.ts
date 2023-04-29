import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { Button } from '../button';
import { Typography } from '@mui/material';

export const Card = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
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
})``;

export const RemoveButtonContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '24px',
  width: '100%',
})``;

export const CloseButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
  width: '159px',
})``;

export const RemoveButton = styled(Button).attrs({
  color: 'primary',
  variant: 'text',
  width: '159px',
})``;

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
})``;

export const ConfirmCloseButton = styled(Button).attrs({
  variant: 'text',
  color: 'secondary',
})``;
