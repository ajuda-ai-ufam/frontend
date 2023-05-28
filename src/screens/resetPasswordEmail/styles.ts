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

export const MiddleContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})``;

export const CardContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  alignItems: 'center',
  padding: '72px 96px',
  width: '552px',
})`
  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.values.md}px) {
    padding: 40px 16px !important;
    gap: 24px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    border-radius: 0;
    box-shadow: 0 0 0 0;
    width: 100% !important;
    padding: 0 16px !important;
  }
`;

export const SuccessCardContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  alignItems: 'center',
  padding: '72px 96px',
  width: '552px',
})`
  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.values.md}px) {
    padding: 81.5px 16px !important;
    gap: 24px !important;
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
})``;

export const SuccessTypographyContainer = styled(Box).attrs({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  textAlign: 'center',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 424px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const LoginButton = styled(Button).attrs({
  color: 'primary',
  variant: 'contained',
  width: '508px',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 194px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const Bottom = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px',
})``;
