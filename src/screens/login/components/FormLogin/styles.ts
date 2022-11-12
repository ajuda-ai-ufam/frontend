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
  justifyContent: 'space-between',
})``;

export const ContainerUp = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})``;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerLogin = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column !important;
  }
`;

export const LoginButton = styled(Button).attrs({
  color: 'primary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
    margin-top: 22px !important;
  }
`;

export const ForgotPasswordLink = styled(Link).attrs({
  variant: 'body2',
  underline: 'hover',
  color: 'primary',
})``;

export const ContainerBottom = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px',
})``;

export const TypographyLogin = styledMUI(Typography)({
  lineHeight: '52px',
  align: 'center',
  color: theme.palette.secondary.main,
  margin: '16px !important',
});

export const TypographyCredentials = styledMUI(Typography)({
  lineHeight: '19.36px',
  align: 'center',
  textAlign: 'center',
  color: theme.palette.secondary.main,
  margin: 2,
});
