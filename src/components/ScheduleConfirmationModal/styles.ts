import styled from 'styled-components';
import theme from '../../utils/theme';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Button } from '../button';

export const HeaderTypography = styled(Typography).attrs({
  variant: 'h4',
})``;

export const SubTypography = styled(Typography).attrs({
  variant: 'body1',
})``;

export const DoneTypography = styled(Typography).attrs({
  color: 'primary',
  variant: 'body1',
})``;
export const NotDoneTypography = styled(Typography).attrs({
  color: 'error',
  variant: 'body1',
})``;

export const Card = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '8px 0px 0px',
  gap: '24px',
})``;

export const ConfirmationContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '16px',
})``;

export const ButtonContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  gap: '24px',
  width: '100%',
})``;

export const ScheduleContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 24px',
  gap: '16px',
  backgroundColor: theme.palette.background.default,
  width: '94%',
})`
  border-radius: 16px;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    flex-direction: column !important;
    width: 40% !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const SchedulesOpen = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  maxHeight: '488px',
  maxWidth: '968px',
  width: '100%',
  gap: '16px',
  overflow: 'auto',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    max-height: 100% !important;
    widht: 80% !important;
  }
  @media (max-width: ${theme.breakpoints.values.md}px) {
    flex-direction: row !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
  }
`;

export const ElementContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '4px',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    align-items: center !important;
  }
`;

export const ConfirmationButtonContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  gap: '8px',
  width: '271px',
})``;

export const ConfirmationButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',

  width: '50%',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 50% !important ;
  }
`;

export const NegationButton = styled(Button).attrs({
  variant: 'contained',
  color: 'error',

  width: '50%',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 50% !important ;
  }
`;

export const FinalButton = styled(Button).attrs({
  color: 'primary',
  variant: 'contained',
  width: 'auto',
})``;
