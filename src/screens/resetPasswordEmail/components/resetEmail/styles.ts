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
  width: '80%',
  gap: '16px',
})``;

export const TypographyHeader = styled(Typography).attrs({
  variant: 'h4',
})``;

export const TypographySub = styled(Typography).attrs({
  variant: 'body1',
})``;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 80% !important;
  }
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const EmailTextFieldContainer = styled(Box).attrs({
  width: '100%',
  height: '78px',
  marginBottom: '32px',
})``;

export const EmailTextField = styled(TextField).attrs({})`
  width: 100%;
  fieldset {
    border-radius: 12px;
  }
`;

export const EmailError = styled(FormHelperText).attrs({})`
  padding: 0px 16px 0px;
`;

export const CardContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
  padding: '72px 96px',
})`
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1) !important;
  border-radius: 24px !important;

  @media (max-width: ${theme.breakpoints.values.md}px){
    padding: 40px 16px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    box-shadow: 0 0 0 0 !important;
    border-radius: 0 !important;
    justify-content: center !important;
    align-items: center !important;
    max-width: 100% !important;
  }
})`;

export const ContentContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '56px',
  width: '552px',
  textAlign: 'center',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
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
