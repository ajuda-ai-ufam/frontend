import { styled as styledMUI } from '@material-ui/core/styles';
import { Box } from '@mui/system';
import { OutlinedInput } from '@mui/material';
import { Button } from '../../../../components/button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
})``;

export const StyledForm = styled.form`
  margin: 0 16px !important;
  width: 100% !important;
  right: 0 !important;
  left: 0 !important;
`;

export const StyledFormTextField = styled(OutlinedInput)`
  margin-top: 16px;
  width: 100%;
  fieldset {
    border-radius: 12px;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: calc(100% - 32px);
    margin-left: 16px;
  }
`;

export const FormContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})`
  margin: 48px 0;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  padding: 72px 96px;
  min-width: 500px;
  gap: 16px;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 90%;
    margin: 96px 0;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 0 !important;
    box-shadow: none;
  }
`;

export const TypographyRegister = styledMUI(Typography)({
  textAlign: 'center',
});

export const CancelRegister = styled(Button).attrs({
  color: 'primary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
    margin-top: 22px !important;
  }
`;

export const ContainerRegisterOption = styled(Box).attrs({
  marginTop: '32px',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  @media (min-width: ${theme.breakpoints.values.sm}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const RegisterButton = styled(Button).attrs({
  color: 'primary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: calc(100% - 32px) !important;
  }
`;

export const CopyrigthContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  paddingBottom: '24px',
})``;
