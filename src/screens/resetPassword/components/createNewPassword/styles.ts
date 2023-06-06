import styled from 'styled-components';
import theme from '../../../../utils/theme';
import { Box, OutlinedInput } from '@mui/material';
import { Button } from '../../../../components/button';

export const Card = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px 96px 72px 96px',
  gap: '24px',
  width: '552px',
})`
  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.values.md}px) {
    padding: 40px 78px !important;
    width: 428px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
    padding: 0 16px !important;
    border-radius: 0px !important;
    box-shadow: 0 0 0 0 !important;
  }
`;

export const ContentContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '32px',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    gap: 24px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    gap: 32px !important;
  }
`;

export const TypographyContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  width: '100%',
  gap: '16px',
})``;

export const ResetPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 32px;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    gap: 24px;
  }
`;

export const PasswordTextField = styled(OutlinedInput).attrs({})`
  fieldset {
    border-radius: 12px;
  }
`;

export const SaveButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 183px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
    margin-top: 8px !important;
  }
`;

export const TextFieldContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})``;
