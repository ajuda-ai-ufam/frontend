import { Box } from '@mui/system';
import styled from 'styled-components';
import { Button } from '../../../../components/button';
import theme from '../../../../utils/theme';
import { Typography } from '@mui/material';

export const ContainerUp = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '16px 40px 0 40px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 16px 16px 0 16px !important;
  }
`;

export const ContainerRegister = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})``;

export const ContainerRegisterText = styled(Box).attrs({
  marginRight: '16px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: none !important;
  }
`;

export const ContainerLogo = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
})``;

export const SignUpButton = styled(Button).attrs({
  color: 'secondary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 135px !important;
  }
`;

export const TypographyRegister = styled(Typography).attrs({})``;
