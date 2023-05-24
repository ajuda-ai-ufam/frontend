import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { Button } from '../../components/button';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})`
  min-height: 100vh !important;
  width: 100% !important;
`;

export const CardContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
})``;

export const LoadingContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '72px 122px',
})`
  @media (min-width: ${theme.breakpoints.values.md}px) {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1) !important;
    border-radius: 24px !important;
  }
`;

export const SuccessContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '110px 96px',
  gap: '42px',
})`
    @media (min-width: ${theme.breakpoints.values.md}px) {
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.1) !important;
      border-radius: 24px !important;
    }
    @media (max-width: ${theme.breakpoints.values.sm}px) {
      padding: 0 !important;
    }
  })`;

export const SuccessContentContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
})``;

export const SuccessTypographyContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  width: '552px',
  gap: '16px',
})``;

export const SuccessTypographyHeader = styled(Typography).attrs({
  variant: 'h4',
  textAlign: 'center',
})``;

export const SuccessTypographySub = styled(Typography).attrs({
  variant: 'body1',
  textAlign: 'center',
})``;

export const SuccessButtonContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})``;

export const LoginButton = styled(Button).attrs({
  color: 'primary',
  variant: 'contained',
  width: '80%',
})``;

export const Bottom = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px',
})``;
export const TypographyCaption = styled(Typography).attrs({
  variant: 'caption',
})``;
