import type { TypographyProps } from '@material-ui/core';
import { styled as styledMUI } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button as MUIButton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { Button } from '../../../../components/button';
import theme from '../../../../utils/theme';

type TypographyPLogin = React.ComponentType<
  TypographyProps<'h1', { component: 'h1' }>
>;

type TypographyPCredentials = React.ComponentType<
  TypographyProps<'h5', { component: 'h5' }>
>;

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

export const ForgotPasswordButton = styled(MUIButton).attrs({
  variant: 'text',
  color: 'primary',
})`
  padding: 0px 16px 0px 16px !important;
  border-radius: 100px;
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    align-self: flex-end;
  }
`;

export const ContainerBottom = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '10px',
})``;

export const TypographyLogin: TypographyPLogin = styledMUI(Typography)({
  component: 'h1',
  variant: 'h5',
  fontWeight: 600,
  fontSize: '36px',
  lineHeight: '52px',
  align: 'center',
  color: '#2D2D2C',
  margin: 2,
  fontFamily: 'Inter',
});

export const TypographyCredentials: TypographyPCredentials = styledMUI(
  Typography
)({
  component: 'h5',
  variant: 'h5',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '19.36px',
  align: 'center',
  color: '#2D2D2C',
  margin: 2,
  fontFamily: 'Inter',
});
