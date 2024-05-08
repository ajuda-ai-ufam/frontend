import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { Typography } from '@mui/material';
import { TextField } from '../../components/textField';
import { Button } from '../../components/button';

export const Container = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
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
  margin: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})`
  @media (min-width: ${theme.breakpoints.values.md}px) {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
  }
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 0 !important;
    margin: 16px !important;
    width: 100% !important;
  }
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

export const ProfessorContainer = styled(Box).attrs({
  display: 'flex',
  padding: '16px',
})`
  border-style: solid;
  border-width: 1px;
  border-radius: 12px;
  border-color: #b1b5ae !important;
`;

export const DisabledProfessorContainer = styled(Box).attrs({
  display: 'flex',
  padding: '16px',
})`
  border-style: solid;
  border-width: 1px;
  border-radius: 12px;
  border-color: #b1b5ae !important;
  opacity: 0.2;
`;

export const StudentOption = styled(Box).attrs({
  display: 'flex',
})`
  :hover: ${theme.palette.primary.main};
`;
