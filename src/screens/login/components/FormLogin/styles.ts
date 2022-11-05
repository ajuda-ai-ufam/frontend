import { Box } from '@mui/system';
import type { TypographyProps } from '@material-ui/core';
import { styled as styledMUI } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import styled from 'styled-components';

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

export const ContainerLogin = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
})``;

export const ContainerBottom = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
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
