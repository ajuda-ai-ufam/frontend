import theme from '../../utils/theme';
import styled from 'styled-components';
import { Box } from '@mui/material';
import { Button } from '../../components/button';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})`
  min-height: 100vh !important;
  width: 100% !important;
`;

export const MiddleContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})``;

export const Bottom = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px',
})``;

export const Card = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '58px',
  alignItems: 'center',
  padding: '72px 96px',
  width: '552px',
})`
  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.values.md}px) {
    padding: 40px 80px !important;
    gap: 24px !important;
    width: 424px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    border-radius: 0;
    box-shadow: 0 0 0 0;
    width: 100% !important;
    padding: 0 16px !important;
  }
`;

export const SuccessContentContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
  width: '100%',
})``;

export const SuccessTypographyContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  width: '100%',
  gap: '16px',
})``;

export const LoginButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
})`
  width: 242px;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 194px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const TopContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '16px 40px 0 40px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 16px 16px 0 16px !important;
  }
`;
