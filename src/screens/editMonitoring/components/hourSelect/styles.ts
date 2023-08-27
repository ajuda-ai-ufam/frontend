import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../../../utils/theme';
import { Select, Typography, Switch } from '@mui/material';
import { Button } from '../../../../components/button';

export const DayContainer = styled(Box).attrs({
  display: 'flex',
  gap: '32px',
  width: '100%',
})`
  @media (max-width: 1225px) {
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  @media (max-width: ${theme.breakpoints.values.md}px) {
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    gap: 16px !important;
  }
`;

export const SwitchContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: '156px',
})``;

interface HoursContainerProp {
  disable?: boolean;
}

export const HoursContainer = styled(Box).attrs(() => ({
  display: 'flex',
  gap: '32px',
  alignItems: 'center',
  width: '100%',
}))<HoursContainerProp>`
  opacity: ${(HoursContainerProp) =>
    HoursContainerProp.disable ? '0.4' : '1'} !important;

  @media (max-width: 1225px) {
    flex-direction: column !important;
  }

  @media (max-width: ${theme.breakpoints.values.md}px) {
    flex-direction: row !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column !important;
    gap: 16px !important;
  }
`;

export const ReplicateButton = styled(Button).attrs(() => ({
  variant: 'text',
  color: 'primary',
}))<HoursContainerProp>`
  ${(HoursContainerProp) =>
    HoursContainerProp.disable
      ? 'opacity: 0.4 ; pointer-events: none; cursor: default'
      : ''}
`;

export const DisableContainer = styled(Box).attrs(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '32px',
  width: '37%',
}))<HoursContainerProp>`
  ${(HoursContainerProp) =>
    HoursContainerProp.disable
      ? 'opacity: 0.4 ; pointer-events: none; cursor: default;'
      : ''}

  @media (max-width: 1225px) {
    width: 100% !important;
    justify-content: flex-start !important;
  }

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 36% !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
    justify-content: flex-start !important;
    gap: 16px !important;
  }
`;

export const ReplicateButtonContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '155px',
})`
  @media (max-width: 1225px) {
    width: 100% !important;
  }

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 19.5% !important;
  }
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const StyledSelect = styled(Select).attrs({})`
  fieldset {
    border-radius: 12px;
  }

  width: 100% !important;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 100% !important;
  }
`;

export const SwitchTypography = styled(Typography).attrs({
  variant: 'body1',
  width: '88px',
  textAlign: 'center',
})`
  @media (max-width: 1225px) {
    text-align: start !important;
  }
`;

export const StyledSwitch = styled(Switch).attrs({
  color: 'primary',
  sx: {
    '& .MuiSwitch-switchBase': {
      color: theme.palette.grey[300],
    },
  },
})``;
