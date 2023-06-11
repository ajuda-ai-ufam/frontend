import { Switch, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { Button } from '../button';

export const LoadingContainer = styled(Box).attrs({
  display: 'flex',
  justifyContente: 'center',
  width: '100%',
  padding: '16px 0',
})``;

export const ConfirmationContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '24px',
  padding: '16px 0',
})``;

export const ConfirmationTextContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
})``;

export const CardContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '8px 0px',
})`
  gap: 24px;
`;

export const TypographyContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
})`
  padding: 0px !important;
  gap: 24px;
`;

export const WeekDayContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  width: '100%',
})``;

export const DaysContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})`
  gap: 16px;
`;

export const ChipContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0px',
  width: '100%',
})`
  gap: 16px;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    gap: 8px !important;
    width: 272px !important;
  }
`;

export const HoursContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    justify-content: center !important;
  }
`;

export const AvailabilityContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: '0px',
  width: '100%',
})`
  gap: 16px;
`;

export const SwitchContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
})`
  gap: 16px;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    gap: 8px !important;
  }
`;

type SelectContainerProps = {
  isSelected?: boolean;
};

export const SelectContainer = styled(Box).attrs<SelectContainerProps>(
  (props) => ({
    display: props.isSelected ? 'flex' : 'none',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  })
)<SelectContainerProps>`
  gap: 24px;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 8px !important;
  }
`;

export const Container = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
})`
  gap: 24px;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    gap: 8px !important;
    width: 100%;
    justify-content: center !important;
    align-items: center !important;
  }
`;

export const ButtonContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px 0',
  width: '100%',
  gap: '32px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    gap: 24px !important;
    padding: 0px !important;
    flex-direction: column-reverse !important;
    align-items: flex-start !important;
  }
`;

export const ButtonCancel = styled(Button).attrs({
  color: 'primary',
  variant: 'text',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const ButtonSave = styled(Button).attrs({
  color: 'primary',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const Placeholder = styled(Typography).attrs({
  variant: 'body1',
})`
  color: ${theme.palette.grey[600]} !important;
`;

export const StyledSwitch = styled(Switch).attrs({
  color: 'primary',
  sx: {
    '& .MuiSwitch-switchBase': {
      color: theme.palette.grey[300],
    },
  },
})``;
