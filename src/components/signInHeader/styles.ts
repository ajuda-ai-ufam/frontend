import styled from 'styled-components';
import { Box } from '@mui/system';
import theme from '../../utils/theme';
import { Button } from '../button';

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '12px 40px 0 40px',
  background: '#fff',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    margin: 12px 16px 0 16px !important;
  }
`;

export const LogoContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
})``;

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

export const RegisterTypographyContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    display: none !important;
  }
`;

export const LoginContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '24px',
})``;
