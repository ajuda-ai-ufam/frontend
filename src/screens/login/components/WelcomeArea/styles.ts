import { Box } from '@mui/system';
import styled from 'styled-components';
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
`;

export const ContainerRegister = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})``;

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

export const ContainerBottom = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    justify-content: space-between !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    justify-content: center !important;
  }
`;

export const PatternBox = styled(Box).attrs({
  display: 'flex',
  alignItems: 'flex-end',
})`
  @media (min-width: ${theme.breakpoints.values.lg}px) {
    display: none !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: none !important;
  }
`;