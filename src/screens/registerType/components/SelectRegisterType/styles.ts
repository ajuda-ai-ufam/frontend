import { styled as styledMUI } from '@material-ui/core/styles';
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

export const ContainerDisclaimer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '13px',
  width: '420px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const StudentButton = styled(Button).attrs({
  color: 'primary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
    margin-top: 22px !important;
  }
`;

export const ProfessorButton = styled(Button).attrs({
  color: 'secondary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const ContainerBottom = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  marginTop: '32px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column !important;
  }
`;

export const TypographyStartRegister = styledMUI(Typography)({
  lineHeight: '41.15px',
  align: 'center',
  color: theme.palette.secondary.main,
  margin: 2,
  textAlign: 'center',
});

export const TypographyDisclaimer = styledMUI(Typography)({
  lineHeight: '24px',
  align: 'center',
  color: theme.palette.secondary.main,
  margin: 2,
  textAlign: 'center',
});
