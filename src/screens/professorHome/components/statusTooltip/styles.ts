import styled from 'styled-components';
import { TypeMonitoringStatus } from '../../../../utils/constants';
import theme from '../../../../utils/theme';
import { Box } from '@mui/material';
import { amber, blue } from '@mui/material/colors';

type StatusIconProps = {
  status: TypeMonitoringStatus;
};

const TypeMonitoringStatusColor = {
  [TypeMonitoringStatus.AVAILABLE]: theme.palette.primary.main,
  [TypeMonitoringStatus.REJECTED]: theme.palette.error.main,
  [TypeMonitoringStatus.PENDING]: theme.palette.grey[400],
  [TypeMonitoringStatus.APPROVED]: amber[500],
  [TypeMonitoringStatus.FINISHED]: blue[500],
};

export const StatusIcon = styled(Box).attrs<StatusIconProps>((props) => ({
  width: '16px',
  minWidth: '16px',
  height: '16px',
  borderRadius: '16px',
  backgroundColor: TypeMonitoringStatusColor[props.status],
}))<StatusIconProps>``;
