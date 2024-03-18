import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { Typography } from '@mui/material';
import { TextField } from '../../components/textField';
import { Button } from '../../components/button';

export const Container = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '24px',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
  }
`;

export const Card = styled(Box).attrs({
  width: '1064px',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})`
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
`;

export const TypographyContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})``;

export const HeaderTypography = styled(Typography).attrs({
  variant: 'h3',
})``;

export const SubTypography = styled(Typography).attrs({
  variant: 'body1',
})``;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100% !important;
`;

export const StyledTextFieldContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})``;

export const StyledTextField = styled(TextField).attrs({
  width: '100%',
})``;

export const Placeholder = styled(Typography).attrs({
  variant: 'body1',
})`
  color: ${theme.palette.grey[600]} !important;
`;

export const DateFieldsContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  gap: '24px',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column !important;
  }
`;

export const ButtonsContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  gap: '24px',
  marginTop: '16px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column-reverse !important;
    justify-content: center !important;
  }
`;

export const StyledButton = styled(Button).attrs({
  color: 'primary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;
