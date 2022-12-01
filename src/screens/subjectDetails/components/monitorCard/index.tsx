import { Typography } from '@mui/material';
import { TSubjectMonitor } from '../../../../service/requests/useGetSubject/types';
import theme from '../../../../utils/theme';
import { Container, DataContainer } from './styles';

type Props = {
  monitor: TSubjectMonitor;
  handleMonitorClick(monitor: TSubjectMonitor): void;
};

const MonitorCard = ({ monitor, handleMonitorClick }: Props) => (
  <Container onClick={() => handleMonitorClick(monitor)}>
    <DataContainer>
      <Typography textAlign={'center'} variant="caption">
        {monitor.course.name}
      </Typography>
      <Typography textAlign={'center'} style={{ margin: '8px 0' }} variant="h6">
        {monitor.name}
      </Typography>
      <Typography
        textAlign={'center'}
        style={{ color: `${theme.palette.grey[600]}` }}
        variant="caption"
      >
        Prof. {monitor.responsable.name}
      </Typography>
    </DataContainer>
  </Container>
);

export default MonitorCard;
