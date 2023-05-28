import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../../../utils/theme';
import { Button } from '../../../../components/button';

export const ContentContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '552px',
  gap: '56px',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    gap: 32px !important ;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const TypographyContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  width: '420px',
  gap: '16px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    gap: 24px;
  }
`;

export const EmailTextFieldContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: calc(100% - 62.5px) !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const EmailTextField = styled(TextField).attrs({})`
  fieldset {
    border-radius: 12px;
  }
`;

export const ButtonContainer = styled(Box).attrs({
  display: 'flex',
  gap: '64px',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: calc(100% - 56.5px) !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column-reverse !important;
    width: 100% !important;
    gap: 24px !important;
  }
`;

export const ConfirmButton = styled(Button).attrs({
  color: 'primary',
  variant: 'contained',
  width: '244px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const ReturnButton = styled(Button).attrs({
  color: 'primary',
  variant: 'text',
  width: '244px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;
