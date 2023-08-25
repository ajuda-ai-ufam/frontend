import { Box } from '@mui/system';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { Typography, CircularProgress } from '@mui/material';
import { TextField } from '../../components/textField';
import { Button } from '../../components/button';

export const Container = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '24px',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
  }
`;

export const Card = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  padding: '32px',
  width: '1064px',
  margin: '24px',
})`
  border-radius: 24px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: calc(100% - 64px - 48px) !important;
  }
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
    margin: 0px !important;
    padding: 16px !important;
    box-shadow: none !important;
    border-radius: 0px !important;
    margin-bottom: 32px !important;
  }
`;

export const ContentContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '24px',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    gap: 16px !important;
  }
`;

export const HeaderTypography = styled(Typography).attrs({
  variant: 'h3',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    font-weight: 500px !important;
    font-size: 24px !important;
    line-height: 32px !important;
  }
`;

export const PreferenceContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '100%',
})``;

export const TextFieldContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  width: '100%',
})``;

export const TypographyNoSetting = styled(Typography).attrs({
  variant: 'body1',
  textAlign: 'center',
})`
  color: ${theme.palette.grey[600]} !important;
`;

export const InputLengthContainer = styled(Box).attrs({
  padding: '4px 16px 0px 16px',
  textAlign: 'end',
})``;

export const StyledTextField = styled(TextField).attrs({
  width: '100%',
})``;

export const AvailabilityContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '100%',
})``;

export const AvailabilityHeader = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '100%',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    gap: 16px !important;
  }
`;

export const AvailabilityManageContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  width: '100%',
})``;

interface HoursContainerProp {
  disable?: boolean;
}

export const CancelButton = styled(Button).attrs(() => ({
  variant: 'text',
  color: 'primary',
  width: '216px',
}))<HoursContainerProp>`
  ${(HoursContainerProp) =>
    HoursContainerProp.disable
      ? 'opacity: 0.4 ; pointer-events: none; cursor: default'
      : ''}

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const SaveButtonContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  gap: '32px',
  height: '40px',
  marginTop: '24px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column-reverse !important;
    gap: 16px !important;
    align-items: center !important;
    height: 100% !important;
  }
`;

export const SaveButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
  width: '198px',
  maxHeight: '40px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const PreferentialPlaceContainer = styled(Box).attrs({
  display: 'flex',
  padding: '16px',
})`
  border-radius: 12px;
  background: ${theme.palette.background.default} !important;
`;

export const HeaderContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    height: 32px !important;
  }
`;

export const EditButton = styled(Button).attrs({
  color: 'primary',
  variant: 'contained',
  width: '140px',
  height: '44px',
})`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 118px !important;
  }
`;

export const ShowAvailabilityContainer = styled(Box).attrs({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
})``;

export const ShowDay = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  width: '64%',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    width: 100% !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: column !important;
    align-items: flex-start !important;
  }
`;

export const HoursContainer = styled(Box).attrs({
  display: 'flex',
  gap: '24px',
  width: '100%',
  alignItems: 'center',
})``;

export const ShowHourContainer = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px 16px',
  width: '100%',
  height: '40px',
})`
  border-radius: 12px !important;
  background: ${theme.palette.background.default} !important;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    width: 100% !important;
  }
`;

export const DayNameContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'flex-start',
})`
  @media (max-width: ${theme.breakpoints.values.md}px) {
    justify-content: center !important;
  }
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    justify-content: flex-start !important;
  }
`;

export const LoadingContainer = styled(Box).attrs({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})``;

export const StyledCircularProgress = styled(CircularProgress).attrs({})`
  width: 20px !important;
  height: 20px !important;
`;
