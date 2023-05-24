import { Typography, TextField, FormHelperText } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../../../utils/theme';
import { Button } from '../../../../components/button';

export const TypographyContainer = styled(Box).attrs({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
})``;

export const TypographySubContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  width: '420px',
  gap: '16px',
})``;

export const TypographyHeader = styled(Typography).attrs({
  variant: 'h4',
})``;

export const TypographySub = styled(Typography).attrs({
  variant: 'body1',
})``;

export const InputContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '32px',
  width: '100%',
})``;

export const EmailTextFieldContainer = styled(Box).attrs({
  width: '100%',
  height: '72px',
})``;

export const EmailTextField = styled(TextField).attrs({})`
  width: 100%;
  fieldset {
    border-radius: 12px;
  }
`;

export const EmailError = styled(FormHelperText).attrs({})`
  padding: 4px 16px 0px;
`;

export const CardContainer = styled(Box).attrs({
  ddisplay: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '72px 96px',
  gap: '24px',
})`
  @media (min-width: ${theme.breakpoints.values.md}px) {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.1) !important;
    border-radius: 24px !important;
  }
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    justify-content: 'center' !important;
    align-items: 'center' !important;
    padding: 0 !important;
  }
})`;

export const ContentContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '56px',
  width: '552px',
  textAlign: 'center',
})`
  @media (min-width: ${theme.breakpoints.values.sm}px) {
    justify-content: 'center' !important;
    align-items: 'center' !important;
  }
`;

export const ButtonContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '64px',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column-reverse !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 24px !important;
  }
`;

export const ConfirmButton = styled(Button).attrs({
  color: 'primary',
  variant: 'contained',
  width: '191px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const ReturnButton = styled(Button).attrs({
  color: 'primary',
  variant: 'text',
})``;
