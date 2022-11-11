import { Box } from '@mui/system';
import styled from 'styled-components';
import { Button } from '../../components/button';
import { TextField } from '../../components/textField';
import theme from '../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '16px',
})`
  height: 100vh !important;
  width: 100vw !important;
`;

export const CodeTextField = styled(TextField).attrs({
  type: 'text',
  id: 'code',
  name: 'code',
  placeholder: 'Código de confirmação',
  inputProps: { maxLength: 6 },
})`
  width: 100% !important;
  margin-top: 32px;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    height: 48px !important;
  }
`;

export const ActionsContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: '16px',
  alignItems: 'center',
  width: '100%',
  marginTop: '32px',
})``;

export const CodeFormButton = styled(Button).attrs({
  color: 'primary',
})`
  width: 100%;
  min-width: 245px;
`;

export const CopyRigthContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  paddingBottom: '24px',
})``;

export const CardContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})``;

export const Card = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '72px 96px',
})`
  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 80%;
  height: 550px;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 50% !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
    padding: 0 !important;
    margin: 0 16px;
    box-shadow: none;
  }
`;
