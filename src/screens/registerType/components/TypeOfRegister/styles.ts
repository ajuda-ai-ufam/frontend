import { Box } from '@mui/system';
import styled from 'styled-components';
import { Button } from '../../../../components/button';
import theme from '../../../../utils/theme';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
  width: '50vw',
})`
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    width: 100vw !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 0 16px 0 16px !important;
  }
`;

export const LoginButton = styled(Button).attrs({
  color: 'secondary',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 150px !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 130px !important;
  }
`;

export const ContainerUp = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  margin: '16px 40px 0 40px',
})`
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    justify-content: space-between !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 16px 0 0 0 !important;
  }
`;

export const ContainerLogin = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})``;

export const ContainerLoginText = styled(Box).attrs({
  marginRight: '16px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: none !important;
  }
`;

export const ContainerLogo = styled(Box)`
  @media (min-width: ${theme.breakpoints.values.lg}px) {
    display: none !important;
  }
`;

export const ContainerMiddle = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})``;
