import theme from '../../../../utils/theme';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { Button } from '../../../../components/button';

export const Card = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '552px',
  padding: '78px 96px',
})`
  border-radius: 24px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.values.md}px) {
    padding: 40px 78px !important;
    width: 428px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 0 16px !important;
    width: 100% !important;
    border-radius: 0px !important;
    box-shadow: 0 0 0 0 !important;
  }
`;

export const CardContent = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '24px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    gap: 32px !important;
  }
`;

export const TypographyContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '16px',
})``;

export const ResetPasswordEmailButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
})`
  width: calc(100% - 44px) !important;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: calc(100% - 59px) !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;
