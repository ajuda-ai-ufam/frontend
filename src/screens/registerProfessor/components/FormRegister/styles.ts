import { styled as styledMUI } from '@material-ui/core/styles';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import styled from 'styled-components';
import { Button } from '../../../../components/button';
import theme from '../../../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
})``;

export const StyledForm = styled.form`
  width: 100% !important;
`;

export const FormContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})`
  @media (min-width: ${theme.breakpoints.values.sm}px) {
    margin: 3em 0;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
    padding: 4.5em 6em;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 90vw;
    margin: 6em 0;
  }
`;

export const TypographyRegister = styledMUI(Typography)({
  color: theme.palette.secondary.main,
  margin: '8px !important',
  variant: 'h3',
});

export const TypographyCredentials = styledMUI(Typography)({
  lineHeight: '19px',
  fontSize: '16px',
  align: 'center',
  textAlign: 'center',
  color: theme.palette.secondary.main,
  margin: 2,
});

export const CancelRegisterLink = styled(Link).attrs({
  variant: 'body2',
  underline: 'hover',
  color: 'primary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 20px !important;
  }
`;

export const ContainerRegisterOption = styled(Box).attrs({
  marginTop: '2em',
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
    width: 100% !important;
  }
`;
