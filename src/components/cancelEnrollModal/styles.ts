import styled from 'styled-components';
import theme from '../../utils/theme';
import { Typography, Box } from '@mui/material';
import { Button } from '../button';

export const Card = styled(Box).attrs({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
})``;

export const HeaderTypography = styled(Typography).attrs({
  variant: 'h4',
})``;

export const BodyTypography = styled(Typography).attrs({
  variant: 'body1',
})``;

export const ButtonContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'flex-end',
  paddingTop: '24px',
  gap: '32px',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: flex !important;
    flex-direction: column-reverse !important;
    justifycontent: center !important;
    gap: 16px !important;
  }
`;

export const ConfirmButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
  width: '249px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const CancelButton = styled(Button).attrs({
  color: 'primary',
  variant: 'text',
  width: 'auto',
})``;

export const SuccessCard = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
})``;

export const SuccessTypography = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
})``;

export const CloseButton = styled(Button).attrs({
  color: 'primary',
  variant: 'contained',
})``;

export const LoadingContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
})``;
