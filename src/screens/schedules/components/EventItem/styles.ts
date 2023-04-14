import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import { SchedulesStatus } from '../../../../utils/constants';
import theme from '../../../../utils/theme';
import { blue, orange } from '@mui/material/colors';

export const Container = styled(Box).attrs({
  display: 'flex',
  backgroundColor: theme.palette.background.default,
  borderRadius: '16px',
  width: '100%',
})`
  :hover {
    cursor: pointer;
    transition: 0.5s;
    opacity: 0.7;
  }

  @media (max-width: ${theme.breakpoints.values.xl}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DataField = styled(Box).attrs({
  margin: '8px',
})`
  @media (max-width: ${theme.breakpoints.values.xl}px) {
    display: flex !important;
    flex-direction: column;
    align-items: center;
  }
`;

interface EventTypeContainerProps {
  monitor: boolean;
}

export const EventTypeContainer = styled(Box).attrs<EventTypeContainerProps>(
  (props) => ({
    backgroundColor: props.monitor
      ? theme.palette.primary.main
      : theme.palette.secondary.light,
    borderRadius: '16px 0 0 16px',
    minWidth: '140px',
    padding: '16px',
  })
)<EventTypeContainerProps>`
  & h6,
  span {
    color: white;
  }

  @media (max-width: ${theme.breakpoints.values.xl}px) {
    width: 100% !important;
    border-radius: 16px 16px 0 0 !important;
    padding: 0 !important;
  }
`;

export const EventDataContainer = styled(Box).attrs({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  width: '100%',
  marginLeft: '16px',
  padding: '16px 8px',
})`
  @media (max-width: ${theme.breakpoints.values.xl}px) {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    width: 100% !important;
    margin: 0 !important;
  }

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    padding: 16px 0 !important;
  }
`;

export const Label = styled(Typography).attrs({
  variant: 'caption',
  color: theme.palette.secondary.light,
})``;

export const Value = styled(Typography).attrs({
  variant: 'subtitle1',
})``;

export const StatusValue = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})``;

interface StatusIconProps {
  status: SchedulesStatus;
  monitor: boolean;
}

const scheduleStatusColor = {
  [SchedulesStatus.CONFIRMED]: theme.palette.primary.main,
  [SchedulesStatus.CANCELED]: theme.palette.error.main,
  [SchedulesStatus.PENDING]: theme.palette.warning.main,
  [SchedulesStatus.REALIZED]: blue[500],
  [SchedulesStatus.NOT_REALIZED]: orange[500],
};

export const StatusIcon = styled(Box).attrs<StatusIconProps>((props) => ({
  width: '16px',
  minWidth: '16px',
  height: '16px',
  borderRadius: '16px',
  backgroundColor:
    !props.monitor && props.status === SchedulesStatus.PENDING
      ? theme.palette.grey[400]
      : scheduleStatusColor[props.status],
}))<StatusIconProps>``;
