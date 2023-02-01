import { styled as styledMUI } from '@material-ui/core/styles';
import { Box } from '@mui/system';
import { OutlinedInput } from '@mui/material';
import { Button } from '../../components/button';
import styled from 'styled-components';
import theme from '../../utils/theme';
import Typography from '@mui/material/Typography';

export const OutsideContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})`
  min-height: 100vh !important;
  width: 100% !important;
`;

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})``;

export const CardContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})``;

export const CardForm = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '72px 96px',
  gap: '24px',
})`
  margin-top: 48px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  max-width: 500px !important;
  width: 80%;
  min-height: 500px;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 50% !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    box-shadow: none !important;
    padding: 0 !important;
    width: 100% !important;
  }
`;

export const CopyrightContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px',
  gap: '24px',
})``;

export const FormContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: calc(100% - 32px) !important;
    padding: 0 16px;
  }
`;

export const TypographyContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '16px',
})``;

export const TypographyTextRegister = styledMUI(Typography)({
  textAlign: 'center',
});

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StyledFormTextField = styled(OutlinedInput)`
  width: 100%;
  fieldset {
    border-radius: 12px;
  }
`;

export const TextFieldContainer = styled(Box).attrs({
  width: '100%',
  marginTop: '16px',
})``;

export const ButtonContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '32px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column-reverse !important;
    gap: 24px !important;
  }
`;

export const CancelButton = styled(Button).attrs({
  color: 'primary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const ContinueButton = styled(Button).attrs({
  color: 'primary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;
